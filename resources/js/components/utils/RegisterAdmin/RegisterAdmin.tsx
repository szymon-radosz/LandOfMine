import React, { useContext } from "react";
import RegisterForm from "./RegisterForm/RegisterForm";
import axios from "axios";
import { MainContext } from "./../../MainContext";

const RegisterAdmin = () => {
    const context = useContext(MainContext);

    const handleRegisterSubmit = (
        name: string,
        email: string,
        password: string
    ) => {
        if (name && email && password) {
            context.handleShowLoader(true);
            return new Promise(async (resolve, reject) => {
                try {
                    axios
                        .post(
                            context.API_URL + "checkIfEmailExists",
                            {
                                email: email
                            },
                            {
                                headers: {
                                    Authorization: `Bearer ${context.token}`
                                }
                            }
                        )
                        .then(async response => {
                            if (
                                response.data.status === "OK" &&
                                response.data.result === 1
                            ) {
                                context.handleShowAlert(
                                    "User with given email already exists",
                                    "danger"
                                );
                            } else {
                                axios
                                    .post(context.API_URL + "register", {
                                        name: name,
                                        email: email,
                                        password: password,
                                        nickname: name,
                                        admin_role: true
                                    })
                                    .then(response => {
                                        context.handleShowAlert(
                                            "Successfully register new admin",
                                            "success"
                                        );
                                        context.handleChangePath("/login");
                                    });
                            }
                        })
                        .catch(err => {
                            context.checkTokenExpiration(err.response.status);
                        });
                } catch (error) {
                    context.handleShowAlert("Cannot register", "danger");
                } finally {
                    context.handleShowLoader(false);
                }
            });
        } else {
            context.handleShowAlert("All fields required", "danger");
        }
    };

    return (
        <div className="login-form__container">
            <RegisterForm onRegisterSubmit={handleRegisterSubmit} />
        </div>
    );
};
export default RegisterAdmin;
