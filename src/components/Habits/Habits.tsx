import { useState } from "react";
import { Habit } from "../../models/types";
import AddHabitList from "../AddHabitList/AddHabitList";

import HabitList from "../HabitList/HabitList";

interface HabitListsProps {
  habits: Habit[];
}

const Habits: React.FC<HabitListsProps> = ({ habits }) => {
  // Creates a list with all list elements on the habits object
  let categories = habits.map((item) => item.list);

  // Create a new list by comparing the index of each unique item
  let categoriesUnique = categories.filter(
    (item: string, index: number) => categories.indexOf(item) === index
  );

  const [habitsLists, setHabitsLists] = useState(habits);
  // Submit
  const onFinishHabitHandler = (habit: Habit) => {
    // Set new state to re-render site for reconsidering new add habit
    // pass the old state for passing the old values to the new state
    setHabitsLists((prevState) => [...prevState, habit]);
  };

  const onFinishHabitListHandler = (habitCategory: string) => {
    // Set new state to re-render site for reconsidering new add habit
    // pass the old state for passing the old values to the new state
    setHabitsLists((prevState) => [
      ...prevState,
      {
        id: 1,
        title: "",
        deadline: new Date(2021, 2, 14),
        description: "",
        list: habitCategory,
        streak: 0,
      },
    ]);
  };
  // RETURN
  return (
    <>
      <div style={{ display: "flex", flexWrap: "nowrap" }}>
        {categoriesUnique.map((habitCategory) => (
          <HabitList
            key={habitCategory}
            habitCategory={habitCategory}
            habitsList={habitsLists.filter(
              (item) => item.list === habitCategory
            )}
            onFinish={onFinishHabitHandler}
          />
        ))}
        <AddHabitList onFinish={onFinishHabitListHandler} />
      </div>
    </>
  );
};

export default Habits;
