import React, { useContext } from "react";

const Newsletter = () => {
    return (
        <div className="newsletter__container">
            <div className="newsletter__wrapper">
                <h3>
                    Get To Know about <br />
                    full version
                </h3>
                <input
                    className="newsletter__email"
                    type="email"
                    placeholder="Leave your email address"
                />
                <div className="newsletter__btn">
                    <p>Submit</p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
