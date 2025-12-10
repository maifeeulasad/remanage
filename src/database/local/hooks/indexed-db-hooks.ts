import React, { useEffect, useState } from 'react';
import { IColumn } from '../../../component/kanban/kanban.types';
import { getColumnDB, initDb, setColumnDB, updateColumnDB } from '../indexed-db';

const kanbanDb = () => {
  const [loading, setLoading] = useState(true);
  const [kanbanColumnsState, setKanbanColumnsState] = useState<IColumn[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        await initDb();
        const dbColumns = await getColumnDB();
        setKanbanColumnsState(dbColumns);
        setLoading(false);
      } catch (error) {
        console.error('Failed to initialize database:', error);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const setKanbanColumns = async (dbColumns: IColumn[]) => {
    setLoading(true);
    try {
      await setColumnDB(dbColumns);
      setKanbanColumnsState(dbColumns);
    } catch (error) {
      console.error('Failed to set columns:', error);
    } finally {
      setLoading(false);
    }
  };

  const addNewKanbanColumn = async (dbColumn: IColumn) => {
    setLoading(true);
    try {
      await setColumnDB([dbColumn]);
      setKanbanColumnsState([...kanbanColumnsState, dbColumn]);
    } catch (error) {
      console.error('Failed to add column:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateKanbanColumn = async (dbColumn: IColumn) => {
    setLoading(true);
    try {
      await updateColumnDB(dbColumn);
      const updatedColumns = kanbanColumnsState.map(col => 
        col.id === dbColumn.id ? dbColumn : col
      );
      setKanbanColumnsState(updatedColumns);
    } catch (error) {
      console.error('Failed to update column:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    kanbanColumns: kanbanColumnsState,
    setKanbanColumns,
    addNewKanbanColumn,
    updateKanbanColumn,
    loading,
  };
};

export { kanbanDb };
