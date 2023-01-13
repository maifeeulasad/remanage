import React, { useEffect, useState } from 'react';
import { IColumn } from '../../../component/kanban/kanban.types';
import { getColumnDB, initDb, setColumnDB } from '../indexed-db';

const kanbanDb = () => {
  const [loading, setLoading] = useState(true);
  const [db, setDb] = useState<IDBDatabase | undefined>(undefined);
  const [kanbanColumnsState, setKanbanColumnsState] = useState<IColumn[]>([]);

  useEffect(() => {
    initDb().then((idb) => {
      setDb(idb);
      setLoading(false);
    });
  }, []);

  const getColumn = () => {
    if (!db) {
      throw new Error('DB not initialized');
    }
    return getColumnDB(db);
  };

  useEffect(() => {
    if (db) {
      getColumn().then((dbColumns) => setKanbanColumnsState(dbColumns));
    }
  }, [loading]);

  const setKanbanColumns = (dbColumns: IColumn[]) => {
    if (!db) {
      throw new Error('DB not initialized');
    }
    setLoading(true);
    setColumnDB(db, dbColumns)
      .then(() => {
        setKanbanColumnsState(dbColumns);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return { kanbanColumns: kanbanColumnsState, setKanbanColumns, loading };
};

export { kanbanDb };
