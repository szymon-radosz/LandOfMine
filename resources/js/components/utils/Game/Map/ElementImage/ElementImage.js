import React from "react";

const paths = {
    stone: require("./../../../../../../assets/images/stone.png"),
    water: require("./../../../../../../assets/images/water.png"),
    waterHalf: require("./../../../../../../assets/images/waterHalf.png"),
    factory: require("./../../../../../../assets/images/factory.png"),
    house: require("./../../../../../../assets/images/house.png"),
    hospital: require("./../../../../../../assets/images/hospital.png")
};

const ElementImage = ({ configElement, index }) => {
    const [showDescription, setShowDescription] = React.useState(false);

    const handleShowDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div
            className="map-element__container"
            onClick={() => handleShowDescription()}
        >
            {configElement.desriptionHeader &&
                configElement.descriptionContent && (
                    <div
                        className={`map-element__description--container ${!showDescription &&
                            "hide"}`}
                    >
                        <p className="map-element__description--header">
                            {configElement.desriptionHeader}
                        </p>
                        <p className="map-element__description--content">
                            {configElement.descriptionContent}
                        </p>
                        {configElement.finishedBuildDays &&
                            configElement.durationBuildDays &&
                            configElement.finishedBuildDays !==
                                configElement.durationBuildDays && (
                                <p className="map-element__description--content">
                                    {`Progress:
                                    ${(configElement.finishedBuildDays /
                                        configElement.durationBuildDays) *
                                        100}
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
