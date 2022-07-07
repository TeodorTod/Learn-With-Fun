import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { AuthContext } from './contexts/AuthContext';
import './App.css';

import Header from "./components/Header/Header";
import Home from  "./components/Home/Home";
import About from  "./components/About/About";
import Login from  "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import AllCorses from './components/AllCourses/AllCourses';
import AddQuestions from './components/AddQuestions/AddQuestions';
import Teachers from './components/Teachers/Teachers';
import Contact from './components/Contact/Contact';
import SendMessage from './components/SendMessage/SendMessage';



function App() {
  const [user, setUser] = useState({
    accessToken: "",
    email: "",
    _id: ""
  });

  const login = (authData) => {
    setUser(authData);
  }

  const register = (authData) => {
    setUser(authData);
  }

  const onLogout = () => {

  }

  return (
    <AuthContext.Provider value={{user, login, register}}>
    <div>
      <Header />
      <main id='main'>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<AllCorses />} />
        <Route path="/add-questions" element={<AddQuestions />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sendMessage' element={<SendMessage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

      </Routes>
      </main>
      <Footer />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
