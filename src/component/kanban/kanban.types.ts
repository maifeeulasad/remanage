export interface ITask {
  id: string;
  title: string;
  details: string;
  metadeta?: { [Key: string]: string };
}

export interface IColumn {
  id: string;
  title: string;
  tasks: ITask[];
}

export interface IKanban {
  columns: IColumn[];
}
