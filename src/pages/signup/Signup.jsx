import React, { useEffect, useState } from "react";
import { signup } from "../../services/UserService";
import login from "../../assets/login.svg";
import "./signup.css";
import { Bounce, toast } from "react-toastify";
import { Button, FormFeedback, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    about: "",
  });

  const navigate = useNavigate();

  //For printing the data that we are adding inside the sign up form ONCHANGE...

  // useEffect( () => {
  //   console.log(data);
  // }, [data])

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);

    signup(data)
      .then((resp) => {
        navigate("/user/dashboard")
        toast.success("🦄 User is registered successfully !!..", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setError({
          errors: {},
          isError: false
        });
        console.log(resp);
        setData({
          name: "",
          email: "",
          username: "",
          password: "",
          about: "",
        });
      })
      .catch((err) => {
        console.log(err);
        // toast.error("User is not registered successfully !!..", {
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        //   transition: Bounce,
        // });
        setError({
          errors: err,
          isError: true,
        });
      });
  };

  return (
    <>
      <div className="container-signup">
        <div className="signup-logo">
          <img src={login} alt="signup" />
        </div>

        <div className="content-signup">
          <div className="title-signup">
            <h1>Sign Up</h1>
          </div>

          <div className="signup-form">
            <form
              action="login"
              method="post"
              className="s-form"
              onSubmit={submitForm}
            >
              <div className="box-signup">
                <Label htmlFor="user_name">Full Name </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  onChange={(e) => handleChange(e, "name")}
                  value={data.name}
                />
                <FormFeedback
                  className={
                    error.errors?.response?.data?.name ? "error-msg" : "done"
                  }
                >
                  {error.errors?.response?.data?.name}
                </FormFeedback>
              </div>

              <div className="box-signup">
                <label htmlFor="user_email">Email Id</label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  onChange={(e) => handleChange(e, "email")}
                  value={data.email}
                />
                <FormFeedback
                  className={
                    error.errors?.response?.data?.email ? "error-msg" : "done"
                  }
                >
                  {error.errors?.response?.data?.email}
                </FormFeedback>
              </div>

              <div className="box-signup">
                <label htmlFor="user_username">Username</label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Your Username"
                  onChange={(e) => handleChange(e, "username")}
                  value={data.username}
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

              <div className="box-signup">
                <label htmlFor="user_password">Password</label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter the Password"
                  onChange={(e) => handleChange(e, "password")}
                  value={data.password}
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

              <div className="box-signup">
                <label htmlFor="user_about">About yourself</label>
                {/* <input type="text" name="about" id="about" placeholder='Enter Your About' /> */}
                <Input
                  type="textarea"
                  name="about"
                  id="about"
                  rows={3}
                  placeholder="Tell us somehthing about yourself"
                  onChange={(e) => handleChange(e, "about")}
                  value={data.about}
                />
              </div>

              <div className="box-signup btn-box-signup">
                <Button active block color="dark" size="" className="input">
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
