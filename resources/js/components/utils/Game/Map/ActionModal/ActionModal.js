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
                    icon: allIcon
                },
                {
                    id: 1,
                    name: "Factories",
                    icon: factoriesIcon
                },
                {
                    id: 2,
                    name: "Building",
                    icon: buildingsIcon
                },
                {
                    id: 3,
                    name: "Business",
                    icon: businessIcon
                },
                {
                    id: 4,
                    name: "Entertainment",
                    icon: entertainmentIcon
                },
                {
                    id: 5,
                    name: "Transport",
                    icon: travelIcon
                }
            ],
            optionElements: [
                {
                    sidebarOption: "Factories",
                    name: "Oil factory",
                    icon: oilFactory,
                    description:
                        "Earn 500 money everyday.\n Need 1000 people to work in.",
                    cost: 200000
                },
                {
                    sidebarOption: "Factories",
                    name: "Oil factory1",
                    icon: oilFactory,
                    description:
                        "Earn 500 money everyday.\n Need 1000 people to work in.",
                    cost: 200000
                },
                {
                    sidebarOption: "Factories",
                    name: "Oil factory2",
                    icon: oilFactory,
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
                />
            </div>
        );
    }
}

ActionModal.contextType = GameContext;
export default ActionModal;
