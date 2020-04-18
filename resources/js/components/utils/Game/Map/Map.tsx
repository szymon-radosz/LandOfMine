import React from "react";
import ZoomBtns from "./ZoomBtns/ZoomBtns";
import { GameContext } from "./../GameContext";
import ElementImage from "./ElementImage/ElementImage";
import ElementWithoutImage from "./ElementWithoutImage/ElementWithoutImage";
import ActionModal from "./ActionModal/ActionModal";
import ThreeDView from "./../3DView/3DView";
import MapRoadPerson from "./MapRoadPerson/MapRoadPerson";

const Map = () => {
    const context = React.useContext(GameContext);
    const [showThreeDView, setShowThreeDView] = React.useState(false);

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
                                                                            key={`element-image-${configElement.value}-${index}`}
                                                                        />
                                                                    </div>
                                                                );
                                                            } else {
                                                                return (
                                                                    <ElementImage
                                                                        configElement={
                                                                            configElement
                                                                        }
                                                                        key={`element-image-${configElement.value}-${index}`}
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
                                                                    key={`element-without-image-${configElement.value}-${index}`}
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
                data-cy="finish-day__btn"
                onClick={() => context.handleDayPassed()}
            >
                <p>Go to next day</p>
            </div>

            <div
                className="map__finish-day"
                onClick={() => setShowThreeDView(true)}
            >
                <p>Show 3D View</p>
            </div>

            {showThreeDView && <ThreeDView />}

            <ZoomBtns />

            <MapRoadPerson />
        </div>
    );
};

export default Map;
