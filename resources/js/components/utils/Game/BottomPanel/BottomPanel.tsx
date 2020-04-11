import React from "react";
import { GameContext } from "./../GameContext";

//@ts-ignore
import logo from "./../../../../../assets/images/LOM-white.png";

const BottomPanel = () => {
    const context = React.useContext(GameContext);

    return (
        <div className="bottom-panel-game__container">
            <div className="bottom-panel-game__element">
                <p>{`Date: ${context && context.date && context.date}`}</p>
                <p>
                    {`Finished days:
                    ${context && context.daysPassed && context.daysPassed}`}
                </p>
                <p>{`Society Hapiness: ${context &&
                    context.societyHappiness &&
                    context.societyHappiness} %`}</p>
            </div>
            <div className="bottom-panel-game__element">
                <img className="bottom-panel-game--logo" src={logo} />
            </div>
            <div className="bottom-panel-game__element">
                <p>
                    {`Overal Population: ${context &&
                        context.population &&
                        context.population}`}
                </p>
                <p>
                    {`Free Human Resources: ${context &&
                        context.freeHumanResources &&
                        context.freeHumanResources}`}
                </p>
                <p>{`Money: ${context && context.money && context.money}`}</p>
                <p>{`Materials: ${context &&
                    context.materials &&
                    context.materials}`}</p>
            </div>
        </div>
    );
};

export default BottomPanel;
