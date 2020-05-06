import React, { Component } from "react";
import ZoomBtns from "./ZoomBtns/ZoomBtns";
import { GameContext } from "./../GameContext";
import ElementImage from "./ElementImage/ElementImage";
import ElementWithoutImage from "./ElementWithoutImage/ElementWithoutImage";
import ActionModal from "./ActionModal/ActionModal";
import MapThreeD from "./Map3D/MapThreeD"
import MapRoadPerson from "./MapRoadPerson/MapRoadPerson";

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showThreeDView: true,
            activeXMapRoadPreview: -1,
            activeYMapRoadPreview: -1
        };
    }

    handleShowThreeDView = (status) => {
        this.setState({ showThreeDView: status });
    };

    handleSetMapActiveCoords = (cord, value) => {
        if (cord === "x") {
            this.setState({ activeXMapRoadPreview: value });
        }
        this.setState({ activeYMapRoadPreview: value });
    };

    render() {
        //const { zoomX, zoomY, mapConfig, showActionModal } = this.context;
        const {
            showThreeDView,
            activeXMapRoadPreview,
            activeYMapRoadPreview
        } = this.state;

        return (
            <div className="game__map--container">
                {/* {zoomY &&
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
                                                key={`map-square__${(20 -
                                                    zoomX) /
                                                    2 +
                                                    x}-${(10 - zoomY) / 2 + y}`}
                                            >
                                                {mapConfig &&
                                                    mapConfig.map(
                                                        (
                                                            configElement,
                                                            index
                                                        ) => {
                                                            if (
                                                                configElement.x ===
                                                                (20 -
                                                                    zoomX) /
                                                                2 +
                                                                x &&
                                                                configElement.y ===
                                                                (10 -
                                                                    zoomY) /
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
                                                                (20 -
                                                                    zoomX) /
                                                                2 +
                                                                x &&
                                                                configElement.y ===
                                                                (10 -
                                                                    zoomY) /
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
                    })} */}

                {/* {showActionModal && <ActionModal />} */}

                {!showThreeDView && (
                    <div
                        className="map__left-top--btn"
                        data-cy="finish-day__btn"
                        onClick={() => this.context.handleDayPassed()}
                    >
                        <p>Go to next day</p>
                    </div>
                )}

                {/* {showThreeDView && (
                    <ThreeDView
                        handleShowThreeDView={this.handleShowThreeDView}
                    />
                )} */}

                {/* <ZoomBtns /> */}

                <MapThreeD />

                {/* <MapRoadPerson
                    handleShowThreeDView={this.handleShowThreeDView}
                    handleSetMapActiveCoords={this.handleSetMapActiveCoords}
                /> */}
            </div>
        );
    }
}
Map.contextType = GameContext;
export default Map;
