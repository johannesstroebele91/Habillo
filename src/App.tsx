import "./App.css";
import { habits } from "./initial-habits-data";
import HabitItem from "./components/HabitItem";

// Only the App.tsx gets changed in an React app
function App() {
  // Creates a list with all list elements on the habits object
  let categories = habits.map((item) => item.list);
  // Create a list by filtering each item that has a unique index
  let unique = categories.filter((item, i, ar) => ar.indexOf(item) === i);

  return (
    <>
      <h1 style={{padding: '3px 0 0 6px', color: '#f2f8ff'}}>Habillo</h1>
      <div style={{ display: "flex", flexWrap: "nowrap" }}>
        {unique.map((category) => (
          <div style={{ background: "#EBECF0", borderRadius: 6, margin: 3, padding: 6 }}>
            <h2 style={{padding: '6, 3, 3, 3'}}>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div>
              {habits
                .filter((item) => item.list === category)
                .map((filteredItems) => (
                  <HabitItem key={filteredItems.id} habit={filteredItems} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
