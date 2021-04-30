import { Card } from "antd";
import Habit from "../../models/types";
import HabitItem from "./habit-item/HabitItem";

interface HabitListProps {
  habits: Habit[];
}

const HabitList: React.FC<HabitListProps> = ({habits}) => {
  return (
    <Card title="List 1" style={{ width: 300 }}>
      <HabitItem habit={habits[0]} />
      <HabitItem habit={habits[1]} />
      <HabitItem habit={habits[2]} />
      <HabitItem habit={habits[3]} />
    </Card>
  );
}

export default HabitList;