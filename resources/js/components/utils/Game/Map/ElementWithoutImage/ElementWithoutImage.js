import React from "react";

const ElementImage = ({ configElement }) => {
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
                    : configElement.value === "road-left-top" && "road-left-top"
            }
        ></div>
    );
};

export default ElementImage;
