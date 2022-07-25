import { useContext } from 'react';
import { CoursesContext } from '../../contexts/CoursesContext';
import SingleCourse from './SingleCourse/SingleCourse';

import './AllCourses.css';

const MyCorses = () => {
    const { data } = useContext(CoursesContext);
    console.log(data);
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" >Courses</h5>
                    <h1>Our Popular Courses</h1>
                </div>
                <SingleCourse />
            </div>
        </div>
    );
}

export default MyCorses;