import React, { Component } from "react";
import DashboardContainer from "./../DashboardContainer/DashboardContainer";
import { MainContext } from "./../../MainContext";
import Header from "./utils/Header";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectLogin: true
        };
    }

    componentDidMount = () => {
        this.context.handlAactiveMenuSection("Dashboard");
    };

    render() {
        return (
            <DashboardContainer>
                <Header text="Statistics - Current Week" />

                {/* <div className="dashboard__rect-container row">
                    <DashboardInfoRect
                        icon={scanIcon}
                        headerText="Scans"
                        number={weeklyScans}
                    />

                    <DashboardInfoRect
                        icon={acceptIcon}
                        headerText="Products waiting for accept"
                        number={weeklyProductsToAccept}
                    />
                </div> */}
            </DashboardContainer>
        );
    }
}

Dashboard.contextType = MainContext;
export default Dashboard;
