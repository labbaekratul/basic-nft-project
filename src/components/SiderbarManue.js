import React, { useState } from "react";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import "./SiderbarManue.css";
import { Link } from "react-router-dom";

function SiderbarManue() {
  const [showManu, setShowManu] = useState(false);

  let manu;

  if (showManu) {
    manu = (
      <div>
        <Link className="sidebarmenu__link" to="/">
          HOME
        </Link>
        <Link className="sidebarmenu__link" to="/about">
          ABOUT
        </Link>
        <Link className="sidebarmenu__link" to="/contact">
          CONTACT
        </Link>
        <Link className="sidebarmenu__link" to="/login">
          LOGIN
        </Link>
        <Link className="sidebarmenu__link" to="/signup">
          SIGN UP
        </Link>
      </div>
    );
  }

  return (
    <div className="sidebarManu">
      <MenuOpenIcon
        className="togglebtn"
        onClick={() => setShowManu(!showManu)}
      />
      <div className="sidebarManu__list">{manu}</div>
    </div>
  );
}

export default SiderbarManue;
