import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import Store from "./Redux/App/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
