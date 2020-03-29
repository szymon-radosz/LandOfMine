import React, { Component } from "react";
import ZoomBtns from "./ZoomBtns/ZoomBtns";
import { GameContext } from "./../GameContext";
import ElementImage from "./ElementImage/ElementImage";
import ElementWithoutImage from "./ElementWithoutImage/ElementWithoutImage";
import ActionModal from "./ActionModal/ActionModal";

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showActionModal: false
        };
    }

    handleSetActionModal = () => {
        this.setState({ showActionModal: !this.state.showActionModal });
    };

    render() {
        const { showActionModal } = this.state;
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
                                                onClick={() =>
                                                    this.handleSetActionModal()
                                                }
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

                {showActionModal && (
                    <ActionModal
                        handleSetActionModal={this.handleSetActionModal}
                    />
                )}

                <ZoomBtns />
            </div>
        );
    }
}

Map.contextType = GameContext;
export default Map;
