import React, { useState, createRef } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { Button, Spin, Card, List, Typography } from 'antd';
import { kanbanDb } from '../../database/local/hooks/indexed-db-hooks';

import { IColumn } from './kanban.types';
import { seed } from '../../database/local/seed';
import { KanbanItem } from '../kanban-item/KanbanItem';
import {
  IKanbanItemForm,
  IKanbanItemHandle,
} from '../kanban-item/kanban-item.types';

import styles from './kanban.module.scss';

const Kanban = () => {
  const {
    kanbanColumns,
    setKanbanColumns,
    addNewKanbanColumn,
    updateKanbanColumn,
    loading,
  } = kanbanDb();
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

  const onOkayClicked = () => {
    if (!kanbanItemRef || !kanbanItemRef.current) {
      return;
    }
    kanbanItemRef.current.getValue().then((res: IKanbanItemForm) => {
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
    });
    kanbanItemRef.current.close();
  }

  const openNewItemModal = () => {
    if (!kanbanItemRef || !kanbanItemRef.current) {
      return;
    }
    kanbanItemRef.current.open();
  }

  return (
    <>
      {loading && <Spin />}
      <div className={styles.buttonContainer}>
        <div className={styles.flexSpace} />
        <Button
          className={`${styles.button} ${styles.addSeedButton}`}
          type="primary"
          onClick={() => {
            setKanbanColumns(seed);
          }}
        >
          Add Seed
        </Button>
        <Button
          className={`${styles.button} ${styles.addItemButton}`}
          type="primary"
          onClick={() => openNewItemModal()}
        >
          Add Item
        </Button>
      </div>
      <KanbanItem
        ref={kanbanItemRef}
        columns={kanbanColumns.map((column) => column.title)}
        onOkClicked={() => { onOkayClicked() }}
      />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className={styles.kanbanContainer}>
          {kanbanColumns.map((column) => (
            <Droppable key={column.title} droppableId={column.id}>
              {(provided, snapshot) => (
                <div
                  className={styles.columnContainer}
                  ref={provided.innerRef}
                >
                  <List
                    header={<Typography.Title className={styles.kanbanRowTitle} level={4}>{column.title}</Typography.Title>}
                    dataSource={column.tasks}
                    renderItem={((item, index) => (
                      <List.Item className={styles.kanbanListItem}>
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(providedItem) => (
                            <Card
                              className={`${styles.kanbanCard} ${snapshot.isDraggingOver ? styles.dragging : ''}`}
                              title={item.title}
                              ref={providedItem.innerRef}
                              {...providedItem.draggableProps}
                              {...providedItem.dragHandleProps}
                            >
                              <Card.Meta
                                title={item.details}
                                description={item.metadeta}
                              />
                            </Card>
                          )}
                        </Draggable>
                      </List.Item>
                    ))}
                  >
                    {provided.placeholder}
                  </List>
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
