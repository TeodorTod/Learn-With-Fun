import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div class="col-lg-9">
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" class="text-decoration-none d-block d-lg-none">
                <h1 class="m-0"><span class="text-primary">E</span>COURSES</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav py-0">
                    <Link to="/home" class="nav-item nav-link active">Home</Link>
                    <Link to="/about" class="nav-item nav-link">About</Link>
                    <Link to="/courses" class="nav-item nav-link">Courses</Link>
                    <Link to="/teachers" class="nav-item nav-link">Teachers</Link>
                    <Link to="/contact" class="nav-item nav-link">Contact</Link>
                </div>
                <div id="guest" class="navbar-nav py-0">
                    <Link to="/login" class="nav-item nav-link">Login</Link>
                    <Link to="/register" class="nav-item nav-link">Register</Link>
                </div>
                <div id="user" class="navbar-nav py-0">
                    <Link to="/logout" class="nav-item nav-link">Logout</Link>
                    <Link to="/my-courses" class="nav-item nav-link">My Courses</Link>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Header;