import { StrictMode } from "react";
import ReactDom from "react-dom"; // Use `react-dom` instead of `react-dom/client`
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
