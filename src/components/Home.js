import React from "react";
import "./Home.css";
import Hero from "./Hero";
import Bio from "./Bio";
import logo from "../img/logo.png";
import EllipseOne from "../img/Ellipse 18.png";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import SiderbarManue from "./SiderbarManue";

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
          <SiderbarManue />
          <div className="home__manu col-7  ">
            <Button>
              <NavLink className="Button" to="/" activeClassName="/">
                Home
              </NavLink>
            </Button>
            <Button>
              <NavLink className="Button" to="/about" activeClassName="about">
                About
              </NavLink>
            </Button>
            <Button>
              <NavLink
                className="Button"
                to="/contact"
                activeClassName="contact"
              >
                contact
              </NavLink>
            </Button>
          </div>

          <div className="home__signUp  col-3 ">
            <div className="home__signUpOne">
              <Button>
                <NavLink
                  className="home__signUpLink"
                  to="/login"
                  activeClassName="login"
                >
                  Login
                </NavLink>
              </Button>
            </div>

            <div className="home__signUpTwo ">
              <NavLink
                className="btn-grad"
                to="/signup"
                activeClassName="signup"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Hero />
      <Bio />
    </div>
  );
}

export default Home;
