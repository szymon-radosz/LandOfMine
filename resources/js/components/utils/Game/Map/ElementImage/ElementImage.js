import React from "react";
import { GameContext } from "./../../GameContext";
import stone from "./../../../../../../assets/images/stone.png";
import factory from "./../../../../../../assets/images/factory.png";
import house from "./../../../../../../assets/images/house.png";
import hospital from "./../../../../../../assets/images/hospital.png";

const ElementImage = ({ configElement }) => {
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
                src={
                    configElement.value === "stone"
                        ? stone
                        : configElement.value === "factory"
                            ? factory
                            : configElement.value === "house"
                                ? house
                                : configElement.value === "hospital" && hospital
                }
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
