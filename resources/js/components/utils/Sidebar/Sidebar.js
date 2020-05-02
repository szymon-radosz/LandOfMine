import React, { useContext } from "react";
import { MainContext } from "./../../MainContext";
import dashboardIcon from "./../../../../assets/images/dashboard.png";

const Sidebar = () => {
    const context = useContext(MainContext);

    return (
        <div className="sidebar">
            <ul className={`list-active-${context.activeMenuSection}`}>
                <li
                    className={
                        context.activeMenuSection === "Dashboard"
                            ? "sidebar__item sidebar__item--1 sidebar__item--active sidebar__item--active--1"
                            : "sidebar__item sidebar__item--1"
                    }
                >
                    <div className="sidebar__item--wrapper">
                        {context.activeMenuSection === "Dashboard" && (
                            <div className="active-sidebar-item"></div>
                        )}
                        <a
                            href="#"
                            onClick={() => {
                                context.handleChangePath("/dashboard");
                                context.handlAactiveMenuSection("Dashboard");
                            }}
                        >
                            <img
                                className="sidebar-icon"
                                src={dashboardIcon}
                                alt="Icon made by Freepik from www.flaticon.com"
                                title="Dashboard"
                            />
                        </a>
                        {context.showSidebarText && (
                            <a
                                href="#"
                                onClick={() => {
                                    context.handleChangePath("/dashboard");
                                    context.handlAactiveMenuSection(
                                        "Dashboard"
                                    );
                                }}
                            >
                                <p className="sidebar__item--text">Dashboard</p>
                            </a>
                        )}
                    </div>
                </li>

                <li className="sidebar__item sidebar__item--7">
                    <div className="sidebar__item--wrapper"></div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
