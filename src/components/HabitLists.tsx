import { useState } from "react";
import { Habit } from "../models/types";
import AddHabitForm from "./AddHabitForm";
import HabitItem from "./HabitItem";
interface HabitListsProps {
  habits: Habit[];
}

const HabitLists: React.FC<HabitListsProps> = ({ habits }) => {
  // Creates a list with all list elements on the habits object
  let categories = habits.map((item) => item.list);
  // Create a list by filtering each item that has a unique index
  let categoriesUnique = categories.filter(
    (item, i, ar) => ar.indexOf(item) === i
  );

  const [habitsLists, setHabitsLists] = useState(habits);
  // Submit
  const onFinish = (habit: Habit) => {
    // Set new state to re-render site for reconsidering new add habit
    setHabitsLists((prevState) => ( [...prevState, habit]));
  };

  // RETURN
  return (
    <div style={{ display: "flex", flexWrap: "nowrap" }}>
      {categoriesUnique.map((category) => (
        <div
          style={{
            background: "#EBECF0",
            borderRadius: 6,
            margin: 3,
            padding: 6,
          }}
        >
          <h2 style={{ padding: "6, 3, 3, 3" }}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <div style={{ maxWidth: 300 }}>
            {habitsLists
              .filter((item) => item.list === category)
              .map((filteredItems) => (
                <HabitItem key={filteredItems.id} habit={filteredItems} />
              ))}
          </div>
          <AddHabitForm category={category} onFinish={onFinish} />
        </div>
      ))}
    </div>
  );
};

export default HabitLists;
