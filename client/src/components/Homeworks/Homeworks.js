import * as homeworkService from '../../services/homeworkService';
import './Homeworks.css';
import SingleHomework from './SingleHomework/SingleHomework';

const Homeworks = ({
    homeworks,
    addHomeworkHandler
}) => {
    const onSubmit = (e) => {
        e.preventDefault();

        const homeworkData = Object.fromEntries(new FormData(e.currentTarget));

        homeworkService.create(homeworkData)
            .then(result => {
                addHomeworkHandler(homeworkData);
            })
    }
    
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3"></h5>
                        <h1>Add Homework</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form bg-secondary rounded p-5">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={onSubmit}>
                                    <div className="control-group">
                                        <input type="text" className="form-control border-0 p-4" id="name" placeholder="Your Name" name='name' required="yes" data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control border-0 p-4" id="subject" placeholder="Course" name='course' required="required" data-validation-required-message="Please enter a course" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control border-0 p-4" id="subject" placeholder="Lesson" name='lesson' required="required" data-validation-required-message="Please enter a lesson" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control border-0 p-4" id="link" placeholder="GitHub link" name='link' required="required" data-validation-required-message="Please enter a link" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" rows="5" id="message" placeholder="Message" name='message' required="required" data-validation-required-message="Please enter your message"></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="main-h1">Homeworks</h1>

            {homeworks.length > 0
                ? homeworks.map(x => <SingleHomework key={x._id} homework={x} />)
                : <h1 className="no-articles" id='no-homework'>No homeworks yet</h1>}
        </>

    );
}

export default Homeworks;