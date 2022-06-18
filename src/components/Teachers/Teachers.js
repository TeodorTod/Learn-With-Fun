const Teachers = () => {
    return (
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" >Teachers</h5>
                <h1>Meet Our Teachers</h1>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3 text-center team mb-4">
                    <div className="team-item rounded overflow-hidden mb-2">
                        <div className="team-img position-relative">
                            <img className="img-fluid" src="img/team-1.jpg" alt="fluid" />
                            <div className="team-social">
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="bg-secondary p-4">
                            <h5>Michaela Jordanova</h5>
                            <p className="m-0">Web Designer</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-4">
                    <div className="team-item rounded overflow-hidden mb-2">
                        <div className="team-img position-relative">
                            <img className="img-fluid" src="img/team-2.jpg" alt="my=fluid" />
                            <div className="team-social">
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="bg-secondary p-4">
                            <h5>Peter Stojanov</h5>
                            <p className="m-0">Javascript Developer</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-4">
                    <div className="team-item rounded overflow-hidden mb-2">
                        <div className="team-img position-relative">
                            <img className="img-fluid" src="img/team-3.jpg" alt="our-team" />
                            <div className="team-social">
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="bg-secondary p-4">
                            <h5>Stela Ivanova</h5>
                            <p className="m-0">SEO Specialist</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 text-center team mb-4">
                    <div className="team-item rounded overflow-hidden mb-2">
                        <div className="team-img position-relative">
                            <img className="img-fluid" src="img/team-4.jpg" alt="team-4" />
                            <div className="team-social">
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="bg-secondary p-4">
                            <h5>Dimitar Dimitrov</h5>
                            <p className="m-0">C# Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Teachers;