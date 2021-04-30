import "./App.css";
import HabitList from "./components/habit-list/HabitList";
import Habit from "./models/types";

// Only the App.tsx gets changed in an React app
function App() {

  const habits: Habit[] = [
    {
      title: "Walk 3x per day",
      deadline: new Date(2021, 2, 14),
      description: "Sample text",
      streak: 5,
      list: "Work"
    },
    {
      title: "Meditate 1x per day",
      deadline: new Date(2021, 4, 1),
      description: "Sample text",
      streak: 2,
      list: "Rest"
    },
    {
      title: "Sleep before 10:30pm every weekday",
      deadline: new Date(2021, 3, 23),
      description: "Sample text",
      streak: 1,
      list: "Freetime"
    },
    {
      title: "Workout 5x a week",
      deadline: new Date(2021, 5, 8),
      description: "Sample text",
      streak: 3,
      list: "Sport"
    },
  ];

  return (
    <>
      <h1>Todo App</h1>
      <HabitList habits={habits} />
    </>
  );
}

export default App;
