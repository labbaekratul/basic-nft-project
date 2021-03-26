import React from "react";
import "./Home.css";
import Hero from "./Hero";
import logo from "../img/logo.png";
import EllipseOne from "../img/Ellipse 18.png";
import { Button } from "@material-ui/core";

function Home({ Darkmood, darkmood }) {
  return (
    <div className="home">
      <img className="EllipseOne" src={EllipseOne} />

      <div className="home__container container-fluid">
        <div className="row home__row">
          <div className="home__logo  col-2  ">
            <img src={logo} className="top__logo" />
            <div className="darkmood__onOf">
              <label className="switch">
                <input onChange={() => Darkmood(!darkmood)} type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div className="home__manu col-7  ">
            <Button>Home</Button>
            <Button>About</Button>
            <Button>contact</Button>
          </div>

          <div className="home__signUp  col-3 ">
            <div className="home__signUpOne">
              <Button className="home__signUpLink" href="#">
                Login
              </Button>
            </div>

            <div className="home__signUpTwo ">
              <button className="btn-grad">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
}

export default Home;
