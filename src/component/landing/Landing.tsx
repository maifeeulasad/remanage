/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal } from 'antd';
import { Kanban } from '../kanban/Kanban';
import { getColumnNamesDB } from '../../database/local/idb';
import { RowDetails, IRowDetailsHandle } from '../row-details/RowDetails';

interface IAddRowModal {
  visibility: boolean;
  onClose: () => void;
}

const AddRowModal = ({ visibility, onClose }:IAddRowModal) => {
  const [columnNames, setColumnNames] = useState<string[]>([]);
  const formElem = useRef<IRowDetailsHandle>(null);

  useEffect(() => {
    getColumnNamesDB().then((res) => {
      setColumnNames(res);
    });
  }, []);

  return (
    <Modal
      visible={visibility}
      closable
      onCancel={() => { onClose(); }}
      onOk={() => {
        console.debug(formElem.current?.getForm());
        onClose();
      }}
    >
      <RowDetails columnNames={columnNames} ref={formElem} />
    </Modal>
  );
};

const Landing = () => {
  const [addRowModalVisibility, setAddRowModalVisibility] = useState(false);
  const hideAddRowModalVisibility = () => setAddRowModalVisibility(false);
  const showAddRowModalVisibility = () => setAddRowModalVisibility(true);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }} />
        <Button type="primary" onClick={() => { showAddRowModalVisibility(); }}>Add</Button>
      </div>
      <AddRowModal visibility={addRowModalVisibility} onClose={hideAddRowModalVisibility} />
      <Kanban />
    </>
  );
};

export { Landing };
