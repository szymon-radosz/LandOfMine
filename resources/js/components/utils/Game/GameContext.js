import React from "react";
export const GameContext = React.createContext({
    zoomX: 10,
    zoomY: 6,
    handleZoomChange: operation => {},
    date: "",
    money: 0,
    population: 0,
    freeHumanResources: 0,
    materials: 0,
    initialZoomPosition: 3,
    societyHappiness: 0,
    mapConfig: [],
    daysPassed: 0,
    handleAddmapConfigItem: (
        x,
        y,
        value,
        population,
        money,
        desriptionHeader,
        descriptionContent,
        finishedBuildDays,
        durationBuildDays
    ) => {}
});
