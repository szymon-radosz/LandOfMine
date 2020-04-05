import React, { Component } from "react";
import ZoomBtns from "./ZoomBtns/ZoomBtns";
import { GameContext } from "./../GameContext";
import ElementImage from "./ElementImage/ElementImage";
import ElementWithoutImage from "./ElementWithoutImage/ElementWithoutImage";
import ActionModal from "./ActionModal/ActionModal";

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        // const { showActionModal, activeXCord, activeYCord } = this.state;
        const { zoomX, zoomY, mapConfig } = this.context;
        return (
            <div className="game__map--container">
                {zoomY &&
                    [...Array(zoomY)].map((yElement, y) => {
                        return (
                            <div
                                className={`map__floor map__floor-${y}`}
                                key={`map__floor-${y}`}
                            >
                                {zoomX &&
                                    [...Array(zoomX)].map((Xelement, x) => {
                                        //console.log(["x,y", x, y]);
                                        return (
                                            <div
                                                className={`map-square map-square__${20 -
                                                    zoomX +
                                                    x}-${11 - zoomY + y}`}
                                                style={{
                                                    height: `calc(100vh/${zoomY}`,
                                                    width: `calc(100vw/${zoomX})`
                                                }}
                                                key={`map-square__${20 -
                                                    zoomX +
                                                    x}-${11 - zoomY + y}`}
                                            >
                                                {mapConfig &&
                                                    mapConfig.map(
                                                        (
                                                            configElement,
                                                            index
                                                        ) => {
                                                            // console.log(
                                                            //     configElement.x,
                                                            //     x,
                                                            //     configElement.y,
                                                            //     y
                                                            // );
                                                            if (
                                                                configElement.x ===
                                                                    20 -
                                                                        zoomX +
                                                                        x &&
                                                                configElement.y ===
                                                                    11 -
                                                                        zoomY +
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
                                                                    20 -
                                                                        zoomX +
                                                                        x &&
                                                                configElement.y ===
                                                                    11 -
                                                                        zoomY +
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
                                                                        x={x}
                                                                        y={y}
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

                {this.context && this.context.showActionModal && (
                    <ActionModal
                    // handleSetActionModal={this.handleSetActionModal}
                    // x={activeXCord}
                    // y={activeYCord}
                    />
                )}

                <div
                    className="map__finish-day"
                    onClick={() => this.context.handleDayPassed()}
                >
                    <p>Go to next day</p>
                </div>

                <ZoomBtns />
            </div>
        );
    }
}

Map.contextType = GameContext;
export default Map;
