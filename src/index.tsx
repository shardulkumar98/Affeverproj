import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "assets/fonts/Poppins-Bold.ttf";
import "assets/fonts/Poppins-SemiBold.ttf";
import "assets/fonts/Poppins-Regular.ttf";
import "assets/fonts/Poppins-Medium.ttf";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
