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
                    freeHumanResources: 1000,
                    population: 0,
                    money: 10000,
                    materials: 200,
                    icon: oilFactory,
                    desriptionHeader: "Factory",
                    finishedBuildDays: 1,
                    durationBuildDays: 6,
                    description: "+10000 money everyday",
                    descriptionActionModal:
                        "+10000 money everyday.\n -1000 Resources \n -200 Materials",
                    cost: 2000000
                },
                {
                    sidebarOption: "Factories",
                    name: "Oil factory",
                    value: "factory",
                    freeHumanResources: 1000,
                    population: 0,
                    money: 10000,
                    materials: 200,
                    icon: oilFactory,
                    desriptionHeader: "Factory",
                    finishedBuildDays: 1,
                    durationBuildDays: 6,
                    description: "+10000 money everyday",
                    descriptionActionModal:
                        "+10000 money everyday.\n -1000 Resources \n -200 Materials",
                    cost: 2000000
                }
            ]
        };
    }

    handleSetActiveSidebarOption = name => {
        this.setState({ activeSidebarOption: name });
    };

    handleUpdateItem = (
        value,
        freeHumanResources,
        population,
        materials,
        money,
        desriptionHeader,
        descriptionContent,
        finishedBuildDays,
        durationBuildDays
    ) => {
        this.context.handleUpdateMapConfigItem(
            value,
            population,
            freeHumanResources,
            materials,
            money,
            desriptionHeader,
            descriptionContent,
            finishedBuildDays,
            durationBuildDays
        );

        //this.context.handleSetActionModal();
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
                    onClick={() => this.context.handleSetActionModal()}
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
