import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import "./Register.css";

const Register = () => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
        let repass = formData.get('repass');

        console.log(email);
        console.log(password);
        console.log(repass);

        authService.register(email, password, repass)
        .then((authData) => {
            register(authData);
            navigate('/');
        })
        .catch(err => {
            console.log(err);
            navigate('/register');
        })
    }

    return (
        <section id="register-page" className="login">
            <form id="register-form" method="POST" onSubmit={submitHandler}>
                <div className="register">
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="  ">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat</label>
                        <span className="input" id="repeat-pass">
                            <input type="password" name="repass" id="repass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <button id="regBtn" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Register</button> 
                    <p id="regP">Already have an account?
                        <a href="/login">Sign in</a>.
                    </p>
                </fieldset>
                </div>
            </form>
        </section>
    );
}

export default Register;