import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { CoursesContext } from './contexts/CoursesContext';
import { HomeworksContext } from './contexts/HomeworksContext';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

import * as courseService from "./services/courseService";
import * as homeworkService from './services/homeworkService';

import PrivateRoute from './components/common/PrivateRoute';
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
import EditHomework from './components/EditHomework/EditHomework';



function App() {
    const [data, setData] = useState([]);
    const [myCourse, setMyCourse] = useState(null);
    const [homeworks, setHomeworks] = useState([]);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        courseService.getAll()
            .then(result => {
                setData(result);
            });
    }, []);

    useEffect(() => {
        homeworkService.getAll()
            .then(result => {
                setHomeworks(result);
            });
    }, []);

    const addHomeworkHandler = (homeworkData) => {
        setHomeworks(state => [
            ...state,
            {
                ...homeworkData,
                _id: uniqid()
            }
        ])
    };

    const homeworkEdit = (homeworkId, homeworkData) => {
        setHomeworks(state => state.map(x => x._id == homeworkId ? homeworkData : x));
    };

    const homeworkDelete = (homeworkId) => {
        setHomeworks(state => state.filter(x => x._id !== homeworkId))
    }

    return (
       <AuthProvider>
            <CoursesContext.Provider value={{ data, setMyCourse, likes, setLikes }}>
                <div>
                    <Header />
                    <main id='main'>

                        <HomeworksContext.Provider value={{ homeworks, addHomeworkHandler, homeworkEdit, homeworkDelete }}>

                            <Routes>
                                <Route path="/" element={<Home data={data} />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/courses" element={<AllCorses />} />
                                <Route path="/my-courses" element={<PrivateRoute><MyCourses myCourse={myCourse} /></PrivateRoute>} />
                                <Route path="/homeworks" element={<PrivateRoute><Homeworks homeworks={homeworks} /></PrivateRoute>} />
                                <Route path='/teachers' element={<Teachers />} />
                                <Route path='/contact' element={<Contact />} />
                                <Route path='/sendMessage' element={<SendMessage />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/logout" element={<Logout />} />
                                <Route path='/details/:courseId' element={<Details />} />
                                <Route path='/homeworks/:homeworkId/edit' element={<PrivateRoute><EditHomework /></PrivateRoute>} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>

                        </HomeworksContext.Provider>

                    </main>
                    <Footer />
                </div>
            </CoursesContext.Provider>
        </AuthProvider>
    );
}

export default App;
