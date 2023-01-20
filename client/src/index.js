import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WorkoutsContextProvider } from "./context/WorkoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WorkoutsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WorkoutsContextProvider>
);
