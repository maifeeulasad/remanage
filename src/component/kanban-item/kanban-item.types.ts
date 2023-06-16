interface IKanbanItemHandle {
  open(): void;
  close(): void;
  getValue(): Promise<IKanbanItemForm>;
}

interface IKanbanItem {
  onOkClicked(): void;
  columns: string[];
}

interface IKanbanItemForm {
  column: string;
  title: string;
  details: string;
  metadata: string;
}

export type { IKanbanItem, IKanbanItemForm, IKanbanItemHandle };
