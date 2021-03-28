import React from "react";
import NavBar from "./NavBar";
import "./Contract.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import rectangle from "./img/Rectangle 58.png";
function Contract() {
  return (
    <div className="contact">
      <NavBar />
      <div className="container contact__container">
        <div className="row contact__row">
          <div className="col-lg-6 col-12">
            <form className="contact__form">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                type="text"
                className="contact__inputarea"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="Email"
                className="contact__inputarea"
              />
              <textarea
                className="contact__textarea"
                id="outlined-basic"
                label="What's on your mind?"
                variant="outlined"
                placeholder="What's on your mind?"
              />
              <Button className="contact__btn" variant="contained">
                Send
              </Button>
            </form>
          </div>
          <div className="col-lg-6 col-12">
            <img className="rectangle" src={rectangle} alt="rectangle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contract;
