import React, { useState } from "react";
import login from "../../assets/login1.svg";
import "./login.css";
import { Button, Input } from "reactstrap";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e, property) => {
    setLoginData({...loginData, [property]: e.target.value });
    console.log(loginData);
  };

  return (
    <>
      <div className="container-login">
        <div className="login-logo">
          <img src={login} alt="Login" />
        </div>

        <div className="content-login">
          <div className="title-login">
            <h1>Login</h1>
          </div>

          <div className="login-form">
            <form action="" method="post" className="l-form">
              <div className="box-login">
                <label htmlFor="user_username">Username</label>
                <Input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter Your Username"
                  value={loginData.username}
                  onChange={(e) => handleChange(e, 'username')}
                />
              </div>

              <div className="box-login">
                <label htmlFor="user_password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter the Password"
                  value={loginData.password}
                  onChange={(e) => handleChange(e, 'password')}
                />
              </div>

              <div className="box-login btn-box-login">
                <Button
                  type="submit"
                  name="login"
                  id="login"
                  value="Login"
                  className="input"
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
