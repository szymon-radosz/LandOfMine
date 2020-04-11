import React from "react";

type AlertProps = {
    message: string;
    status: string;
};

const Alert = ({ message, status }: AlertProps) => {
    return (
        <div className={`alert alert-${status} alert-dismissible`} role="alert">
            <strong>{message}</strong>
        </div>
    );
};

export default Alert;
