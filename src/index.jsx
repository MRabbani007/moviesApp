import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />{" "}
      {/* The various pages will be displayed by the `Main` component. */}
    </BrowserRouter>
  </React.StrictMode>
);