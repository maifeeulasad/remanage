import React, { createContext, useContext, ReactNode, useRef, useState } from "react";

interface DropResult {
  source: {
    index: number;
    droppableId: string;
  };
  destination?: {
    index: number;
    droppableId: string;
  } | null;
  draggableId: string;
}

interface DragDropContextProps {
  onDragEnd: (result: DropResult) => void;
  children: ReactNode;
}

const DragDropContext = ({ onDragEnd, children }: DragDropContextProps) => {
  const handleDragEnd = (event: React.DragEvent) => {
    event.preventDefault();
    const sourceIndex = Number(event.dataTransfer.getData("sourceIndex"));
    const sourceDroppableId = event.dataTransfer.getData("sourceDroppableId");
    const draggableId = event.dataTransfer.getData("draggableId");
    const destinationElement = (event.target as HTMLElement).closest("[data-droppable-id]");
    
    if (!destinationElement) return;
    
    const destinationDroppableId = destinationElement.getAttribute("data-droppable-id") as string;
    
    let destinationIndex = Array.from(destinationElement.children).indexOf(event.target as HTMLElement);
    if (destinationIndex === -1) destinationIndex = 0; 
    
    const dropResult: DropResult = {
      source: { index: sourceIndex, droppableId: sourceDroppableId },
      destination: { index: destinationIndex, droppableId: destinationDroppableId },
      draggableId,
    };
    
    onDragEnd(dropResult);
  };

  return (
    <div onDragOver={(e) => e.preventDefault()} onDrop={handleDragEnd}>
      {children}
    </div>
  );
};

const DroppableContext = createContext<{ droppableId: string } | null>(null);

interface DroppableProps {
  droppableId: string;
  children: (provided: { innerRef: (node: HTMLElement | null) => void; placeholder: ReactNode }, snapshot: { isDraggingOver: boolean }) => ReactNode;
}

const Droppable = ({ droppableId, children }: DroppableProps) => {
  const ref = useRef<HTMLElement | null>(null);
  return (
    <DroppableContext.Provider value={{ droppableId }}>
      {children(
        {
          innerRef: (node) => {
            ref.current = node;
            if (node) {
              node.setAttribute("data-droppable-id", droppableId);
            }
          },
          placeholder: <div style={{ height: "10px" }} />,
        },
        { isDraggingOver: false }
      )}
    </DroppableContext.Provider>
  );
};

interface DraggableProps {
  draggableId: string;
  index: number;
  children: (provided: { 
    innerRef: (node: HTMLElement | null) => void; 
    draggableProps: any; 
    dragHandleProps: any; 
    dragging: boolean;
  }) => JSX.Element;
}

const Draggable = ({ draggableId, index, children }: DraggableProps) => {
  const droppableContext = useContext(DroppableContext);
  const [dragging, setDragging] = useState(false);

  if (!droppableContext) {
    throw new Error("Draggable must be used within a Droppable");
  }

  const handleDragStart = (event: React.DragEvent) => {
    setDragging(true);
    event.dataTransfer.setData("draggableId", draggableId);
    event.dataTransfer.setData("sourceIndex", index.toString());
    event.dataTransfer.setData("sourceDroppableId", droppableContext.droppableId);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  return children({
    innerRef: (node) => {
      if (node) {
        node.setAttribute("draggable", "true");
        node.addEventListener("dragstart", handleDragStart as any);
        node.addEventListener("dragend", handleDragEnd as any);
      }
    },
    draggableProps: { draggable: true },
    dragHandleProps: {},
    dragging,
  });
};

export { DragDropContext, Droppable, Draggable };
export type { DropResult };