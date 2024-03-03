// App.js
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Signup from './pages/signup/Signup.jsx';
import Login from './pages/login/Login.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<div>Contact page</div>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
