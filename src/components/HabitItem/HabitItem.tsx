import { Habit } from "../../models/types";
import { Row, Col, Button, Typography, DatePicker } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import moment from "moment";
import { useState } from "react";

interface HabitItemProps {
  habit: Habit;
}

const dateFormat = "YYYY/MM/DD";

const HabitItem: React.FC<HabitItemProps> = ({ habit }) => {
  const { Text, Title } = Typography;

  const [streakHabitItem, setStreak] = useState(habit.streak);

  const clickChangeStreakHandler = (streakIncrease: boolean) => {
    if (streakIncrease) {
      setStreak(streakHabitItem + 1);
    } else {
      setStreak(streakHabitItem - 1);
    }
  };

  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        margin: 3,
      }}
    >
      <Col
        style={{
          textAlign: "center",
          background: "#ffb0ad",
          padding: 6,
          borderRadius: "3px 0 0 3px",
        }}
      >
        <Button
          onClick={() => clickChangeStreakHandler(false)}
          danger
          size="small"
          shape="circle"
          icon={<MinusOutlined />}
        />
      </Col>
      <Col
        style={{
          textAlign: "left",
          background: "#F4F5F7",
          padding: 6,
          width: 240,
        }}
      >
        <Title level={5}>{habit.title}</Title>
        <Text style={{ overflowWrap: "break-word" }}>{habit.description}</Text>
        <Row justify="space-between" align="middle">
          <Col>
            <DatePicker
              defaultValue={moment(
                habit.deadline.toISOString().substring(0, 10),
                dateFormat
              )}
              format={dateFormat}
            />
          </Col>
          <Col>
            <span>&#10143; {streakHabitItem}</span>
          </Col>
        </Row>
      </Col>
      <Col
        style={{
          textAlign: "center",
          background: "#b0d7ff",
          padding: 6,
          borderRadius: "0 3px 3px 0",
        }}
      >
        <Button
          onClick={() => clickChangeStreakHandler(true)}
          size="small"
          shape="circle"
          icon={<PlusOutlined />}
        />
      </Col>
    </Row>
  );
};

export default HabitItem;
