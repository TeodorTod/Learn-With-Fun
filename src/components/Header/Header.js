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
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="about.html" class="nav-item nav-link">About</a>
                    <a href="course.html" class="nav-item nav-link">Courses</a>
                    <a href="teacher.html" class="nav-item nav-link">Teachers</a>
                    <div class="nav-item dropdown">
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                </div>
                <a class="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="">Join Now</a>
            </div>
        </nav>
    </div>
    );
}

export default Header;