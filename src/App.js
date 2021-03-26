import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import About from "../src/components/About";

function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mood")) || false;
  };

  const [darkmood, setDarkmood] = useState(getMode());
  useEffect(() => {
    localStorage.setItem("mood", JSON.stringify(darkmood));
  }, [darkmood]);

  return (
    <div className={darkmood ? "app dark-mode" : "app"}>
      <Home Darkmood={setDarkmood} darkmood={darkmood} />
      <About />
    </div>
  );
}

export default App;
