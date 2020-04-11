import React from "react";

type HeaderProps = {
    text: string;
};

const Header = ({ text }: HeaderProps) => {
    return (
        <div className="header__container">
            <p>{text}</p>
        </div>
    );
};

export default Header;
