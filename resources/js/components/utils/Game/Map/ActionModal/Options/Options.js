import React from "react";
import SingleOption from "./SingleOption/SingleOption";

const Options = ({
    optionElements,
    activeSidebarOption,
    handleUpdateItem
}) => {
    return (
        <div className="options__container">
            {optionElements &&
                optionElements.map((option, i) => {
                    return (
                        <SingleOption
                            option={option}
                            activeSidebarOption={activeSidebarOption}
                            key={`option-${i}`}
                            handleUpdateItem={handleUpdateItem}
                        />
                    );
                })}
        </div>
    );
};

export default Options;
