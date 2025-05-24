import React, {
  createContext,
  useContext,
  ReactNode,
  useRef,
  useState,
} from "react";

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

const DropIndexContext = createContext<{
  dragOverIndex: number | null;
  setDragOverIndex: (index: number | null) => void;
} | null>(null);

const DragDropContext = ({ onDragEnd, children }: DragDropContextProps) => {
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragOver = (event: React.DragEvent) => {
    const destinationElement = (event.target as HTMLElement).closest(
      "[data-droppable-id]"
    );
    if (!destinationElement) return;

    const targetDraggable = (event.target as HTMLElement).closest(
      "[data-draggable-id]"
    );
    let destinationIndex = 0;

    if (targetDraggable) {
      const siblings = Array.from(
        destinationElement.querySelectorAll("[data-draggable-id]")
      );
      destinationIndex = siblings.findIndex((el) => el === targetDraggable);
      if (destinationIndex === -1) destinationIndex = siblings.length;
    }

    setDragOverIndex(destinationIndex);
  };

  const handleDragEnd = (event: React.DragEvent) => {
    event.preventDefault();

    const sourceIndex = Number(event.dataTransfer.getData("sourceIndex"));
    const sourceDroppableId = event.dataTransfer.getData("sourceDroppableId");
    const draggableId = event.dataTransfer.getData("draggableId");

    const destinationElement = (event.target as HTMLElement).closest(
      "[data-droppable-id]"
    );
    if (!destinationElement) return;

    const destinationDroppableId = destinationElement.getAttribute(
      "data-droppable-id"
    ) as string;

    const targetDraggable = (event.target as HTMLElement).closest(
      "[data-draggable-id]"
    );
    let destinationIndex = 0;

    if (targetDraggable) {
      const siblings = Array.from(
        destinationElement.querySelectorAll("[data-draggable-id]")
      );
      destinationIndex = siblings.findIndex((el) => el === targetDraggable);
      if (destinationIndex === -1) destinationIndex = siblings.length;
    }

    const dropResult: DropResult = {
      source: { index: sourceIndex, droppableId: sourceDroppableId },
      destination: {
        index: destinationIndex,
        droppableId: destinationDroppableId,
      },
      draggableId,
    };

    setDragOverIndex(null);
    onDragEnd(dropResult);
  };

  return (
    <DropIndexContext.Provider value={{ dragOverIndex, setDragOverIndex }}>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          handleDragOver(e);
        }}
        onDrop={handleDragEnd}
      >
        {children}
      </div>
    </DropIndexContext.Provider>
  );
};

const DroppableContext = createContext<{ droppableId: string } | null>(null);

interface DroppableProps {
  droppableId: string;
  children: (
    provided: {
      innerRef: (node: HTMLElement | null) => void;
      placeholder: ReactNode;
    },
    snapshot: { isDraggingOver: boolean }
  ) => ReactNode;
}

const Droppable = ({ droppableId, children }: DroppableProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const { dragOverIndex } = useContext(DropIndexContext)!;

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
          placeholder:
            dragOverIndex !== null ? (
              <div
                key="__placeholder__"
                style={{
                  height: "40px",
                  background: "#e0e0e0",
                  border: "2px dashed #aaa",
                  marginBottom: "8px",
                }}
              />
            ) : null,
        },
        { isDraggingOver: dragOverIndex !== null }
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
    event.dataTransfer.setData(
      "sourceDroppableId",
      droppableContext.droppableId
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  return children({
    innerRef: (node) => {
      if (node) {
        node.setAttribute("draggable", "true");
        node.setAttribute("data-draggable-id", draggableId);
        node.setAttribute("data-index", index.toString());
        node.addEventListener("dragstart", handleDragStart as any);
        node.addEventListener("dragend", handleDragEnd as any);
      }
    },
    draggableProps: { draggable: true },
    dragHandleProps: {},
    dragging,
  });
};

export { DragDropContext, Droppable, Draggable, DropIndexContext };
export type { DropResult };
