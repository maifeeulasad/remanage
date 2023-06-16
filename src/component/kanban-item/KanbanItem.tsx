import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Form, Input, Modal } from 'antd';
import {
  IKanbanItem,
  IKanbanItemForm,
  IKanbanItemHandle,
} from './kanban-item.types';
import { EditableDropdown } from '../generic/editable-dropdown/EditableDropdown';

const KanbanItem = forwardRef<IKanbanItemHandle, IKanbanItem>(
  ({ columns, onOkClicked }, ref) => {
    const [form] = Form.useForm<IKanbanItemForm>();
    const [addItemModalVisibility, setAddItemModalVisibility] = useState(false);

    useImperativeHandle(ref, () => ({
      close() {
        setAddItemModalVisibility(false);
      },
      open() {
        setAddItemModalVisibility(true);
      },
      getValue() {
        return new Promise<IKanbanItemForm>((resolve, reject) => {
          form
            .validateFields()
            .then(() => {
              const formValue = form.getFieldsValue();
              resolve(formValue);
              form.resetFields();
            })
            .catch(() => {
              reject();
            });
        });
      },
    }));

    return (
      <Modal
        title="Add Item"
        visible={addItemModalVisibility}
        closable
        onCancel={() => {
          setAddItemModalVisibility(false);
        }}
        onOk={() => {
          onOkClicked();
        }}
      >
        <Form form={form}>
          <Form.Item
            name="column"
            label="Column"
            rules={[{ required: true, message: 'Please select or enter COLUMN' }]}
          >
            <EditableDropdown columnsExisting={columns} />
          </Form.Item>
          <Form.Item
            name="title"
            label="Title"
            rules={[
              { required: true, message: 'Please enter TITLE of your task' },
            ]}
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            name="details"
            label="Details"
            rules={[
              { required: true, message: 'Please enter DETAILS of your task' },
            ]}
          >
            <Input placeholder="Details" />
          </Form.Item>
          <Form.Item name="metadata" label="Metadata">
            <Input.TextArea rows={5} placeholder="Metadata" />
          </Form.Item>
        </Form>
      </Modal>
    );
  },
);

export { KanbanItem };
