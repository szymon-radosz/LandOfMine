import React, { useContext } from "react";
import TopBar from "./../TopBar/TopBar";
import Sidebar from "./../Sidebar/Sidebar";
import { MainContext } from "./../../MainContext";

const DashboardContainer = ({ children }) => {
    const context = useContext(MainContext);

    return (
        <>
            <TopBar />
            <div className="dashboard__container">
                <Sidebar />
                <div className="dashboard__container--content">
                    {context.showLoader && (
                        <div className="loader__container">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardContainer;
