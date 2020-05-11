import React from "react";
import { GameContext } from "./../../../../GameContext"

const SingleOption = ({
    option,
}) => {
    const context = React.useContext(GameContext);

    return (
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
                    context.handleUpdateMapConfigItem(
                        option.value,
                        option.freeHumanResources,
                        option.population,
                        option.materials,
                        option.money,
                        option.desriptionHeader,
                        option.description,
                        option.notAddedHumanResources,
                        option.scaleParam
                    );
                }}
            >
                <p>Buy now</p>
            </div>
        </div>

    );
};

export default SingleOption;
