import React, { Component } from "react";
import { GameContext } from "./../../GameContext";
import businessIcon from "./../../../../../../assets/images/businessIcon.png";
import buildingsIcon from "./../../../../../../assets/images/buildingsIcon.png";
import entertainmentIcon from "./../../../../../../assets/images/entertainmentIcon.png";
import travelIcon from "./../../../../../../assets/images/travelIcon.png";
import factoriesIcon from "./../../../../../../assets/images/factoriesIcon.png";
import allIcon from "./../../../../../../assets/images/allIcon.png";
import Sidebar from "./Sidebar/Sidebar";
import Options from "./Options/Options";
import close from "./../../../../../../assets/images/close.png";
import oilFactory from "./../../../../../../assets/images/oilFactory.png";

class ActionModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSidebarOption: "All",
            sidebarOptions: [
                {
                    id: 0,
                    name: "All",
                    icon: allIcon,
                    altIcon: "Icon made by Freepik from www.flaticon.com"
                },
                {
                    id: 1,
                    name: "Factories",
                    icon: factoriesIcon,
                    altIcon: "Icon made by Freepik from www.flaticon.com"
                },
                {
                    id: 2,
                    name: "Building",
                    icon: buildingsIcon,
                    altIcon: "Icon made by Freepik from www.flaticon.com"
                },
                {
                    id: 3,
                    name: "Business",
                    icon: businessIcon,
                    altIcon: "Icon made by Freepik from www.flaticon.com"
                },
                {
                    id: 4,
                    name: "Entertainment",
                    icon: entertainmentIcon,
                    altIcon: "Icon made by Freepik from www.flaticon.com"
                },
                {
                    id: 5,
                    name: "Transport",
                    icon: travelIcon,
                    altIcon: "Icon made by Freepik from www.flaticon.com"
                }
            ],
            optionElements: [
                {
                    sidebarOption: "Factories",
                    name: "Oil factory",
                    value: "factory",
                    population: 1000,
                    money: 1000,
                    icon: oilFactory,
                    desriptionHeader: "Factory",
                    finishedBuildDays: 1,
                    durationBuildDays: 6,
                    description:
                        "Earn 500 money everyday.\n Need 1000 people to work in.",
                    cost: 200000
                },
                {
                    sidebarOption: "Factories",
                    name: "Oil factory",
                    value: "factory",
                    population: 1000,
                    money: 1000,
                    icon: oilFactory,
                    desriptionHeader: "Factory",
                    finishedBuildDays: 1,
                    durationBuildDays: 6,
                    description:
                        "Earn 500 money everyday.\n Need 1000 people to work in.",
                    cost: 200000
                }
            ]
        };
    }

    handleSetActiveSidebarOption = name => {
        this.setState({ activeSidebarOption: name });
    };

    handleUpdateItem = (
        value,
        population,
        money,
        desriptionHeader,
        descriptionContent,
        finishedBuildDays,
        durationBuildDays
    ) => {
        this.context.handleUpdateMapConfigItem(
            this.props.x,
            this.props.y,
            value,
            population,
            money,
            desriptionHeader,
            descriptionContent,
            finishedBuildDays,
            durationBuildDays
        );
    };

    render() {
        const {
            sidebarOptions,
            activeSidebarOption,
            optionElements
        } = this.state;

        return (
            <div className="action-modal__container">
                <div
                    className="action-modal__close"
                    onClick={() => this.props.handleSetActionModal()}
                    title="Close"
                >
                    <img src={close} alt="Close" />
                </div>
                <Sidebar
                    options={sidebarOptions}
                    handleSetActiveSidebarOption={
                        this.handleSetActiveSidebarOption
                    }
                    activeSidebarOption={activeSidebarOption}
                />
                <Options
                    optionElements={optionElements}
                    activeSidebarOption={activeSidebarOption}
                    handleUpdateItem={this.handleUpdateItem}
                />
            </div>
        );
    }
}

ActionModal.contextType = GameContext;
export default ActionModal;
