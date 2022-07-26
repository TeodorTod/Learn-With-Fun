import './AddHomework.css';

const AddHomework = () => {

    return(
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
                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="control-group">
                                <input type="text" className="form-control border-0 p-4" id="name" placeholder="Your Name" required="yes" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control border-0 p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control border-0 p-4" id="link" placeholder="Link" required="required" data-validation-required-message="Please enter a link" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control border-0 py-3 px-4" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
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
    );
}

export default AddHomework;