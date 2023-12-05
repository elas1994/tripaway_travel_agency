import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <Outlet />
    </div>
  );
}

export default App;
