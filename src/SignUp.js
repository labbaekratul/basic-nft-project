import React from "react";
import "./SignUp.css";
import NavBar from "./NavBar";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import { Button } from "@material-ui/core";

function SignUp() {
  return (
    <div>
      <NavBar />
      <div className="signup container">
        <div className="row signup__row">
          <div className="col-12 signup__col ">
            <form className="signup__form">
              <h2>Welcome</h2>
              <TextField
                className="signup__inoutfild"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
              />

              <TextField
                className="signup__inoutfild"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
              />
              <span>
                Already Have an account?
                <small className="sigup__already">Sign in</small>
              </span>
              <Button className="signup__btn btn-grad">Register</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
