import React, { useEffect, useState } from 'react';
import { IColumn } from '../../../component/kanban/kanban.types';
import { getColumnDB, initDb, setColumnDB } from '../indexed-db';

enum DbState {
  LOADING = 0,
  COMPLETED = 1,
  BROKEN = 2,
}

const kanbanDb = () => {
  const [dbState, setDbState] = useState(DbState.LOADING);
  const [db, setDb] = useState<IDBDatabase | undefined>(undefined);

  useEffect(() => {
    initDb().then((idb) => {
      setDb(idb);
    });
  }, []);

  useEffect(() => {
    if (db !== undefined) {
      setDbState(DbState.COMPLETED);
    }
  }, [db]);

  const getColumn = () => {
    if (db) {
      return getColumnDB(db);
    }
    throw new Error('DB not initialized');
  };

  const setColumn = (columns: IColumn[]) => {
    if (db) {
      return setColumnDB(db, columns);
    }
    throw new Error('DB not initialized');
  };

  return { getColumn, setColumn, dbState };
};

export { kanbanDb, DbState };
