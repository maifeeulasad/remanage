import { Database, DataClass, KeyPath, Index } from 'idb-ts';
import { IColumn, ITask } from '../../component/kanban/kanban.types';

@DataClass()
class Task implements ITask {
  @KeyPath()
  id!: string;

  @Index()
  title!: string;

  details!: string;
  metadeta?: string;
  isPlaceholder?: boolean;

  constructor(id: string, title: string, details: string, metadeta?: string, isPlaceholder?: boolean) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.metadeta = metadeta;
    this.isPlaceholder = isPlaceholder;
  }
}

@DataClass()
class Column implements IColumn {
  @KeyPath()
  id!: string;

  @Index()
  title!: string;

  tasks!: ITask[];

  constructor(id: string, title: string, tasks: ITask[] = []) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
  }
}

type KanbanDatabase = {
  Column: any;
  Task: any;
};

let dbInstance: any = null;

const initDb = async (): Promise<any> => {
  if (dbInstance) {
    return dbInstance;
  }
  dbInstance = await Database.build('kanban', [Column, Task]);
  return dbInstance;
};

const getColumnDB = async (): Promise<IColumn[]> => {
  const db = await initDb();
  return await db.Column.list();
};

const setColumnDB = async (columns: IColumn[]): Promise<void> => {
  const db = await initDb();
  
  // Update or create each column
  for (const column of columns) {
    const columnEntity = new Column(column.id, column.title, column.tasks);
    try {
      await db.Column.update(columnEntity);
    } catch {
      await db.Column.create(columnEntity);
    }
  }
};

const addColumnDB = async (column: IColumn): Promise<void> => {
  const db = await initDb();
  const columnEntity = new Column(column.id, column.title, column.tasks);
  await db.Column.create(columnEntity);
};

const updateColumnDB = async (column: IColumn): Promise<void> => {
  const db = await initDb();
  const columnEntity = new Column(column.id, column.title, column.tasks);
  await db.Column.update(columnEntity);
};

export { initDb, getColumnDB, setColumnDB, addColumnDB, updateColumnDB, Column, Task };
