import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
                <div className="container-fluid p-0 pb-5 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active" >
                    <img className="position-relative w-100" src="img/carousel-1.jpg"  />
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" >
                            <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 className="display-3 text-white mb-md-4">Best Education From Your Home</h1>
                            <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" onClick={()=>navigate("/about")}>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" >
                    <img className="position-relative w-100" src="img/carousel-2.jpg" />
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" >
                            <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 className="display-3 text-white mb-md-4">Best Online Learning Platform</h1>
                            <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" onClick={()=>navigate("/about")}>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" >
                    <img className="position-relative w-100" src="img/carousel-3.jpg" />
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" >
                            <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 className="display-3 text-white mb-md-4">New Way To Learn From Home</h1>
                            <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" onClick={()=>navigate("/about")}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
                <h1>Explore Top Courses</h1>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-1.jpg" alt="" />
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Web Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-2.jpg" alt="" />
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Development</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-3.jpg" alt="" />
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Game Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-4.jpg" alt="" />
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Apps Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3">Our Blog</h5>
                <h1>Latest From Our Blog</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-4 mb-4">
                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                        <a className="blog-overlay text-decoration-none" href="/">
                            <h5 className="text-white mb-3">Best SEO practices in 2022</h5>
                            <p className="text-primary m-0">Jun 09, 2022</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                        <a className="blog-overlay text-decoration-none" href="/">
                            <h5 className="text-white mb-3">How effective is the learning from home?</h5>
                            <p className="text-primary m-0">Jul 01, 2022</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                        <a className="blog-overlay text-decoration-none" href="/">
                            <h5 className="text-white mb-3">How old do we have to be to start programming?</h5>
                            <p className="text-primary m-0">Jul 14, 2022</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Home;