import React from "react";
import { GameContext } from "./../GameContext";
import logo from "./../../../../../assets/images/LOM-white.png";

const BottomPanel = () => {
    const context = React.useContext(GameContext);

    return (
        <div className="bottom-panel-game__container">
            <div className="bottom-panel-game__element">
                <p>{context && context.date && context.date}</p>
            </div>
            <div className="bottom-panel-game__element">
                <img className="bottom-panel-game--logo" src={logo} />
            </div>
            <div className="bottom-panel-game__element">
                <p>
                    {`Population: ${context &&
                        context.population &&
                        context.population}`}
                </p>
                <p>{`Money: ${context && context.money && context.money}`}</p>
                <p>{`Materials: ${context &&
                    context.materials &&
                    context.materials}`}</p>
                <p>{`Society Hapiness: ${context &&
                    context.societyHappiness &&
                    context.societyHappiness} %`}</p>
            </div>
        </div>
    );
};

export default BottomPanel;
