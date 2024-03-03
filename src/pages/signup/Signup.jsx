import React, { useEffect, useState } from 'react'
import login from '../../assets/login.svg'
import './signup.css';

const Signup = () => {

  const [data, setData] = useState({
    name : '',
    email : '',
    userName : '',
    password : '',
    about : ''
  })

  useEffect( () => {
    console.log(data);
  }, [data])

  const[error, setError] = useState({
    errors :{},
    isError : false
  })

  const handleChange = (event, property) => {
    setData({...data, [property] : event.target.value})
  }

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
            <form action="" method="post" className='s-form'>


              <div className="box-signup">
                <label htmlFor="user_name">Full Name </label>
                <input type="text" name="name" id="name" placeholder='Enter Your Name' onChange={(e) => handleChange(e, 'name')} value={data.name} />
              </div>

              <div className="box-signup">
                <label htmlFor="user_email">Email Id</label>
                <input type="email" name="email" id="email" placeholder='Enter Your Email' onChange={(e) => handleChange(e, 'email')} value={data.email} />
              </div>

              <div className="box-signup">
                <label htmlFor="user_username">Username</label>
                <input type="text" name="userName" id="userName" placeholder='Enter Your Username' onChange={(e) => handleChange(e, 'userName')} value={data.userName} />
              </div>

              <div className="box-signup">
                <label htmlFor="user_password">Password</label>
                <input type="password" name="password" id="password" placeholder='Enter the Password' onChange={(e) => handleChange(e, 'password')} value={data.password}/>
              </div>

              <div className="box-signup">
                <label htmlFor="user_about">About yourself</label>
                {/* <input type="text" name="about" id="about" placeholder='Enter Your About' /> */}
                <textarea name='about' id='about' rows={3} placeholder='Tell us somehthing about yourself' onChange={(e) => handleChange(e, 'about')} value={data.about}></textarea>
              </div>

              <div className="box-signup btn-box-signup">
                <button type="submit" name="register" id="register" value="Sign Up" className='input'>Sign Up</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Signup;