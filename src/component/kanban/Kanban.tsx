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
  const [stateData, updateStateData] = useState<IKanban>(initialData);

  const handleOnDragEnd = (result:any) => {
    if (result.destination === undefined) {
      return;
    }

    // eslint-disable-next-line max-len
    const destinationObject = stateData.columns.find((column) => column.id === result.destination.droppableId);
    // eslint-disable-next-line max-len
    const sourceObject = stateData.columns.find((column) => column.id === result.source.droppableId);
    if (sourceObject === undefined || destinationObject === undefined) {
      return;
    }

    const destinationArray = destinationObject.tasks;
    const sourceArray = sourceObject.tasks;

    const itemInserted = sourceArray[result.source.index];
    sourceArray.splice(result.source.index, 1);
    destinationArray.splice(result.destination.index, 0, itemInserted);

    const newStateData = { ...stateData };
    newStateData.columns = stateData.columns.map((column) => {
      if (column.id === result.source.droppableId) {
        return { ...column, tasks: sourceArray };
      } if (column.id === result.destination.droppableId) {
        return { ...column, tasks: destinationArray };
      }
      return column;
    });
    updateStateData(newStateData);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div style={{ display: 'flex' }} className="dropped-content">
        {stateData.columns.map((column) => (
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
