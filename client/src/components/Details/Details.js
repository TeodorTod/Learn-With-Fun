import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import * as courseService from '../../services/courseService';
import "./Details.css"

const Details = () => {
    const [course, setCourse] = useState({});
    const { courseId } = useParams();

    useEffect(() => {
        courseService.getOne(courseId)
            .then(myCourse => {
                setCourse(myCourse)
            })
    }, [courseId]);

    const navigate = useNavigate();

    return (
        <>

            <div className="col-lg-8">
                <div className="mb-5" id="details">
                    <h6 className="text-primary mb-3">Details for our course</h6>
                    <h1 className="mb-5">{course.name}</h1>
                    <img className="img-fluid rounded w-100 mb-4" src={course.image} alt="Image" />
                    <p>{course.text}</p>
                    <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" onClick={() => navigate('/courses')}>Back to all courses</button>
                   
                    
                </div>
            </div>
        </>

    );
}

export default Details