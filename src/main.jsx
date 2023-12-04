import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";

const router123 = createBrowserRouter([
  {
    path: "/tripaway_travel_agency/",
    element: <App />,
    children: [
      {
        path: "/tripaway_travel_agency/",
        element: <Home />,
      },
      {
        path: "/tripaway_travel_agency/about",
        element: <About />,
      },
      {
        path: "/tripaway_travel_agency/service",
        element: <Service />,
      },
      {
        path: "/tripaway_travel_agency/contact",
        element: <Contact />,
      },
      {
        path: "/tripaway_travel_agency/gallery",
        element: <Gallery />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router123} />
  </React.StrictMode>
);
