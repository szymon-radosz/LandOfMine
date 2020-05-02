import React from "react";
import { GameContext } from "./../GameContext";
import { MainContext } from "./../../../MainContext";
import logo from "./../../../../../assets/images/LOM-white.png";

const BottomPanel = () => {
    const gameContext = React.useContext(GameContext);
    const context = React.useContext(MainContext);

    return (
        <div className="bottom-panel-game__container">
            <div className="bottom-panel-game__element">
                <p>{`Date: ${gameContext &&
                    gameContext.date &&
                    gameContext.date}`}</p>
                <p>
                    {`Finished days:
                    ${gameContext &&
                        gameContext.daysPassed &&
                        gameContext.daysPassed}`}
                </p>
                <p>{`Society Hapiness: ${gameContext &&
                    gameContext.societyHappiness &&
                    gameContext.societyHappiness} %`}</p>
            </div>
            <div className="bottom-panel-game__element">
                <img
                    className="bottom-panel-game--logo"
                    src={logo}
                    onClick={() => context.handleChangePath("")}
                />
            </div>
            <div className="bottom-panel-game__element">
                <p>
                    {`Overal Population: ${gameContext &&
                        gameContext.population &&
                        gameContext.population}`}
                </p>
                <p>
                    {`Free Human Resources: ${gameContext &&
                        gameContext.freeHumanResources &&
                        gameContext.freeHumanResources}`}
                </p>
                <p>
                    Money:{" "}
                    <span data-cy="money-value">{`${gameContext &&
                        gameContext.money &&
                        gameContext.money}`}</span>
                </p>
                <p>{`Materials: ${gameContext &&
                    gameContext.materials &&
                    gameContext.materials}`}</p>
            </div>
        </div>
    );
};

export default BottomPanel;
