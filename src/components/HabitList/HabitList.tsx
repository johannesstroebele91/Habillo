import AddHabitForm from "../AddHabitForm/AddHabitForm";
import styles from "./HabitList.module.css";
import HabitItem from "../HabitItem/HabitItem";
import { Habit } from "../../models/types";

interface HabitListProps {
    habitCategory: string;
    habitsList: Habit[];
    onFinish: (habit: Habit) => void;
}
const HabitList: React.FC<HabitListProps> = ({habitCategory, habitsList, onFinish}) => {
  return (
    <div className={styles.lists}>
      <h2 style={{ padding: "12px 3px 3px 9px" }}>
        {habitCategory.charAt(0).toUpperCase() + habitCategory.slice(1)}
      </h2>
      <div>
        {habitsList
          .filter((item) => item.list === habitCategory)
          .map((filteredItems) => (
            <HabitItem key={filteredItems.id} habit={filteredItems} />
          ))}
      </div>
      <AddHabitForm key={habitCategory} category={habitCategory} onFinish={onFinish} />
    </div>
  );
};

export default HabitList;
