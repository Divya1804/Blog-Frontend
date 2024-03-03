import React from 'react'
import login from '../../assets/login1.svg'
import './login.css';

const Login = () => {
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
            <form action="" method="post" className='l-form'>

              <div className="box-login">
                <label htmlFor="user_username">Username</label>
                <input type="text" name="userName" id="userName" placeholder='Enter Your Username' />
              </div>

              <div className="box-login">
                <label htmlFor="user_password">Password</label>
                <input type="password" name="password" id="password" placeholder='Enter the Password' />
              </div>

              <div className="box-login btn-box-login">
                <button type="submit" name="login" id="login" value="Login" className='input'>Login</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login
