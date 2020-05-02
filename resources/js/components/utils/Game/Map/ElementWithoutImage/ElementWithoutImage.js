import React from "react";
import { GameContext } from "./../../GameContext";

import roadVertical from "./../../../../../../assets/images/road-vertically.png";
import roadHorizontal from "./../../../../../../assets/images/road-horizontal.png";
import roadLeftBottom from "./../../../../../../assets/images/road-left-bottom.png";
import roadLeftTop from "./../../../../../../assets/images/road-left-top.png";
import roadRightBottom from "./../../../../../../assets/images/road-right-bottom.png";
import roadRightTop from "./../../../../../../assets/images/road-right-top.png";

const ElementWithoutImage = ({
    configElement,
    x,
    y
}) => {
    const context = React.useContext(GameContext);
    const [addBacklightClass, setAddBacklightClass] = React.useState(false);

    React.useEffect(() => {
        if (context.showMapRoadBackLight) {
            if (context.showMapRoadBackLight === "show") {
                setAddBacklightClass(true);
            } else {
                setAddBacklightClass(false);
            }
        }
    }, [context.showMapRoadBackLight]);

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
                        ? `road road-${configElement.x}-${
                        configElement.y
                        } road-horizontal ${
                        addBacklightClass ? "road-backlight" : ""
                        }`
                        : configElement.value === "road-vertical"
                            ? `road road-${configElement.x}-${
                            configElement.y
                            } road-vertical ${
                            addBacklightClass ? "road-backlight" : ""
                            }`
                            : configElement.value === "road-right-bottom"
                                ? `road road-${configElement.x}-${
                                configElement.y
                                } road-right-bottom ${
                                addBacklightClass ? "road-backlight" : ""
                                }`
                                : configElement.value === "road-left-bottom"
                                    ? `road road-${configElement.x}-${
                                    configElement.y
                                    } road-left-bottom ${
                                    addBacklightClass ? "road-backlight" : ""
                                    }`
                                    : configElement.value === "road-right-top"
                                        ? `road road-${configElement.x}-${
                                        configElement.y
                                        } road-right-top ${
                                        addBacklightClass ? "road-backlight" : ""
                                        }`
                                        : configElement.value === "road-left-top" &&
                                        `road road-${configElement.x}-${
                                        configElement.y
                                        } road-left-top ${
                                        addBacklightClass ? "road-backlight" : ""
                                        }`
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
