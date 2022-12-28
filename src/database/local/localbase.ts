// @ts-ignore
import Localbase from 'localbase';
import { IColumn } from '../../component/kanban/kanban.types';

const db = new Localbase('kanban');

const getColumnDB = () : Promise<IColumn[]> => db.collection('kanban').get();
const setColumnDB = (data: IColumn[]) => db.collection('kanban').set(data);

export { getColumnDB, setColumnDB };
