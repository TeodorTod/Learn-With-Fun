import "./SingleHomework.css"

const SingleHomework = ({homework}) => {
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
                    </div>
                    <p>Message: {homework.message}</p>
                    <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" id="hm-button">Details</button>
                    <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" id="hm-button">Edit</button>
                    <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" id="hm-button">Comment</button>
                    <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" id="hm-button">Delete</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SingleHomework;