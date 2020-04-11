import React, { useState } from "react";

const RegisterForm = ({ onRegisterSubmit }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form
            className="login-form"
            onSubmit={e => {
                e.preventDefault();
                onRegisterSubmit(name, email, password);
            }}
            data-testid="form"
        >
            {/* <img src={logoSquare} data-testid="logo" /> */}
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                />
            </div>
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
                onClick={() => onRegisterSubmit(name, email, password)}
                className="btn blue-btn"
                data-testid="button"
            >
                Register
            </button>
        </form>
    );
};
export default RegisterForm;
