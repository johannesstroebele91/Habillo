import { habits } from "./initial-habits-data";
import HabitLists from "./components/HabitLists";

// Only the App.tsx gets changed in an React app
function App() {
  return (
    <>
      <h1 style={{padding: '3px 0 0 6px', color: '#f2f8ff'}}>Habillo</h1>
      <HabitLists habits={habits}/> 
    </>
  );
}

export default App;
