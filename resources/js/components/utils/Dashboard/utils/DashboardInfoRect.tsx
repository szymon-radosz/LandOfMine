import React from "react";

type DashboardInfoRectProps = {
    icon: any;
    headerText: string;
    number: string;
};

const DashboardInfoRect = ({
    icon,
    headerText,
    number
}: DashboardInfoRectProps) => {
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
