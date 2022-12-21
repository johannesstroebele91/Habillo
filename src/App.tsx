import { INITIAL_HABITS } from "./initial-habits-data";
import Habits from "./components/Habits/Habits";

// Only the App.tsx gets changed in an React app
function App() {
  return (
    <>
      <h1
        style={{
          padding: "3px 0 0 6px",
          color: "#f2f8ff",
          background: "#6caae4",
        }}
      >
        Habillo
      </h1>
      <Habits habits={INITIAL_HABITS} />
    </>
  );
}

export default App;
