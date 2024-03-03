import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/comp.svg';
import './nav.css';

const Navigation = () => {
    const navigate = useNavigate();
    
    return (


        <>

            <style>@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap')</style>

            <div className="navigation">
                <div className="logo">
                    <Link to="/" className='logo-link'>
                        <img src={Logo} className="logo1" alt="InspireWriteHub" height={"40px"} width={"50px"} />
                        <h3>InspireWriteHub</h3>
                        {/* <p>Write to Inspire, Inspire to Repeat</p> */}
                    </Link>
                </div>
                <div className="links">
                    <nav>
                        <NavLink to="/" className="link"><span>Home</span></NavLink>
                        <NavLink to="/blogs" className="link"><span>Latest Blogs</span></NavLink>
                        <NavLink to="/about" className="link"><span>About Us</span></NavLink>
                        <NavLink to="/contact" className="link"><span>Contact Us</span></NavLink>
                        <button onClick={() => navigate("/signup")} className='btn-link'><span>Sign Up</span></button>
                        <button onClick={() => navigate("/login")} className='btn-link'><span>Login</span></button>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navigation
