import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/styles/index.scss";


import Router from "./routes/routes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);
