import React from "react";
import ReactDOM from "react-dom/client";
import AppWithRouter from "./App";
import "./App.css";

// Create the root only once and render the App with RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppWithRouter />);