import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

// interface ITask {
//   id: string;
//   title: string;
//   details: string;
//   metadeta: JSON;
// }

interface IColumn {
  id: string;
  title: string;
  tasks: string[];
}

interface IKanban {
  columns: IColumn[];
}

const Kanban = ({ columns }: IKanban) => {
  const [kanbanColumns, setKanbanColumns] = useState<IColumn[]>(columns);

  const handleOnDragEnd = (result:DropResult) => {
    if (result.destination === undefined || result.destination === null) {
      return;
    }

    const sourceColumnId = result.source.droppableId;
    const destinationColumnId = result.destination.droppableId;

    const sourceColumn = kanbanColumns.find((column) => column.id === sourceColumnId);
    const destinationColumn = kanbanColumns.find((column) => column.id === destinationColumnId);

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
      } if (column.id === destinationColumnId) {
        return { ...column, tasks: destinationTasks };
      }
      return column;
    });
    setKanbanColumns(newKanbanColumns);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div style={{ display: 'flex' }} className="dropped-content">
        {kanbanColumns.map((column) => (
          <Droppable key={column.title} droppableId={column.id}>
            {(provided) => (
              <div
                style={{ margin: '20px' }}
                className="dropped-container"
                ref={provided.innerRef}
              >
                <h3>{column.title}</h3>
                {column.tasks.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(providedItem) => (
                      <p
                        className="drop-list-item list-none text-red-400"
                        ref={providedItem.innerRef}
                            // eslint-disable-next-line react/jsx-props-no-spreading
                        {...providedItem.draggableProps}
                            // eslint-disable-next-line react/jsx-props-no-spreading
                        {...providedItem.dragHandleProps}
                      >
                        {item}
                      </p>
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
  );
};

export { Kanban };
