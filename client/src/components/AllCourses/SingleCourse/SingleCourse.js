import { useContext } from "react";
import { CoursesContext } from "../../../contexts/CoursesContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

export default function SingleCourse() {
    const { data } = useContext(CoursesContext);
    const {user} = useContext(AuthContext);

    let userButton = (
        <a className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Apply</a>
    );

    return (
        <>
        {data != null
            ? data.map(x =>
                <div key={x._id}>
                    <div className="row" id='row'>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <img className="img-fluid" src={x.image} alt="course1" />
                                <div className="bg-secondary p-4">
                                    <h2 className="h5">{x.name}</h2>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>{x.rating}</h6>
                                            <h5 className="m-0">$ {x.price}</h5>
                                        </div>
                                    </div>
                                    <Link to={`/details/${x._id}`} className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" id='details-btn'>Details</Link>
                                    {user.email
                                    ? userButton
                                    : ''
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            : <h2>No Courses in database</h2>}
            </>
    );
}