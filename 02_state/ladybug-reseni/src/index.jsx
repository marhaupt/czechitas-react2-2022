import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Ladybug from "./components/Ladybug";
import "./style.css";

const STEP_SIZE = 25;

const App = () => {
  const [ladybugState, setLadybugState] = useState({
    posX: 100,
    posY: 100,
    orientation: "right",
  });

  const handleKeyDown = ({ code }) => {
    if (code === "ArrowUp") {
      setLadybugState((prevState) => ({
        ...prevState,
        orientation: "up",
        posY: prevState.posY - STEP_SIZE,
      }));
    } else if (code === "ArrowLeft") {
      setLadybugState((prevState) => ({
        ...prevState,
        orientation: "left",
        posX: prevState.posX - STEP_SIZE,
      }));
    } else if (code === "ArrowRight") {
      setLadybugState((prevState) => ({
        ...prevState,
        orientation: "right",
        posX: prevState.posX + STEP_SIZE,
      }));
    } else if (code === "ArrowDown") {
      setLadybugState((prevState) => ({
        ...prevState,
        orientation: "down",
        posY: prevState.posY + STEP_SIZE,
      }));
    }
  };

  return (
    <div tabIndex={-1} className="field" onKeyDown={handleKeyDown}>
      <header>Click anywhere to start the game</header>
      <Ladybug ladybugState={ladybugState} />
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
