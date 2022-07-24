import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { AuthContext } from './contexts/AuthContext';
import { CoursesContext } from './contexts/CoursesContext';
import './App.css';

import {courseServive} from "./services/courseService";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import AllCorses from './components/AllCourses/AllCourses';
import AddQuestions from './components/AddQuestions/AddQuestions';
import Teachers from './components/Teachers/Teachers';
import Contact from './components/Contact/Contact';
import SendMessage from './components/SendMessage/SendMessage';
import MyCourses from './components/MyCourses/MyCourses';
import NotFound from './components/NotFound/NotFound';



function App() {
    const [data, setData] = useState();
    const [user, setUser] = useState({
        accessToken: "",
        email: "",
        _id: ""
    });

    
    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/courses")
            .then(res => res.json())
            .then(result => {
                setData(result)

            })
    }, []);

    if (data != undefined) {
        console.log(Object.values(data));
    }

    const login = (authData) => {
        setUser(authData);
    }

    const register = (authData) => {
        setUser(authData);
    }

    const onLogout = () => {

    }

   

    return (
        <AuthContext.Provider value={{ user, login, register }}>
        <CoursesContext.Provider value={{ data }}>
            <div>
                <Header />
                <main id='main'>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/courses" element={<AllCorses />} />
                        <Route path="/my-courses" element={<MyCourses />} />
                        <Route path="/add-questions" element={<AddQuestions />} />
                        <Route path='/teachers' element={<Teachers />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/sendMessage' element={<SendMessage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>

                </main>
                <Footer />
            </div>
        </CoursesContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
