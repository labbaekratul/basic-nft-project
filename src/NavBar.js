import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../src/img/logo.png";

function NavBar() {
  return (
    <div className="navbar container-fluid">
      <div className="row navbar__row">
        <div className="col-lg-2 navbar__sidelogo col-2">
          <img src={logo} alt={logo} />
        </div>
        <div className=" col-lg-8 col-12 navbar__links order-lg-1 order-2">
          <Link className="Link" to="/">
            Home
          </Link>

          <Link className="Link" to="/about">
            About
          </Link>

          <Link className="Link" to="/contact">
            contact
          </Link>
        </div>
        <div className=" col-12 col-lg-2 navbar__register order-lg-2 order-1">
          <Link className="Link" to="/login">
            Login
          </Link>
          <Link className="Link btn-grad" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
