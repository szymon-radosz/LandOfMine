import React from "react";

const DashboardInfoRect = ({
    icon,
    headerText,
    number
}) => {
    return (
        <div className="col-sm-4">
            <div className="dashboard-info-rect__container">
                <div className="dashboard-info-rect__header">
                    <div className="dashboard-info-rect__icon-container">
                        <img src={icon} />
                    </div>
                    <p>{headerText}</p>
                </div>
                <p className="dashboard-info-rect__number">{number}</p>
            </div>
        </div>
    );
};

export default DashboardInfoRect;
