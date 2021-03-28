import React from "react";
import NavBar from "./NavBar";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
  return (
    <div>
      <NavBar />
      <div className="login container">
        <div className="row login__row">
          <div className="col-12 login__col ">
            <form className="login__form">
              <h2>Welcome Back!</h2>
              <TextField
                className="login__inoutfild"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
              />
              <TextField
                className="login__inoutfild"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
              />
              <small>Forgot Password?</small>
              <Button className="loging__btn btn-grad">Login</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
