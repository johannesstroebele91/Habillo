import "./HabitItem.css";
import { Card, Row, Col, Tooltip, Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

function HabitItem(props) {
  return (
    <Card type="inner" title={props.habit.title} size="small" extra={<a href="#">&#10143; {props.habit.streak}</a>} >
      <Row>
        <Col span={4}>
          <Button icon={<MinusCircleOutlined />} />
        </Col>
        <Col span={16}>
          {props.habit.description}
          <div>
            <p>{props.habit.deadline.toISOString()}</p>
          </div>
        </Col>
        <Col span={4}>
          <Button icon={<PlusCircleOutlined />} />
        </Col>
      </Row>
    </Card>
  );
}

export default HabitItem;
