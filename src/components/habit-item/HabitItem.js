import "./HabitItem.css";
import { Card } from "antd";

function HabitItem(props) {
  console.log(props);
  return (
    <Card
      type="inner"
      title={props.habit.title}
      size="small"
      extra={<a href="#">More</a>}
    >{props.habit.description}
      <div>
        <p>{props.habit.deadline.toISOString()}</p>
        <p>{props.habit.streak}</p>
        <p></p>
      </div>
    </Card>
  );
}

export default HabitItem;
