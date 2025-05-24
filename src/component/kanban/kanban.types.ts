export interface ITask {
  id: string;
  title: string;
  details: string;
  metadeta?: string;
  isPlaceholder?: boolean;
}

export interface IColumn {
  id: string;
  title: string;
  tasks: ITask[];
}
