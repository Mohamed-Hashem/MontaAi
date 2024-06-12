import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootDom = document.getElementById("root");
const root = createRoot(rootDom);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
