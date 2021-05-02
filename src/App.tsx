import "./App.css";
import { habits } from "./initial-habits-data";
import { Card } from "antd";
// Only the App.tsx gets changed in an React app
function App() {

  // Creates categories list
  const categories = habits.map((item) => item.list);

  return (
    <>
      <h1>Todo App</h1> 
      {categories.map((category) => (
        <Card title={{ category }} style={{ width: 324 }}>
          {habits
            .filter((item) => item.list === category)
            .map((filteredItems) => (
              <Card key={filteredItems.id} title={filteredItems.title}>{filteredItems.description}</Card>
            ))}
          ;
        </Card>
      ))}
      ;
    </>
  );
}

export default App;
