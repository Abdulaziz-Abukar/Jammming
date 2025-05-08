import React from "react";
import ReactDOM from "react-dom/client";
import { AppContainer } from "./containers/AppContainer/AppContainer";
import "./index.css";
import "./reset.css";

const entryPoint = document.getElementById("root");

ReactDOM.createRoot(entryPoint).render(<AppContainer />);
