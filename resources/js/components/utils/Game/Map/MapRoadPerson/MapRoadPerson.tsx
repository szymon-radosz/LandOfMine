import React from "react";
import { GameContext } from "./../../GameContext";
//@ts-ignore
import greetingMan from "./../../../../../../assets/images/greetingMan.png";
//@ts-ignore
import walkingMan from "./../../../../../../assets/images/walkingMan.png";

const MapRoadPerson = ({ handleShowThreeDView, handleSetMapActiveCoords }) => {
    const gameContext = React.useContext(GameContext);
    const [showGreetingMan, setShowGreetingMan] = React.useState(true);

    const getRoadCoordinates = e => {
        let roadHtmlClass = document.elementFromPoint(e.pageX, e.pageY)
            .className;

        if (roadHtmlClass.includes("road")) {
            let roadCoordsClass = roadHtmlClass.split(" ")[1];
            let roadCoordsX = roadCoordsClass.split("-")[1];
            let roadCoordsY = roadCoordsClass.split("-")[2];

            handleSetMapActiveCoords("x", Number(roadCoordsX));
            handleSetMapActiveCoords("y", Number(roadCoordsY));
            handleShowThreeDView(true);
        }
    };

    return (
        <div
            className="map-raad-person__container"
            onMouseOver={() => {
                setShowGreetingMan(false);
                gameContext.handleMapRoadBackLight("show");
            }}
            onMouseOut={() => {
                setShowGreetingMan(true);
                gameContext.handleMapRoadBackLight("hide");
            }}
        >
            <img
                onDragEnd={e => getRoadCoordinates(e)}
                src={showGreetingMan ? greetingMan : walkingMan}
            />
        </div>
    );
};

export default MapRoadPerson;
