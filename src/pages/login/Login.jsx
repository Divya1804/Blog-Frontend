import React, { useState } from "react";
import login1 from "../../assets/login1.svg";
import "./login.css";
import { Button, FormFeedback, Input } from "reactstrap";
import { toast } from "react-toastify";
import { login } from "../../services/UserService";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (e, property) => {
    setLoginData({ ...loginData, [property]: e.target.value.trim() });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginData)
      .then((resp) => {
        toast.success("User Loggedin Successfully");
        console.log(resp);

        setLoginData({
          username: "",
          password: "",
        });

        setError({
          errors: {},
          isError: false,
        });
      })
      .catch((err) => {
        console.log(err);

        setError({
          errors: err,
          isError: true,
        });
      });
  };

  return (
    <>
      <div className="container-login">
        <div className="login-logo">
          <img src={login1} alt="Login" />
        </div>

        <div className="content-login">
          <div className="title-login">
            <h1>Login</h1>
          </div>

          <div className="login-form">
            <form
              action=""
              method="post"
              className="l-form"
              onSubmit={handleSubmit}
            >
              <div className="box-login">
                <label htmlFor="user_username">Username</label>
                <Input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter Your Username"
                  value={loginData.username}
                  onChange={(e) => handleChange(e, "username")}
                />
                <FormFeedback
                  className={
                    error.errors?.response?.data?.username
                      ? "error-msg"
                      : "done"
                  }
                >
                  {error.errors?.response?.data?.username}
                </FormFeedback>
              </div>

              <div className="box-login">
                <label htmlFor="user_password">Password</label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter the Password"
                  value={loginData.password}
                  onChange={(e) => handleChange(e, "password")}
                />
                <FormFeedback
                  className={
                    error.errors?.response?.data?.password
                      ? "error-msg"
                      : "done"
                  }
                >
                  {error.errors?.response?.data?.password}
                </FormFeedback>
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
