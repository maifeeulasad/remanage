interface IKanbanItemHandle {
  getValue(): Promise<IKanbanItemForm>;
}

interface IKanbanItem {
  columns: string[];
}

interface IKanbanItemForm {
  column: string;
  title: string;
  details: string;
  metadata: string;
}

export type { IKanbanItem, IKanbanItemForm, IKanbanItemHandle };
