// React.FC is already a generic type
// So {} enable to add an additional generic type
// to the already existing generic type (=merging both generic types)
import Habit from "../../../models/types";
import { Card, Row, Col, Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

interface HabitItemProps {
  habit: Habit;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit }) => {
  console.log(habit);
  return (
    <Card
      style={{ width: 280 }}
      type="inner"
      title={habit.title}
      size="small"
      extra={<span>&#10143; {habit.streak}</span>}
    >
      <Row align="middle">
        <Col span={4}>
          <Button icon={<MinusCircleOutlined />} />
        </Col>
        <Col span={16}>
          {habit.description}
          <div>
            <p>{habit.deadline.toISOString().substring(0,10).replace(/-/g, ".")}</p>
          </div>
        </Col>
        <Col span={4}>
          <Button icon={<PlusCircleOutlined />} />
        </Col>
      </Row>
    </Card>
  );
};

export default HabitItem;
