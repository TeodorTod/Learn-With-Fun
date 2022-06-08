import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="col-lg-9" >
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav py-0">
                <Link to="/" className="text-decoration-none">
                    <h1 className="m-0"><span className="text-primary">LEARN</span>withFun</h1>
                </Link>
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <Link to="/courses" className="nav-item nav-link">Courses</Link>
                    <Link to="/teachers" className="nav-item nav-link">Teachers</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
                <div id="guest" className="navbar-nav py-0">
                    <Link to="/login" className="nav-item nav-link">Login</Link>
                    <Link to="/register" className="nav-item nav-link">Register</Link>
                </div>
                <div id="user" className="navbar-nav py-0">
                    <Link to="/logout" className="nav-item nav-link">Logout</Link>
                    <Link to="/my-courses" className="nav-item nav-link">My Courses</Link>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Header;