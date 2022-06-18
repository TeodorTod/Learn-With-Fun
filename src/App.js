import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { AuthContext } from './contexts/AuthContext';

import Header from "./components/Header/Header";
import Home from  "./components/Home/Home";
import About from  "./components/About/About";
import Login from  "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import MyCorses from './components/MyCourses/MyCourses';
import AddQuestions from './components/AddQuestions/AddQuestions';
import Teachers from './components/Teachers/Teachers';


function App() {
  const [user, setUser] = useState({
    accessToken: "",
    email: "",
    _id: ""
  });

  const login = (authData) => {
    setUser(authData);
  }

  const onLogout = () => {

  }

  return (
    <AuthContext.Provider value={{user, login}}>
    <div>
      <Header />
      <main>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<MyCorses />} />
        <Route path="/add-questions" element={<AddQuestions />} />
        <Route path='/teachers' element={<Teachers />} />
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
