// App.js
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import About from './pages/about/About.jsx';
import Signup from './pages/signup/Signup.jsx';
import Login from './pages/login/Login.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home.jsx';
import PrivateRoutes from './components/user-routes/PrivateRoutes.jsx';
import UserDashboard from './pages/dashboard/UserDashboard.jsx';
import ProfileInfo from './pages/dashboard/ProfileInfo.jsx';
import Post from './pages/createPost/Post.jsx';
import PostPage from './pages/post-page/PostPage.jsx';
import Error from './pages/error/Error.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer position='bottom-center' />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/post/:postId' element={<PostPage/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

          <Route path='/user' element = {<PrivateRoutes/>}>
            <Route path='post' element={<Post/>} />
            <Route path='dashboard' element = {<UserDashboard/> } />
            <Route path='profile' element = {<ProfileInfo/>} />
          </Route>

          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
