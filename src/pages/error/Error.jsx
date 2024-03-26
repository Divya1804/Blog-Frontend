import React from 'react'
import './error.css'
import error from "../../assets/error.png";
import logo from "../../assets/comp.svg";
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className="error-container">
                <div className="error-content">
                    <Link to="/" className="error-link">
                        <img
                            src={logo}
                            className="logo1"
                            alt="InspireWriteHub"
                            height={"60px"}
                            width={"80px"}
                        />
                        <h2>InspireWriteHub</h2>
                        {/* <p>Write to Inspire, Inspire to Repeat</p> */}
                    </Link>
                    <h1>ERROR 404!</h1>
                    <p>Oops! The Page You Are Looking For Could Not Be Found</p>
                    <Link to={'/'} className='btn-link'>Back To Home</Link>
                </div>
                <div className="error-image">
                    <img src={error} alt="error" />
                </div>
            </div>
        </>
    )
}

export default Error
