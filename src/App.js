import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import * as authService from './services/authService';

import Header from "./components/Header/Header";
import Home from  "./components/Home/Home";
import About from  "./components/About/About";
import Login from  "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";


function App() {
  const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''});
  
  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    })

  }, []);

  const onLogin = (username) => {

    setUserInfo({
      isAuthenticated: true,
      user: username,
    })
  }

  return (
    <div>
      <Header />
      <main>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={onLogin} />}/>
        <Route path="/register" element={<Register />}/>

      </Routes>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
