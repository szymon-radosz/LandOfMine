import React from "react";

const ElementWithoutImage = ({ configElement, handleSetActionModal, x, y }) => {
    if (
        configElement.value === "road-horizontal" ||
        configElement.value === "road-vertical" ||
        configElement.value === "road-right-bottom" ||
        configElement.value === "road-left-bottom" ||
        configElement.value === "road-right-top" ||
        configElement.value === "road-left-top"
    ) {
        return (
            <div
                className={
                    configElement.value === "road-horizontal"
                        ? "road-horizontal"
                        : configElement.value === "road-vertical"
                        ? "road-vertical"
                        : configElement.value === "road-right-bottom"
                        ? "road-right-bottom"
                        : configElement.value === "road-left-bottom"
                        ? "road-left-bottom"
                        : configElement.value === "road-right-top"
                        ? "road-right-top"
                        : configElement.value === "road-left-top" &&
                          "road-left-top"
                }
            ></div>
        );
    } else if (configElement.value === "map-empty") {
        return (
            <div
                className="map-empty"
                onClick={() => handleSetActionModal(x, y)}
            ></div>
        );
    }
};

export default ElementWithoutImage;
