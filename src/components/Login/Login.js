import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';

import "./Login.css";

const Login = ({
    onLogin
}) => {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
        .then((authData) => {
            console.log('logged');
            console.log(authData);
        })
    
    onLogin(email);

        navigate('/');
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
                    <input id="button-sub" className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
}

export default Login;