import React from "react";

type optionType = {
    name: string;
    icon: any;
    altIcon: string;
    sidebarOption: string;
    descriptionActionModal: string;
    cost: number;
    value: string;
    freeHumanResources: number;
    population: number;
    materials: number;
    money: number;
    desriptionHeader: string;
    descriptionContent: string;
    finishedBuildDays: number;
    durationBuildDays: number;
    notAddedHumanResources: boolean;
    description: string;
};

type SingleOptionProps = {
    option: optionType;
    activeSidebarOption: string;
    handleUpdateItem: (
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
    ) => {};
};

const SingleOption = ({
    option,
    activeSidebarOption,
    handleUpdateItem
}: SingleOptionProps) => {
    return (
        <>
            {activeSidebarOption === option.sidebarOption && (
                <div className="options__element">
                    <img src={option.icon} />
                    <p className="options__element--header">{option.name}</p>
                    <p className="options__element--description pre-line">
                        {option.descriptionActionModal}
                    </p>
                    <p className="options__element--cost">
                        Cost: {option.cost}
                    </p>
                    <div
                        className="options__element--submit"
                        onClick={() => {
                            handleUpdateItem(
                                option.value,
                                option.freeHumanResources,
                                option.population,
                                option.materials,
                                option.money,
                                option.desriptionHeader,
                                option.description,
                                option.finishedBuildDays,
                                option.durationBuildDays,
                                option.notAddedHumanResources
                            );
                        }}
                    >
                        <p>Buy now</p>
                    </div>
                </div>
            )}

            {activeSidebarOption === "All" && (
                <div className="options__element">
                    <img src={option.icon} />
                    <p className="options__element--header">{option.name}</p>
                    <p className="options__element--description pre-line">
                        {option.descriptionActionModal}
                    </p>
                    <p className="options__element--cost">
                        Cost: {option.cost}
                    </p>
                    <div
                        className="options__element--submit"
                        onClick={() => {
                            handleUpdateItem(
                                option.value,
                                option.freeHumanResources,
                                option.population,
                                option.materials,
                                option.money,
                                option.desriptionHeader,
                                option.description,
                                option.finishedBuildDays,
                                option.durationBuildDays,
                                option.notAddedHumanResources
                            );
                        }}
                    >
                        <p>Buy now</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default SingleOption;
