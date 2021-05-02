import { Habit } from "../models/types";
import { Card, Row, Col, Button, Typography } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

interface HabitItemProps {
  habit: Habit;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit }) => {
  const { Text, Title } = Typography;

  return (
    <>
        <Card
          style={{ width: 270, whiteSpace: "normal", paddingTop: 12 }}
          size="small"
        >
          <Row>
            <Col style={{ textAlign: "center" }}>
              <Button
                type="primary"
                size="small"
                shape="circle"
                icon={<MinusOutlined />}
              />
            </Col>
            <Col span={16} style={{ textAlign: "left" }}>
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
            <Col style={{ textAlign: "center" }}>
              <Button
                type="primary"
                size="small"
                shape="circle"
                icon={<PlusOutlined />}
              />
            </Col>
          </Row>
        </Card>
    </>
  );
};

export default HabitItem;
