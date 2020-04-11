import React, { useContext } from "react";
import { MainContext } from "./../../MainContext";

//@ts-ignore
import gridIcon from "./../../../../assets/images/grid.png";
//@ts-ignore
import logoutIcon from "./../../../../assets/images/logout.png";

const TopBar = () => {
    const context = useContext(MainContext);
    return (
        <nav className="navbar navbar-expand-lg">
            <a
                className={
                    context.showSidebarText
                        ? "navbar-brand navbar__big-margin"
                        : "navbar-brand"
                }
                href="#"
                onClick={() => context.handleShowSidebarText()}
            >
                <img
                    className="menu-icon"
                    src={gridIcon}
                    alt="Icon made by Google from www.flaticon.com"
                />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
            >
                <ul className="nav navbar-nav">
                    <li className="navbar-right">
                        <a
                            href="#"
                            onClick={() => context.handleLogout()}
                            title="Logout"
                        >
                            <img
                                className="logout-icon"
                                src={logoutIcon}
                                alt="Icon made by dmitri13 from www.flaticon.com"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default TopBar;
