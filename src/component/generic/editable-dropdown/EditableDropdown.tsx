import React, { useRef, useState } from 'react';
import { Button, Select, Input, InputRef } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface IEditableDropdown {
  value?: string;
  onChange?: (value: string) => void;
  columnsExisting: string[];
}

const EditableDropdown = ({
  value,
  onChange,
  columnsExisting,
}: IEditableDropdown) => {
  const [columns, setColumns] = useState<string[]>(columnsExisting);
  const inputRef = useRef<InputRef>(null);

  return (
    <Select
      style={{ width: 300 }}
      onChange={() => {}}
      value={value}
      defaultValue={columns[0] || undefined}
      onSelect={(valueSelected: string) => {
        if (onChange) onChange(valueSelected);
      }}
      options={columns.map((column) => ({
        value: column,
        label: column,
      }))}
      // eslint-disable-next-line react/no-unstable-nested-components
      dropdownRender={(menu) => (
        <>
          {menu}
          <div style={{ display: 'flex' }}>
            <Input ref={inputRef} />
            <Button
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => {
                const inputValue = inputRef.current?.input?.value;
                if (
                  inputValue &&
                  !columns.find((column) => column === inputValue)
                ) {
                  setColumns([...columns, inputValue]);
                }
              }}
            />
          </div>
        </>
      )}
    />
  );
};

export { EditableDropdown };
