import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import TagCloud from "./components/TagCloud";

const App = () => {
  return (
    <div className="app-container">
      <TagCloud />
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
