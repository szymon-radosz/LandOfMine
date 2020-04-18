import React, { Component } from "react";
import BottomPanel from "./BottomPanel/BottomPanel";
import Map from "./Map/Map";
import { GameContext } from "./GameContext";
import { MainContext } from "./../../MainContext";
import initialMapConfig from "./mapConfig";
import moment from "moment";
import DaylightOverlay from "./DaylightOverlay/DaylightOverlay";
import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position";
import { GameProps, GameState } from "./Game.interface";

// zoomX: 20, zoomY: 10 - start position
// zoomX: 18, zoomY: 8
// zoomX: 16, zoomY: 6
// zoomX: 14, zoomY: 4

class Game extends Component<GameProps, GameState> {
    constructor(props: GameProps) {
        super(props);

        //initially we create reactange of recteangles 10x6
        this.state = {
            zoomX: 20,
            zoomY: 10,
            date: "",
            money: 1000000,
            population: 3000,
            freeHumanResources: 2000,
            materials: 1000,
            societyHappiness: 70,
            mapConfig: [],
            daysPassed: 0,
            daylight: true,
            showActionModal: false,
            activeXCord: 0,
            activeYCord: 0,
            showDescription: false,
            isDragging: false,
            showMapRoadBackLight: "hide"
        };
    }

    handleMapRoadBackLight = status => {
        this.setState({ showMapRoadBackLight: status });
    };

    handleUpdateMapConfigItem = (
        value,
        population,
        freeHumanResources,
        materials,
        money,
        desriptionHeader,
        descriptionContent,
        finishedBuildDays,
        durationBuildDays,
        notAddedHumanResources
    ) => {
        let allowed = this.checkAllowBuild(
            money,
            freeHumanResources,
            materials
        );

        if (allowed) {
            this.handleSetActionModal();

            this.setState(prevState => ({
                mapConfig: prevState.mapConfig.map(mapConfigObject =>
                    mapConfigObject.x == this.state.activeXCord &&
                    mapConfigObject.y == this.state.activeYCord
                        ? Object.assign(mapConfigObject, {
                              value: value,
                              initialElement: false,
                              population: population,
                              money: money,
                              desriptionHeader: desriptionHeader,
                              descriptionContent: descriptionContent,
                              haveImage: true,
                              finishedBuildDays: finishedBuildDays,
                              durationBuildDays: durationBuildDays,
                              notAddedHumanResources: notAddedHumanResources
                          })
                        : mapConfigObject
                )
            }));

            this.setState({
                freeHumanResources:
                    this.state.freeHumanResources - freeHumanResources,
                money: this.state.money - money,
                materials: this.state.materials - materials
            });
        }
    };

    checkAllowBuild = (
        moneyPrompt,
        freeHumanResourcesPrompt,
        materialsPrompt
    ) => {
        const { money, freeHumanResources, materials } = this.state;

        if (moneyPrompt > money) {
            this.context.handleShowAlert("No money to build", "danger");
            return false;
        } else if (freeHumanResourcesPrompt > freeHumanResources) {
            this.context.handleShowAlert(
                "No freeHumanResources to build",
                "danger"
            );
            return false;
        } else if (materialsPrompt > materials) {
            this.context.handleShowAlert("No materials to build");
            return false;
        }

        return true;
    };

    handleZoomChange = operation => {
        const { zoomX } = this.state;

        if (zoomX < 14 || zoomX > 20) {
            this.context.handleShowAlert("Maximum length extended", "danger");
        } else if (zoomX === 20) {
            if (operation !== "increment") {
                this.setState({
                    zoomX: this.state.zoomX - 2,
                    zoomY: this.state.zoomY - 2
                });
            }
        } else if (zoomX === 14) {
            if (operation === "increment") {
                this.setState({
                    zoomX: this.state.zoomX + 2,
                    zoomY: this.state.zoomY + 2
                });
            }
        } else {
            if (operation === "increment") {
                this.setState({
                    zoomX: this.state.zoomX + 2,
                    zoomY: this.state.zoomY + 2
                });
            } else {
                this.setState({
                    zoomX: this.state.zoomX - 2,
                    zoomY: this.state.zoomY - 2
                });
            }
        }
    };

    handleIncrementFinishedBuildDays = () => {
        this.setState(prevState => ({
            mapConfig: prevState.mapConfig.map(mapConfigObject =>
                mapConfigObject.finishedBuildDays &&
                mapConfigObject.durationBuildDays &&
                mapConfigObject.finishedBuildDays !==
                    mapConfigObject.durationBuildDays
                    ? Object.assign(mapConfigObject, {
                          finishedBuildDays:
                              mapConfigObject.finishedBuildDays + 1
                      })
                    : mapConfigObject
            )
        }));
    };

