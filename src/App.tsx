import "./App.css";
import { habits } from "./initial-habits-data";
import { Card } from "antd";
import HabitItem from "./components/HabitItem";

// Only the App.tsx gets changed in an React app
function App() {
  // Creates a list with all list elements on the habits object
  let categories = habits.map((item) => item.list);
  // Create a list by filtering each item that has a unique index
  let unique = categories.filter((item, i, ar) => ar.indexOf(item) === i);

  return (
    <>
      <h1>Todo App</h1>
      <div style={{display: 'flex'}}>
        {unique.map((category) => (
          <Card title={category}>
            {habits
              .filter((item) => item.list === category)
              .map((filteredItems) => (
                <HabitItem key={filteredItems.id} habit={filteredItems} />
              ))}
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
