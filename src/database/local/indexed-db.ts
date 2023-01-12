import { IColumn } from '../../component/kanban/kanban.types';

const initDb = (): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open('kanban', 1);

    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      resolve(db);
    };

    request.onerror = () => reject();

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      db.createObjectStore('kanban', {
        keyPath: 'id',
      });
    };
  });

const getColumnDB = (db: IDBDatabase): Promise<IColumn[]> =>
  new Promise((resolve, reject) => {
    const transaction = db.transaction(['kanban'], 'readonly');

    transaction.onerror = (event) => {
      reject(event);
    };

    const store = transaction.objectStore('kanban');
    store.getAll().onsuccess = (event) => {
      // @ts-ignore
      resolve(event.target.result as IColumn[]);
    };
  });

const setColumnDB = (db: IDBDatabase, columns: IColumn[]): Promise<void> =>
  new Promise((resolve, reject) => {
    const transaction = db.transaction(['kanban'], 'readwrite');

    transaction.oncomplete = () => resolve();

    transaction.onerror = (event) => reject(event);

    const store = transaction.objectStore('kanban');
    columns.map((column) => store.put(column));
  });

export { initDb, getColumnDB, setColumnDB };
