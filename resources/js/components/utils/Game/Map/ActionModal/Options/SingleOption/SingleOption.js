import React from "react";

const SingleOption = ({ option, activeSidebarOption, handleUpdateItem }) => {
    return (
        <>
            {activeSidebarOption === option.sidebarOption && (
                <div className="options__element">
                    <img src={option.icon} />
                    <p className="options__element--header">{option.name}</p>
                    <p className="options__element--description">
                        {option.description}
                    </p>
                    <p className="options__element--cost">
                        Cost: {option.cost}
                    </p>
                    <div
                        className="options__element--submit"
                        onClick={() => {
                            handleUpdateItem(
                                option.value,
                                option.population,
                                option.money,
                                option.desriptionHeader,
                                option.description,
                                option.finishedBuildDays,
                                option.durationBuildDays
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
                    <p className="options__element--description">
                        {option.description}
                    </p>
                    <p className="options__element--cost">
                        Cost: {option.cost}
                    </p>
                    <div
                        className="options__element--submit"
                        onClick={() => {
                            handleUpdateItem(
                                option.value,
                                option.population,
                                option.money,
                                option.desriptionHeader,
                                option.description,
                                option.finishedBuildDays,
                                option.durationBuildDays
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
