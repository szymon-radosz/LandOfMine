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
            </DashboardContainer>
        );
    }
}

Dashboard.contextType = MainContext;
export default Dashboard;
