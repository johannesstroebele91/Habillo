import { useState } from "react";
import { Form, Input, Button, Modal, DatePicker } from "antd";
import { Habit } from "../../models/types";

interface AddHabitFormProps {
  category: string;
  onFinish: (habit: Habit) => void;
}

const AddHabitForm: React.FC<AddHabitFormProps> = ({ onFinish, category }) => {
  // Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const onFinishHandler = (values: any) => {
    setIsModalVisible(false);
    const habit: Habit = {
      ...values,
      deadline: values.deadline._d,
      list: category,
      id: Math.floor(Math.random() * 1000),
      streak: 0,
    };
    onFinish(habit);
  };
  const onFinishFailedHandler = (errorInfo: any) => {
    setIsModalVisible(false);
    console.log("Failed:", errorInfo);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" block onClick={showModal}>
        Add New Habit
      </Button>
      {/* Button on the outside of the form element
       * can be used to submit a form
       * by specifying `<Buttonform="myForm" key="submit" htmlType="submit"/> and `<Form id="myForm"/>`
       * see: https://stackoverflow.com/questions/41221633/how-to-submit-form-component-in-modal-dialogue-using-antd-react-component-librar */}
      <Modal
        title="Add New Habit Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer={[
          <Button
            form="addHabitForm"
            key="submit"
            htmlType="submit"
            type="primary"
            block
          >
            Add This Habit
          </Button>,
        ]}
      >
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
      </Modal>
    </div>
  );
};

export default AddHabitForm;
