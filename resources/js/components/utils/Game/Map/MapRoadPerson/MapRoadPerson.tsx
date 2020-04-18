import React from "react";
import { GameContext } from "./../../GameContext";
//@ts-ignore
import greetingMan from "./../../../../../../assets/images/greetingMan.png";
//@ts-ignore
import walkingMan from "./../../../../../../assets/images/walkingMan.png";

const ZoomBtns = () => {
    const gameContext = React.useContext(GameContext);
    const [showGreetingMan, setShowGreetingMan] = React.useState(true);

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
            <img src={showGreetingMan ? greetingMan : walkingMan} />
        </div>
    );
};

export default ZoomBtns;
