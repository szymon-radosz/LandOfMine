import React from "react";

const Alert = ({ message, status }) => {
    return (
        <div className={`alert alert-${status} alert-dismissible`} role="alert">
            <strong>{message}</strong>
        </div>
    );
};

export default Alert;
