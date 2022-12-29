import React from 'react';

import { Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { RowName, rowNameValidator } from '../row-name/RowName';

interface IRowDetails {
  columnNames: string[]
}

interface IRowDetailsHandle {
  getForm: () => any;
}

const RowDetails = React.forwardRef<IRowDetailsHandle, IRowDetails>(({ columnNames }, ref) => {
  const [form] = useForm();
  React.useImperativeHandle(ref, () => ({
    getForm() {
      return form.getFieldsValue();
    },
  }));
  const rowNameValidatorA = (_: any, value: string) => rowNameValidator(columnNames, value);

  return (
    <Form form={form}>
      {JSON.stringify(form.getFieldError('row'))}
      <Form.Item required requiredMark name="row" label="Row Name" rules={[{ validator: rowNameValidatorA }]}>
        <RowName columnNames={columnNames} error={form.getFieldError('row')} />
      </Form.Item>
      <Form.Item required requiredMark name="title" label="Title">
        <Input />
      </Form.Item>
    </Form>
  );
});

export { RowDetails };
export type { IRowDetailsHandle };
