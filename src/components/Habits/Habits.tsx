import { useState } from "react";
import { Habit } from "../../models/types";
import HabitList from "../HabitList/HabitList";

interface HabitListsProps {
  habits: Habit[];
}

const HabitLists: React.FC<HabitListsProps> = ({ habits }) => {
  // Creates a list with all list elements on the habits object
  let categories = habits.map((item) => item.list);

  // Create a new list by comparing the index of each unique item
  let categoriesUnique = categories.filter(
    (item: string, index: number) => categories.indexOf(item) === index
  );

  const [habitsLists, setHabitsLists] = useState(habits);
  // Submit
  const onFinishHandler = (habit: Habit) => {
    // Set new state to re-render site for reconsidering new add habit
    // pass the old state for passing the old values to the new state
    setHabitsLists((prevState) => [...prevState, habit]);
  };

  // RETURN
  return (
    <div style={{ display: "flex", flexWrap: "nowrap", background: "black" }}>
      {categoriesUnique.map((habitCategory) => (
        <HabitList key={habitCategory} habitCategory={habitCategory} habitsList={habitsLists} onFinish={onFinishHandler}/>
      ))}
    </div>
  );
};

export default HabitLists;
