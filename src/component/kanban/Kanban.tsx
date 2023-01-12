import React, { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { Button, Modal } from 'antd';
import { kanbanDb } from '../../database/local/hooks/indexed-db-hooks';

import { IKanban } from './kanban.types';
import { seed } from '../../database/local/seed';

const Kanban = ({ cellWidth }: IKanban) => {
  const { setKanbanColumns, kanbanColumns, loading } = kanbanDb();
  const [addItemModalVisibility, setAddItemModalVisibility] = useState(false);

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
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }} />
        <Button
          type="primary"
          onClick={() => {
            // setAddItemModalVisibility(true);
            setKanbanColumns(seed);
          }}
        >
          Add Seed
        </Button>
      </div>
      <Modal
        visible={addItemModalVisibility}
        closable
        onCancel={() => {
          setAddItemModalVisibility(false);
        }}
        onOk={() => {
          setAddItemModalVisibility(false);
        }}
      />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div style={{ display: 'flex' }}>
          {kanbanColumns.map((column) => (
            <Droppable key={column.title} droppableId={column.id}>
              {(provided) => (
                <div
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
                            <p>{item.details}</p>
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
