import HabitItem from "./habit-item/HabitItem";
import { Card } from "antd";

const habits = [
  {
    title: "Walk 3x per day",
    deadline: new Date(2021, 2, 14),
    description: "Sample text",
    streak: 5,
  },
  {
    title: "Meditate 1x per day",
    deadline: new Date(2021, 4, 1),
    description: "Sample text",
    streak: 2,
  },
  {
    title: "Sleep before 10:30pm every weekday",
    deadline: new Date(2021, 3, 23),
    streak: 1,
  },
  {
    title: "Workout 5x a week",
    deadline: new Date(2021, 5, 8),
    description: "Sample text",
    streak: 3,
  },
];

function HabitList() {
  return (
    <Card title="List 1" style={{ width: 300 }, {display: "inline-block"}}>
      <HabitItem habit={habits[0]} />
      <HabitItem habit={habits[1]} />
      <HabitItem habit={habits[2]} />
      <HabitItem habit={habits[3]} />
    </Card>
  );
}

export default HabitList;
