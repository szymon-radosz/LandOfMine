import React from "react";
export const GameContext = React.createContext({
    zoomX: 10,
    zoomY: 6,
    handleZoomChange: () => {}
});
