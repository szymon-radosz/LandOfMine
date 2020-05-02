import React from "react";
import { GameContext } from "./../../GameContext";

const ZoomBtns = () => {
    const gameContext = React.useContext(GameContext);

    return (
        <div className="zoom-btns__container">
            <div
                className={
                    gameContext.zoomX === 14
                        ? "zoom-btns__container--top zoom-btns__container--disable"
                        : "zoom-btns__container--top zoom-btns__container--enable"
                }
                onClick={() => gameContext.handleZoomChange("decrement")}
            >
                <p>+</p>
            </div>
            <div
                className={
                    gameContext.zoomX === 20
                        ? "zoom-btns__container--bottom zoom-btns__container--disable"
                        : "zoom-btns__container--bottom zoom-btns__container--enable"
                }
                onClick={() => gameContext.handleZoomChange("increment")}
            >
                <p>-</p>
            </div>
        </div>
    );
};

export default ZoomBtns;
