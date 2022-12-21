import { useState } from "react";
import { Form, Input, Button, Modal, DatePicker } from "antd";
import { Habit } from "../../models/types";

interface AddHabitListProps {
  onFinish: (habitCategory: string) => void;
}

const AddHabitList: React.FC<AddHabitListProps> = ({ onFinish }) => {
  const onFinishHandler = (values: any) => {
    const habit: Habit = {
      ...values,
      deadline: values.deadline,
      list: category,
      id: Math.floor(Math.random() * 1000),
      streak: 0,
    };
    onFinish(habit);
  };

  return (
    <div>
      <Form
        id="addHabitForm"
        name="Add New Habit Form"
        onFinish={onFinishHandler}
        onFinishFailed={onFinishFailedHandler}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input a title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input a description" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Deadline" name="deadline">
          <DatePicker />
        </Form.Item>
      </Form>
      <Button type="primary" block onClick={showModal}>
        Add New Habit
      </Button>
    </div>
  );
};

export default AddHabitList;
