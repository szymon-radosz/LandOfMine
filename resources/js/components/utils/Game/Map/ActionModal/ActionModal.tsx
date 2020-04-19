import React, { Component } from "react";
import { GameContext } from "./../../GameContext";
import Sidebar from "./Sidebar/Sidebar";
import Options from "./Options/Options";
import { ActionModalProps, ActionModalState } from "./ActionModal.interface";

//@ts-ignore
import businessIcon from "./../../../../../../assets/images/businessIcon.png";
//@ts-ignore
import buildingsIcon from "./../../../../../../assets/images/buildingsIcon.png";
//@ts-ignore
import entertainmentIcon from "./../../../../../../assets/images/entertainmentIcon.png";
//@ts-ignore
import travelIcon from "./../../../../../../assets/images/travelIcon.png";
//@ts-ignore
import factoriesIcon from "./../../../../../../assets/images/factoriesIcon.png";
//@ts-ignore
import allIcon from "./../../../../../../assets/images/allIcon.png";
//@ts-ignore
import close from "./../../../../../../assets/images/close.png";
//@ts-ignore
import oilFactory from "./../../../../../../assets/images/oilFactory.png";
//@ts-ignore
import house from "./../../../../../../assets/images/house.png";

class ActionModal extends Component<ActionModalProps, ActionModalState> {
    constructor(props: ActionModalProps) {
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
                        "+10000 money everyday\n -1000 human resources \n -200 materials",
                    cost: 2000000,
                    notAddedHumanResources: false
                },
                {
                    sidebarOption: "Building",
                    name: "Apartment",
                    value: "house",
                    freeHumanResources: 0,
                    population: 1000,
                    money: 10000,
                    materials: 200,
                    icon: house,
                    desriptionHeader: "Apartment",
                    finishedBuildDays: 1,
                    durationBuildDays: 4,
                    description: "+1000 Free Human Resources",
                    descriptionActionModal:
                        "+1000 Free Human Resources\n -200 materials",
                    cost: 200000,
                    notAddedHumanResources: true
                }
            ]
        };
    }

    handleSetActiveSidebarOption = (name: string) => {
        this.setState({ activeSidebarOption: name });
    };

    handleUpdateItem = (
        value: string,
        freeHumanResources: number,
        population: number,
        materials: number,
        money: number,
        desriptionHeader: string,
        descriptionContent: string,
        finishedBuildDays: number,
        durationBuildDays: number,
        notAddedHumanResources: boolean
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
            durationBuildDays,
            notAddedHumanResources
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
