import "./App.css";
import { Profile } from "./components/Profile";
import { Repository } from "./components/Repository";

function App() {
  return (
    <>
      <div className="app-container">
        <Profile />
        <Repository />
      </div>
    </>
  );
}

export default App;