    handleAssetsEarning = () => {
        let moneySum = 0;
        let materialsSum = 0;
        let freeHumanResoucesSum = 0;
        let populationSum = 0;

        let mapConfigCopy = this.state.mapConfig;

        mapConfigCopy.map(async mapConfigObject => {
            if (
                mapConfigObject.materials &&
                mapConfigObject.finishedBuildDays ===
                    mapConfigObject.durationBuildDays
            ) {
                materialsSum += mapConfigObject.materials;
            }

            if (
                mapConfigObject.money &&
                mapConfigObject.finishedBuildDays ===
                    mapConfigObject.durationBuildDays
            ) {
                moneySum += mapConfigObject.money;
            }

            if (
                mapConfigObject.notAddedHumanResources &&
                mapConfigObject.finishedBuildDays ===
                    mapConfigObject.durationBuildDays
            ) {
                mapConfigObject.notAddedHumanResources = false;
                freeHumanResoucesSum += mapConfigObject.population;
                populationSum += mapConfigObject.population;
            }
        });

        this.setState(prevState => ({
            money: prevState.money + moneySum,
            materials: prevState.materials + materialsSum,
            mapConfig: mapConfigCopy,
            population: prevState.population + populationSum,
            freeHumanResources:
                prevState.freeHumanResources + freeHumanResoucesSum
        }));
    };

    handleDayPassed = () => {
        this.setState({ daylight: false });
        this.handleIncrementFinishedBuildDays();
        this.handleAssetsEarning();
        this.setState({
            daysPassed: this.state.daysPassed + 1,
            date: moment(this.state.date, "DD.MM.YYYY")
                .add("days", 1)
                .format("DD.MM.YYYY")
        });

        setTimeout(() => {
            this.setState({ daylight: true });
        }, 1000);
    };

    handleSetActionModal = (x = 0, y = 0) => {
        this.setState({
            showActionModal: !this.state.showActionModal,
            activeXCord: x,
            activeYCord: y
        });
    };

    handleSetElementDescription = (x = 0, y = 0) => {
        const { activeXCord, activeYCord, showDescription } = this.state;

        //user clicked in active object Description, then hide that description
        if (x === activeXCord && y === activeYCord && showDescription) {
            this.setState({
                showDescription: false,
                activeXCord: x,
                activeYCord: y
            });
        } else {
            this.setState({
                showDescription: true,
                activeXCord: x,
                activeYCord: y
            });
        }
    };

    componentDidMount = () => {
        this.setState({
            mapConfig: initialMapConfig,
            date: moment("2000-01-01")
                .format("DD.MM.YYYY")
                .toString()
        });
    };

    render() {
        const {
            zoomX,
            zoomY,
            date,
            money,
            population,
            freeHumanResources,
            mapConfig,
            materials,
            societyHappiness,
            daysPassed,
            daylight,
            showActionModal,
            activeXCord,
            activeYCord,
            showDescription,
            isDragging,
            showMapRoadBackLight
        } = this.state;

        return (
            <div className="game__container">
                <GameContext.Provider
                    value={{
                        zoomX: zoomX,
                        zoomY: zoomY,
                        handleZoomChange: this.handleZoomChange,
                        date: date,
                        money: money,
                        population: population,
                        freeHumanResources: freeHumanResources,
                        materials: materials,
                        mapConfig: mapConfig,
                        societyHappiness: societyHappiness,
                        daysPassed: daysPassed,
                        handleDayPassed: this.handleDayPassed,
                        handleUpdateMapConfigItem: this
                            .handleUpdateMapConfigItem,
                        handleSetActionModal: this.handleSetActionModal,
                        showActionModal: showActionModal,
                        activeXCord: activeXCord,
                        activeYCord: activeYCord,
                        handleSetElementDescription: this
                            .handleSetElementDescription,
                        showDescription: showDescription,
                        showMapRoadBackLight: showMapRoadBackLight,
                        handleMapRoadBackLight: this.handleMapRoadBackLight
                    }}
                >
                    {!daylight && <DaylightOverlay />}
                    <ReactCursorPosition
                        activationInteractionMouse={INTERACTIONS.CLICK}
                    >
                        <Map />
                    </ReactCursorPosition>
                    <BottomPanel />
                </GameContext.Provider>
            </div>
        );
    }
}

Game.contextType = MainContext;
export default Game;
