import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Abouts from "./Abouts";
import Contact from "./Contract";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mood")) || false;
  };

  const [darkmood, setDarkmood] = useState(getMode());
  useEffect(() => {
    localStorage.setItem("mood", JSON.stringify(darkmood));
  }, [darkmood]);

  return (
    <Router>
      <div className={darkmood ? "app dark-mode" : "app"}>
        <Switch>
          <Route path="/about">
            <Abouts />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home Darkmood={setDarkmood} darkmood={darkmood} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
