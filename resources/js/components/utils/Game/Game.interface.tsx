interface GameProps {
    onDragStart: any;
}

type mapObject = {
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

interface GameState {
    zoomX: number;
    zoomY: number;
    date: string;
    money: number;
    population: number;
    freeHumanResources: number;
    materials: number;
    societyHappiness: number;
    mapConfig: mapObject[];
    daysPassed: number;
    daylight: boolean;
    showActionModal: boolean;
    activeXCord: number;
    activeYCord: number;
    showDescription: boolean;
    isDragging: boolean;
}

export { GameProps, GameState };
