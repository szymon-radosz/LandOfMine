import React from "react";
import SingleOption from "./SingleOption/SingleOption";

type OptionsProps = {
    optionElements: any;
    activeSidebarOption: string;
    handleUpdateItem: any;
};

const Options = ({
    optionElements,
    activeSidebarOption,
    handleUpdateItem
}: OptionsProps) => {
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
