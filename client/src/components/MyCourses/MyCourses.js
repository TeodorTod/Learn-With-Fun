import "./MyCourses.css"

const MyCourses = () => {

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1>My Courses</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="rounded overflow-hidden mb-2">
                            <img className="img-fluid" src="img/course-1.jpg" alt="course1" />
                            <div className="bg-secondary p-4">
                                <div className="d-flex justify-content-between mb-3">
                                    <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>13 Students</small>
                                    <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>25h 30m</small>
                                </div>
                                <a className="h5" href="">Web design & development</a>
                                <div className="border-top mt-4 pt-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.3 <small>(262)</small></h6>
                                        <h5 className="m-0">$69</h5>
                                    </div>
                                </div>
                                <div className="vertical-center">
                                <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" id='details-btn-course'>  Add Question</button>
                                <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Add Comment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCourses;