import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

const initialData: IKanban = {
  columns: [{
    id: 'Backlog',
    title: 'Backlog',
    tasks: ['prem', 'taka', 'time', 'poralekha'],
  },
  {
    id: 'ToDo',
    title: 'To Do',
    tasks: ['hmmm... shob'],
  },
  {
    id: 'WIP',
    title: 'WIP',
    tasks: ['janinah'],
  },
  {
    id: 'Completed',
    title: 'Completee',
    tasks: [],
  },
  ],
};

const Kanban = () => {
  const [kanban, setKanban] = useState<IKanban>(initialData);

  const handleOnDragEnd = (result:any) => {
    if (result.source === undefined || result.destination === undefined) {
      return;
    }

    const sourceColumnId = result.source.droppableId;
    const destinationColumnId = result.destination.droppableId;

    const sourceColumn = kanban.columns.find((column) => column.id === sourceColumnId);
    const destinationColumn = kanban.columns.find((column) => column.id === destinationColumnId);

    if (sourceColumn === undefined || destinationColumn === undefined) {
      return;
    }

    const destinationTasks = destinationColumn.tasks;
    const sourceTasks = sourceColumn.tasks;

    const itemInserted = sourceTasks[result.source.index];
    sourceTasks.splice(result.source.index, 1);
    destinationTasks.splice(result.destination.index, 0, itemInserted);

    const newkanban = { ...kanban };
    newkanban.columns = kanban.columns.map((column) => {
      if (column.id === result.source.droppableId) {
        return { ...column, tasks: sourceTasks };
      } if (column.id === result.destination.droppableId) {
        return { ...column, tasks: destinationTasks };
      }
      return column;
    });
    setKanban(newkanban);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div style={{ display: 'flex' }} className="dropped-content">
        {kanban.columns.map((column) => (
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
