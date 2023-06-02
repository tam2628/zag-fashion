import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
