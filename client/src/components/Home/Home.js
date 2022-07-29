import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Home.css';


const Home = ({
    data
}) => {
    const navigate = useNavigate();
    let newData;

        if (data != null) {
            newData = [...data].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));;
        }

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
                            <img className="position-relative w-100" src="img/carousel-1.jpg" />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" >
                                    <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                                    <h1 className="display-3 text-white mb-md-4">Best Education From Your Home</h1>
                                    <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" onClick={() => navigate("/about")}>Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" >
                            <img className="position-relative w-100" src="img/carousel-2.jpg" />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" >
                                    <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                                    <h1 className="display-3 text-white mb-md-4">Best Online Learning Platform</h1>
                                    <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" onClick={() => navigate("/about")}>Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" >
                            <img className="position-relative w-100" src="img/carousel-3.jpg" />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" >
                                    <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                                    <h1 className="display-3 text-white mb-md-4">New Way To Learn From Home</h1>
                                    <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2" onClick={() => navigate("/about")}>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="text-center mb-5">
                    <h1>Explore Top Courses</h1>
                </div>
                {newData != undefined && newData.slice(0, 3).map(x =>
                    <div key={x._id} className="container pt-5 pb-3">

                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                    <img className="img-fluid" id="home" src={x.image} alt="" />
                                    <Link className="cat-overlay text-white text-decoration-none" to={`/details/${x._id}`}>
                                        <h4 className="text-white font-weight-medium">{x.name}</h4>
                                        <span>${x.price}</span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Home;