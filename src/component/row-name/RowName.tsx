import React, { useState } from 'react';
import { Select, Input, Button } from 'antd';

interface IRowName {
  columnNames: string[];
  error: string[];
  value?: string;
  onChange?: (value: string) => void;
}

const RowName = ({ columnNames, error, value, onChange }: IRowName) => {
  const [newColumn, setNewColumn] = useState<string>('');
  const [columnNamesLocal, setColumnNamesLocal] = useState(columnNames);
  const addNewColumnName = (newColumnName: string) => {
    setColumnNamesLocal([...columnNamesLocal, newColumnName]);
    if (onChange) onChange(newColumnName);
  };
  const onNewColumnChange = (newColumnName: string) => {
    setNewColumn(newColumnName);
    if (onChange) onChange(newColumnName);
  };

  return (
    <Select
      style={{ width: 200 }}
      showSearch
      placeholder="Search to Select"
      onChange={onChange}
      value={value}
        // eslint-disable-next-line react/no-unstable-nested-components
      dropdownRender={(menu) => (
        <>
          <div>
            {JSON.stringify(error)}
            {menu}
          </div>
          <div>
            <Input placeholder="Add new row" onChange={(e) => { onNewColumnChange(e.target.value); }} />
            <Button type="primary" onClick={() => { addNewColumnName(newColumn); }}>Add</Button>
          </div>
        </>
      )}
      options={columnNamesLocal.map((columnName) => ({ value: columnName, label: columnName }))}
    />
  );
};

const rowNameValidator = (columnNames: string[], value: string): Promise<string | void> => {
  if (columnNames.includes(value)) {
    console.debug('resolved------');
    return Promise.resolve();
  }
  console.debug('rejected------');
  return Promise.reject(new Error(value));
};

export { RowName, rowNameValidator };
