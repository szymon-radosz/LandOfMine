import React from "react";
import { GameContext } from "./../../GameContext";

const paths = {
    stone: require("./../../../../../../assets/images/stone.png"),
    water: require("./../../../../../../assets/images/water.png"),
    waterHalf: require("./../../../../../../assets/images/waterHalf.png"),
    factory: require("./../../../../../../assets/images/factory.png"),
    house: require("./../../../../../../assets/images/house.png"),
    hospital: require("./../../../../../../assets/images/hospital.png")
};

const ElementImage = ({ configElement, index }) => {
    const [elementPositionOnMap, setElementPositionOnMap] = React.useState("");
    const context = React.useContext(GameContext);

    const getElementPositionOnMap = () => {
        //element in top-left map area
        if (
            configElement.x < context.zoomX / 2 &&
            configElement.y < context.zoomY / 2
        ) {
            setElementPositionOnMap("top-left");
        }
        //element in bottom-left map area
        else if (
            configElement.x < context.zoomX / 2 &&
            configElement.y > context.zoomY / 2
        ) {
            setElementPositionOnMap("bottom-left");
        }
        //element in top-right map area
        else if (
            configElement.x > context.zoomX / 2 &&
            configElement.y < context.zoomY / 2
        ) {
            setElementPositionOnMap("top-right");
        }
        //element in bottom-right map area
        else if (
            configElement.x > context.zoomX / 2 &&
            configElement.y > context.zoomY / 2
        ) {
            setElementPositionOnMap("bottom-right");
        }
    };

    React.useEffect(() => {
        getElementPositionOnMap();
    }, []);

    return (
        <div
            className="map-element__container"
            onClick={e => {
                context.handleSetElementDescription(
                    configElement.x,
                    configElement.y
                );
            }}
        >
            {configElement.desriptionHeader &&
                configElement.descriptionContent &&
                context.activeXCord === configElement.x &&
                context.activeYCord === configElement.y &&
                context.showDescription && (
                    <div
                        className={`map-element__description--container description-${elementPositionOnMap} ${!context.showDescription &&
                            "hide"}`}
                    >
                        <p className="map-element__description--header">
                            {configElement.desriptionHeader}
                        </p>
                        <p className="map-element__description--content pre-line">
                            {configElement.descriptionContent}
                        </p>
                        {configElement.finishedBuildDays &&
                            configElement.durationBuildDays &&
                            configElement.finishedBuildDays !==
                                configElement.durationBuildDays && (
                                <p className="map-element__description--content map-element__description--progress">
                                    {`Progress:
                                    ${Math.floor(
                                        (configElement.finishedBuildDays /
                                            configElement.durationBuildDays) *
                                            100
                                    )}
                                    %`}
                                </p>
                            )}
                    </div>
                )}
            <img
                src={paths[configElement.value]}
                style={
                    configElement.finishedBuildDays &&
                    configElement.durationBuildDays &&
                    configElement.finishedBuildDays !==
                        configElement.durationBuildDays
                        ? {
                              WebkitMaskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, ${configElement.finishedBuildDays /
                                  configElement.durationBuildDays}))`
                          }
                        : {}
                }
            />
        </div>
    );
};

export default ElementImage;
