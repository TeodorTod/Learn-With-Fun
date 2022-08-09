import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
        <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5">
        <div className="row">
            <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white">&copy; <Link to="/">LEARNwithFun</Link>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                </p>
            </div>
        </div>
    </div>
    </footer>
    );
}

export default Footer;