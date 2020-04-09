import React from "react";
import ZoomBtns from "./ZoomBtns/ZoomBtns";
import { GameContext } from "./../GameContext";
import ElementImage from "./ElementImage/ElementImage";
import ElementWithoutImage from "./ElementWithoutImage/ElementWithoutImage";
import ActionModal from "./ActionModal/ActionModal";

const Map = ({ isActive, position }) => {
    const context = React.useContext(GameContext);

    React.useEffect(() => {
        console.log(["isActive", isActive, position]);
    }, [isActive]);

    // const { showActionModal, activeXCord, activeYCord } = this.state;
    const { zoomX, zoomY, mapConfig } = context;
    return (
        <div className="game__map--container">
            {zoomY &&
                [...Array(zoomY)].map((yElement, y) => {
                    //console.log(["=======", y]);
                    return (
                        <div
                            className={`map__floor map__floor-${y}`}
                            key={`map__floor-${y}`}
                        >
                            {zoomX &&
                                [...Array(zoomX)].map((Xelement, x) => {
                                    // console.log([
                                    //     "x,y",
                                    //     zoomX,
                                    //     zoomY,
                                    //     x,
                                    //     y
                                    // ]);
                                    return (
                                        <div
                                            className={`map-square map-square__${(20 -
                                                zoomX) /
                                                2 +
                                                x}-${(10 - zoomY) / 2 + y}`}
                                            style={{
                                                height: `calc(100vh/${zoomY}`,
                                                width: `calc(100vw/${zoomX})`
                                            }}
                                            key={`map-square__${(20 - zoomX) /
                                                2 +
                                                x}-${(10 - zoomY) / 2 + y}`}
                                        >
                                            {mapConfig &&
                                                mapConfig.map(
                                                    (configElement, index) => {
                                                        // console.log(
                                                        //     configElement.x,
                                                        //     x,
                                                        //     configElement.y,
                                                        //     y
                                                        // );
                                                        if (
                                                            configElement.x ===
                                                                (20 - zoomX) /
                                                                    2 +
                                                                    x &&
                                                            configElement.y ===
                                                                (10 - zoomY) /
                                                                    2 +
                                                                    y &&
                                                            configElement.haveImage
                                                        ) {
                                                            if (
                                                                configElement.finishedBuildDays &&
                                                                configElement.durationBuildDays &&
                                                                configElement.finishedBuildDays !==
                                                                    configElement.durationBuildDays
                                                            ) {
                                                                return (
                                                                    <div className="map-element__during-build--container">
                                                                        <ElementImage
                                                                            configElement={
                                                                                configElement
                                                                            }
                                                                            index={
                                                                                index
                                                                            }
                                                                            key={`${configElement.value}-${index}`}
                                                                        />
                                                                    </div>
                                                                );
                                                            } else {
                                                                return (
                                                                    <ElementImage
                                                                        configElement={
                                                                            configElement
                                                                        }
                                                                        index={
                                                                            index
                                                                        }
                                                                        key={`${configElement.value}-${index}`}
                                                                    />
                                                                );
                                                            }
                                                        } else if (
                                                            configElement.x ===
                                                                (20 - zoomX) /
                                                                    2 +
                                                                    x &&
                                                            configElement.y ===
                                                                (10 - zoomY) /
                                                                    2 +
                                                                    y &&
                                                            !configElement.haveImage
                                                        ) {
                                                            return (
                                                                <ElementWithoutImage
                                                                    configElement={
                                                                        configElement
                                                                    }
                                                                    key={`${configElement.value}-${index}`}
                                                                    // handleSetActionModal={
                                                                    //     this
                                                                    //         .handleSetActionModal
                                                                    // }
                                                                    x={
                                                                        (20 -
                                                                            zoomX) /
                                                                            2 +
                                                                        x
                                                                    }
                                                                    y={
                                                                        (10 -
                                                                            zoomY) /
                                                                            2 +
                                                                        y
                                                                    }
                                                                />
                                                            );
                                                        }
                                                    }
                                                )}
                                        </div>
                                    );
                                })}
                        </div>
                    );
                })}

            {context.showActionModal && <ActionModal />}

            <div
                className="map__finish-day"
                onClick={() => context.handleDayPassed()}
            >
                <p>Go to next day</p>
            </div>

            <ZoomBtns />
        </div>
    );
};

export default Map;
