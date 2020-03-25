import React, { useState } from "react";
// import logoSquare from "./../../../../../assets/images/logo-square.png";

const LoginForm = ({ onLoginSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form
            className="login-form"
            onSubmit={() => onLoginSubmit(email, password)}
            data-testid="form"
        >
            {/* <img src={logoSquare} data-testid="logo" /> */}
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button
                type="submit"
                onClick={e => onLoginSubmit(e, email, password)}
                className="btn blue-btn"
                data-testid="button"
            >
                Login
            </button>
        </form>
    );
};
export default LoginForm;
