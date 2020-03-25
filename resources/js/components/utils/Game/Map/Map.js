import React from "react";
import ZoomBtns from "./ZoomBtns/ZoomBtns";
import { GameContext } from "./../GameContext";

const Map = () => {
    const gameContext = React.useContext(GameContext);

    return (
        <div className="game__map--container">
            {gameContext.zoomY &&
                [...Array(gameContext.zoomY)].map((yElement, i) => {
                    return (
                        <div className={`map__floor map__floor-${i}`}>
                            {gameContext.zoomX &&
                                [...Array(gameContext.zoomX)].map(
                                    (element, j) => {
                                        return (
                                            <div
                                                className={`map-square map-square__${i}-${j}`}
                                                style={{
                                                    height: `calc(100vh/${gameContext.zoomY}`,
                                                    width: `calc(100vw/${gameContext.zoomX})`
                                                }}
                                            ></div>
                                        );
                                    }
                                )}
                        </div>
                    );
                })}

            <ZoomBtns />
        </div>
    );
};

export default Map;
