import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.js"
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
])

const AppWithRouter = () => {
  return <RouterProvider router={AppRouter} />;
};

export default AppWithRouter;