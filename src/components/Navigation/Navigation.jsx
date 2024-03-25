import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/comp.svg";
import "./nav.css";
import { doLogout, getCurrentUserDetails, isLoggedIn } from "../../auth";

const Navigation = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetails());
  },[]);

  const logout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/login")
    });
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap')
      </style>

      <div className="navigation">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img
              src={Logo}
              className="logo1"
              alt="InspireWriteHub"
              height={"40px"}
              width={"50px"}
            />
            <h3>InspireWriteHub</h3>
            {/* <p>Write to Inspire, Inspire to Repeat</p> */}
          </Link>
        </div>
        <div className="links">
          <nav>
            <NavLink to="/" className="link">
              <span>Home</span>
            </NavLink>
            <NavLink to="/user/post" className="link">
              <span>Add Post</span>
            </NavLink>
            <NavLink to="/blogs" className="link">
              <span>Latest Blogs</span>
            </NavLink>
            <NavLink to="/about" className="link">
              <span>About Us</span>
            </NavLink>
            {/* <NavLink to="/contact" className="link">
              <span>Contact Us</span>
            </NavLink> */}

            {login ? (
              <>
                <button
                  onClick={() => navigate("/user/dashboard")}
                  className="btn-link"
                >
                  <span>{user.username}</span>
                </button>
                <button
                  onClick={logout}
                  className="btn-link"
                >
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/signup")}
                  className="btn-link"
                >
                  <span>Sign Up</span>
                </button>
                <button onClick={() => navigate("/login")} className="btn-link">
                  <span>Login</span>
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
