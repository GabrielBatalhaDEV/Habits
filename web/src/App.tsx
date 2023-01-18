import { Habits } from "./components/Habits";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Habits completed={10} />
    </div>
  );
}

export default App;
