import "./Register.css";

const Register = () => {
    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
        let rePass = formData.get('repeat-pass');

        console.log(email);
        console.log(password);
        console.log(rePass);
    }

    return (
        <section id="register-page" className="login">
            <form id="register-form" method="POST" onSubmit={submitHandler}>
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
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="repeat-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input id="button-sub" className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
}

export default Register;