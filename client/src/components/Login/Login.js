import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';



import "./Login.css";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
        .then((authData) => {
            login(authData);
            navigate('/');
        })
        .catch(err => {
            console.log(err);
            navigate('/login');
        })
    
    }

    return (
        <section id="login-page" className="login">
            <form id="login-form" method="POST" onSubmit={submitHandler}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
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
                    <button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Login</button>
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </fieldset>
            </form>
        </section>
    );
}

export default Login;