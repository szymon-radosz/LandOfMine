import React from "react";
import { GameContext } from "./../../GameContext";

type ElementWithoutImageType = {
    x: number;
    y: number;
    value: string;
    initialElement: boolean;
    population: number;
    money: number;
    haveImage: boolean;
    finishedBuildDays?: number;
    durationBuildDays?: number;
    materials?: number;
    desriptionHeader?: string;
    descriptionContent?: string;
    notAddedHumanResources?: boolean;
};

type ElementWithoutImageProps = {
    configElement: ElementWithoutImageType;
    x: number;
    y: number;
};

const ElementWithoutImage = ({
    configElement,
    x,
    y
}: ElementWithoutImageProps) => {
    const context = React.useContext(GameContext);

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
                onClick={() => context.handleSetActionModal(x, y)}
            ></div>
        );
    }
};

export default ElementWithoutImage;
