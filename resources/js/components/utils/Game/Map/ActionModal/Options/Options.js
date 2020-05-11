import React from "react";
import SingleOption from "./SingleOption/SingleOption";

const Options = ({
    optionElements,
}) => {
    return (
        <div className="options__container">
            {optionElements &&
                optionElements.map((option, i) => {
                    return (
                        <SingleOption
                            option={option}
                            key={`option-${i}`}
                        />
                    );
                })}
        </div>
    );
};

export default Options;
