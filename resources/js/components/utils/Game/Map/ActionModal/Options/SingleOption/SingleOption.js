import React from "react";
import { GameContext } from "./../../../../GameContext"
import { MainContext } from "./../../../../../../MainContext"
import translationsGame from "./../../../../../../translations/translations-game.json"

const SingleOption = ({
    option,
}) => {
    const gameContext = React.useContext(GameContext);
    const context = React.useContext(MainContext);

    return (
        <div className="options__element">
            <img src={option.icon} />
            <p className="options__element--header">{option.name}</p>
            <p className="options__element--description pre-line">
                {option.descriptionActionModal}
            </p>
            <p className="options__element--cost">
                {translationsGame &&
                    translationsGame.money &&
                    translationsGame.money[0][context.activeLanguage]
                }
                {": "}
                {option.cost}
            </p>
            <button
                className="options__element--submit"
                onClick={() => {
                    gameContext.handleUpdateMapConfigItem(
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
                <p>
                    {translationsGame &&
                        translationsGame.buyNow &&
                        translationsGame.buyNow[0][context.activeLanguage]
                    }
                </p>
            </button>
        </div>

    );
};

export default SingleOption;
