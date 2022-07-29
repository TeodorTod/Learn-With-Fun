import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { AuthContext } from './contexts/AuthContext';
import { CoursesContext } from './contexts/CoursesContext';
import './App.css';

import * as courseService from "./services/courseService";
import useLocalStorage from './hooks/useLocalStorage';
import uniqid from 'uniqid';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import AllCorses from './components/AllCourses/AllCourses';
import Homeworks from './components/Homeworks/Homeworks';
import Teachers from './components/Teachers/Teachers';
import Contact from './components/Contact/Contact';
import SendMessage from './components/SendMessage/SendMessage';
import MyCourses from './components/MyCourses/MyCourses';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Details/Details';
import Logout from './components/Logout/Logout';



function App() {
    const [data, setData] = useState([]);
    const [myCourse, setMyCourse] = useState(null);
    const [user, setUser] = useLocalStorage('user', {});
    const [homeworks, setHomeworks] = useState([]);


    // useEffect(() => {
    //     fetch("http://localhost:3030/data/courses")
    //         .then(res => res.json())
    //         .then(result => {
    //             setData(Object.values(result))
    //         });
    // }, []);

    useEffect(() => {
        courseService.getAll()
            .then(result => {
                setData(result);
            });
    }, []);


    const login = (authData) => {
        setUser(authData);
    };

    const register = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser({});
    };

    const addHomeworkHandler = (homeworkData) => {
        setHomeworks(state => [
            ...state,
            {
                ...homeworkData,
                _id: uniqid()
            }
        ])

    };



    return (
        <AuthContext.Provider value={{ user: user, login, register, logout }}>
            <CoursesContext.Provider value={{ data, setMyCourse }}>
                <div>
                    <Header />
                    <main id='main'>

                        <Routes>
                            <Route path="/" element={<Home data={data} />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/courses" element={<AllCorses />} />
                            <Route path="/my-courses" element={<MyCourses myCourse={myCourse}/>} />
                            <Route path="/homeworks" element={<Homeworks homeworks={homeworks} addHomeworkHandler={addHomeworkHandler}/>} />
                            <Route path='/teachers' element={<Teachers />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/sendMessage' element={<SendMessage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path='/details/:courseId' element={<Details />} />
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
