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
                <img
                    className="bottom-panel-game--logo"
                    src={logo}
                    onClick={() => context.handleChangePath("")}
                />
            </div>
            <div className="bottom-panel-game__element bottom-panel-game__element--middle">
                <p>
                    <strong>Overal Population</strong>{" "}{gameContext &&
                        gameContext.population &&
                        gameContext.population}
                </p>
                <p>
                    <strong>Free Human Resources</strong>{" "}{gameContext &&
                        gameContext.freeHumanResources &&
                        gameContext.freeHumanResources}
                </p>
                <p>
                    <strong>Money</strong>{" "}
                    <span data-cy="money-value">{`${gameContext &&
                        gameContext.money &&
                        gameContext.money}`}</span>
                </p>
                <p>
                    <strong>Materials</strong>{" "}{gameContext &&
                        gameContext.materials &&
                        gameContext.materials}</p>
            </div>
            <div className="bottom-panel-game__element">
                <button className="bottom-panel__naxt-day--btn" onClick={gameContext.handleDayPassed}>
                    Go to next day
                </button>
            </div>
        </div>
    );
};

export default BottomPanel;
