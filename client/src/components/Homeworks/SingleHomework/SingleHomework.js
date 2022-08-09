import { Link, useNavigate, useParams } from "react-router-dom";
import * as homeworkService from '../../../services/homeworkService';
import { useContext, useState } from "react";
import { HomeworksContext } from "../../../contexts/HomeworksContext";
import { CoursesContext } from "../../../contexts/CoursesContext";
import "./SingleHomework.css"
import { AuthContext } from "../../../contexts/AuthContext";



const SingleHomework = ({ homework }) => {
    const navigate = useNavigate();
    const { homeworkDelete } = useContext(HomeworksContext);
    const { likes, setLikes } = useContext(CoursesContext)
    const { user } = useContext(AuthContext)


    const onDelete = (e) => {
        const confirmation = window.confirm('Are you sure you want to delete this homework?');

        if (confirmation) {
            homeworkService.remove(homework._id)
                .then(() => {
                    homeworkDelete(homework._id);
                })
        }
    }

    const Like = (e) => {
        setLikes(state => state + 1);
        e.target.style.display = 'none';
    };

    const Dislike = (e) => {
        setLikes(state => state - 1);
        e.target.style.display = 'none';
    };

    let creatorButtons = (
        <>
            <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" id="hm-button" onClick={() => navigate(`/homeworks/${homework._id}/edit`)}>Edit</button>
            <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" id="hm-button" onClick={onDelete}>Delete</button>
        </>
    )

    let nonCreatorButtons = (
        <>
            <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" id="hm-button" onClick={Like}>Like</button>
            <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" id="hm-button" onClick={Dislike}>Dislike</button>
        </>
    );


    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="https://helpfulprofessor.com/wp-content/uploads/2022/01/homework-1024x683.jpg" alt="fluid_img" />
                    </div>
                    <div className="col-lg-7">
                        <div className="text-left mb-4">
                            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: 5 }}>Course: {homework.course}</h5>
                            <h2>Name: {homework.name}</h2>
                            <h2>Lesson: {homework.lesson}</h2>
                            <h3>GitHub link: <a href={homework.link} target="_blank">{homework.link}</a></h3>
                            <h3>Likes: {likes}</h3>
                        </div>
                        <p>Message: {homework.message}</p>
                        {user._id == homework._ownerId
                        ? creatorButtons
                        : nonCreatorButtons
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHomework;