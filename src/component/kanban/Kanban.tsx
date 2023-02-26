import React, { useState, createRef } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { Button, Modal, Spin } from 'antd';
import { kanbanDb } from '../../database/local/hooks/indexed-db-hooks';

import { IColumn, IKanban } from './kanban.types';
import { seed } from '../../database/local/seed';
import { KanbanItem } from '../kanban-item/KanbanItem';
import {
  IKanbanItemForm,
  IKanbanItemHandle,
} from '../kanban-item/kanban-item.types';

const Kanban = ({ cellWidth }: IKanban) => {
  const {
    kanbanColumns,
    setKanbanColumns,
    addNewKanbanColumn,
    updateKanbanColumn,
    loading,
  } = kanbanDb();
  const [addItemModalVisibility, setAddItemModalVisibility] = useState(false);
  const kanbanItemRef = createRef<IKanbanItemHandle>();

  const handleOnDragEnd = (result: DropResult) => {
    if (result.destination === undefined || result.destination === null) {
      return;
    }

    const sourceColumnId = result.source.droppableId;
    const destinationColumnId = result.destination.droppableId;

    const sourceColumn = kanbanColumns.find(
      (column) => column.id === sourceColumnId,
    );
    const destinationColumn = kanbanColumns.find(
      (column) => column.id === destinationColumnId,
    );

    if (sourceColumn === undefined || destinationColumn === undefined) {
      return;
    }

    const destinationTasks = destinationColumn.tasks;
    const sourceTasks = sourceColumn.tasks;

    const itemInserted = sourceTasks[result.source.index];
    sourceTasks.splice(result.source.index, 1);
    destinationTasks.splice(result.destination.index, 0, itemInserted);

    const newKanbanColumns = kanbanColumns.map((column) => {
      if (column.id === sourceColumnId) {
        return { ...column, tasks: sourceTasks };
      }
      if (column.id === destinationColumnId) {
        return { ...column, tasks: destinationTasks };
      }
      return column;
    });
    setKanbanColumns(newKanbanColumns);
  };

  return (
    <>
      {loading && <Spin />}
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }} />
        <Button
          type="primary"
          onClick={() => {
            setKanbanColumns(seed);
          }}
        >
          Add Seed
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setAddItemModalVisibility(true);
          }}
        >
          Add Item
        </Button>
      </div>
      <Modal
        title="Add Item"
        visible={addItemModalVisibility}
        closable
        onCancel={() => {
          setAddItemModalVisibility(false);
        }}
        onOk={() => {
          if (kanbanItemRef) {
            kanbanItemRef.current?.getValue().then((res: IKanbanItemForm) => {
              const columnName = res.column;
              const oldColumn = kanbanColumns.find(
                (kanbanColumn) => kanbanColumn.id === columnName,
              );
              if (!oldColumn) {
                // new column
                const newColumn: IColumn = {
                  id: columnName,
                  title: columnName,
                  tasks: [
                    {
                      id: new Date().toUTCString(),
                      title: res.title,
                      details: res.details,
                      metadeta: res.metadata,
                    },
                  ],
                };
                addNewKanbanColumn(newColumn);
              } else {
                // old column
                oldColumn.tasks = [
                  ...oldColumn.tasks,
                  {
                    id: new Date().toUTCString(),
                    title: res.title,
                    details: res.details,
                    metadeta: res.metadata,
                  },
                ];
                updateKanbanColumn(oldColumn);
              }
              setAddItemModalVisibility(false);
            });
          }
        }}
      >
        <KanbanItem
          ref={kanbanItemRef}
          columns={kanbanColumns.map((column) => column.title)}
        />
      </Modal>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div style={{ display: 'flex' }}>
          {kanbanColumns.map((column) => (
            <Droppable key={column.title} droppableId={column.id}>
              {(provided) => (
                <div
                  className="grow"
                  style={{ margin: '20px', border: 'red dotted 1px' }}
                  ref={provided.innerRef}
                >
                  <h3>{column.title}</h3>
                  {column.tasks.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(providedItem) => (
                        <div
                          ref={providedItem.innerRef}
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...providedItem.draggableProps}
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...providedItem.dragHandleProps}
                        >
                          <div
                            style={{
                              border: 'blue solid 1px',
                              minWidth: `${cellWidth || '200'} px !important`,
                            }}
                          >
                            <h1>{item.title}</h1>
                            <p title={item.metadeta}>{item.details}</p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </>
  );
};

export { Kanban };
