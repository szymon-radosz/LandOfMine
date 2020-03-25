import React from "react";
import { GameContext } from "./../../GameContext";

const ZoomBtns = () => {
    const gameContext = React.useContext(GameContext);

    return (
        <div className="zoom-btns__container">
            <div
                className="zoom-btns__container--top"
                onClick={() => gameContext.handleZoomChange("decrement")}
            >
                <p>+</p>
            </div>
            <div
                className="zoom-btns__container--bottom"
                onClick={() => gameContext.handleZoomChange("increment")}
            >
                <p>-</p>
            </div>
        </div>
    );
};

export default ZoomBtns;
