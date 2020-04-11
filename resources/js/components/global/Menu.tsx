import React, { useContext } from "react";
import { MainContext } from "./../MainContext";
//@ts-ignore
import { slide as MenuBurger } from "react-burger-menu";
//@ts-ignore
import logo from "./../../../assets/images/LOM-white.png";

const Menu = () => {
    const context = useContext(MainContext);

    return (
        <div className="page__main-section--top-panel">
            <div className="top-panel__wrapper">
                <div className="top-panel__left--container">
                    <img
                        src={logo}
                        onClick={() => {
                            context.handleChangePath("");
                        }}
                    />
                </div>
                <MenuBurger right>
                    <p onClick={() => context.handleChangePath("")}>START</p>
                    <p onClick={() => context.handleChangePath("trial")}>
                        FREE TRIAL
                    </p>
                </MenuBurger>
            </div>
        </div>
    );
};

export default Menu;
