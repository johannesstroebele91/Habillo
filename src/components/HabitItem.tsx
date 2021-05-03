import { Habit } from "../models/types";
import { Row, Col, Button, Typography } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

interface HabitItemProps {
  habit: Habit;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit }) => {
  const { Text, Title } = Typography;

  return (
    <>
        <div>
          <Row style={{flexWrap: 'nowrap', border: '2px solid lightgrey', margin: 2}}>
            <Col style={{ textAlign: "center", background: '#ffcccb', padding: 6}}>
              <Button
                type="dashed"
                size="small"
                shape="circle"
                icon={<MinusOutlined />}
              />
            </Col>
            <Col span={16} style={{ textAlign: "left", padding: 6 }}>
              <Title level={5}>{habit.title}</Title>
              <Text>{habit.description}</Text>
              <Row justify="space-between">
                <Col>
                  <Text code>
                    {habit.deadline
                      .toISOString()
                      .substring(0, 10)
                      .replace(/-/g, ".")}
                  </Text>
                </Col>
                <Col>
                  <span>&#10143; {habit.streak}</span>
                </Col>
              </Row>
            </Col>
            <Col style={{ textAlign: "center", background: '#ADD8E6', padding: 6 }}>
              <Button
                type="dashed"
                size="small"
                shape="circle"
                icon={<PlusOutlined />}
              />
            </Col>
          </Row>
        </div>
    </>
  );
};

export default HabitItem;
