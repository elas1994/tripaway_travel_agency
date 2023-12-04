import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Link to="/tripaway_travel_agency/">Home</Link>
        {" | "}
        <Link to="/tripaway_travel_agency/about">About</Link>
        {" | "}
        <Link to="/tripaway_travel_agency/service">Service</Link>
        {" | "}
        <Link to="/tripaway_travel_agency/contact">Contact</Link>
        {" | "}
        <Link to="/tripaway_travel_agency/gallery">Gallery</Link>
      </div>

      <Outlet />
    </>
  );
}

export default App;
