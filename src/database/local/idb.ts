import { IDBPDatabase, openDB } from 'idb';
import { IColumn } from '../../component/kanban/kanban.types';

let db: IDBPDatabase | undefined;
const databaseName = 'kanban-idb';

const init = () => openDB(databaseName, 1, {
  upgrade(dbUpgrade: IDBPDatabase) {
    if (!dbUpgrade.objectStoreNames.contains('kanban')) {
      dbUpgrade.createObjectStore('kanban', { keyPath: 'id' });
    }
  },
}).then((dbCallback) => {
  db = dbCallback;
});

const getColumnDB = () : Promise<IColumn[]> => {
  if (!db) return Promise.reject(new Error('DB not defined'));
  const tx = db.transaction('kanban', 'readonly');
  const store = tx.objectStore('kanban');
  return store.getAll().then((res: IColumn[]) => Promise.resolve(res));
};

const getColumnNamesDB = () : Promise<string[]> => {
  if (!db) return Promise.reject(new Error('DB not defined'));
  const tx = db.transaction('kanban', 'readonly');
  const store = tx.objectStore('kanban');
  return store.getAllKeys().then((res: IDBValidKey[]) => Promise.resolve(res as string[]));
};

const setColumnDB = (data: IColumn[]) : Promise<void> => {
  if (!db) return Promise.reject(new Error('DB not defined'));
  const tx = db.transaction('kanban', 'readwrite');
  const store = tx.objectStore('kanban');
  data.map(async (datum) => {
    await store.put(datum);
  });
  return Promise.resolve();
};

export { init, getColumnDB, getColumnNamesDB, setColumnDB };
