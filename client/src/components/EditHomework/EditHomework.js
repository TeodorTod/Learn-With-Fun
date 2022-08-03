import { HomeworksContext } from "../../contexts/HomeworksContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as homeworkService from '../../services/homeworkService';

const EditHomework = () => {
    const [currentHomework, setCurrentHomework] = useState({});
    const { homeworkEdit } = useContext(HomeworksContext);
    const { homeworkId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        homeworkService.getOne(homeworkId)
            .then(homeworkData => {
                setCurrentHomework(homeworkData);
            })
    }, []);


    const onSubmit = (e) => {
        e.preventDefault();

        const homeworkData = Object.fromEntries(new FormData(e.currentTarget));

        homeworkService.edit(homeworkId, homeworkData)
            .then(result => {
                homeworkEdit(homeworkId, result);
                navigate(`/homeworks/`)
            });
    };

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3"></h5>
                    <h1>Edit Homework</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-form bg-secondary rounded p-5">
                            <div id="success"></div>
                            <form name="editMessage" id="contactForm" noValidate="novalidate" onSubmit={onSubmit}>
                                <div className="control-group">
                                    <input type="text" className="form-control border-0 p-4" id="name" name='name' defaultValue={currentHomework.name} />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control border-0 p-4" id="subject" name='course' defaultValue={currentHomework.course}/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control border-0 p-4" id="subject" name='lesson' defaultValue={currentHomework.lesson}/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control border-0 p-4" id="link" name='link' defaultValue={currentHomework.link}/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control border-0 py-3 px-4" rows="5" id="message" name='message' defaultValue={currentHomework.message}></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
};

export default EditHomework;