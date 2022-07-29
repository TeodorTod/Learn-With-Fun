import { Link } from "react-router-dom";
import "./MyCourses.css"


const MyCourses = ({
    myCourse
}) => {
    return (
        <>
        { myCourse != null
            ? 
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h1>My Courses</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <img className="img-fluid" src={myCourse.image} alt="course1" />
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>{myCourse.numParticipants}</small>
                                        <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>{myCourse.duration} Hours</small>
                                    </div>
                                    <a className="h5" href="">{myCourse.name}</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>{myCourse.rating} </h6>
                                            <h5 className="m-0">$ {myCourse.price}</h5>
                                        </div>
                                        <div className="m-0">
                                            <h5 id="info">Course info</h5>
                                        </div>
                                        <div>
                                            <h6 className="m-0">{myCourse.text} </h6>
                                        </div>
                                    </div>
                                    <div className="vertical-center">
                                        <Link to={'/homeworks'} className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" id='details-btn-course'>Add Homework</Link>
                                        <Link to={'/contact'} className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Add Question</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : <h1 className="m-0" id="courses">No Courses</h1>}
            </>
       
    );
}

export default MyCourses;