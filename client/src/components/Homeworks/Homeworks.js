import "./Homework.css"

const Homeworks = () => {
    return (
        <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img className="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt="fluid_img" />
                </div>
                <div className="col-lg-7">
                    <div className="text-left mb-4">
                        <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: 5 }}>About Us</h5>
                        <h1>Innovative Way To Learn</h1>
                    </div>
                    <p>Our objective as an online learning specialist is to make higher education more accessible, engaging and beneficial for people everywhere, and we currently offer more than eighty versatile programmes across a wide range of fields.
                        Throughout our 25+ years of experience we have supported over 50,000 students, whilst staying true to our core values of making life-changing higher education accessible to all. We wish you luck with your application, and hope to welcome you as one of our students soon.</p>
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

export default Homeworks;