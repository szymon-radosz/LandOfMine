import React, { Component } from "react";
import BottomPanel from "./BottomPanel/BottomPanel";
// import Map from "./Map/Map";
import Map from "./Map/Map"
import { GameContext } from "./GameContext";
import { MainContext } from "./../../MainContext";
import initialMapConfig from "./mapConfig";
import moment from "moment";
import DaylightOverlay from "./DaylightOverlay/DaylightOverlay";
import HomeFirstSection from "./../Home/HomeFirstSection/HomeFirstSection"

class Game extends Component {
    constructor(props) {
        super(props);

        //initially we create reactange of recteangles 10x6
        this.state = {
            zoomX: 16,
            zoomY: 6,
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
            activeZCord: 0,
            showMapLoader: true
        };
    }

    componentDidMount = () => {
        console.log(["initialMapConfig", initialMapConfig])
        this.setState({
            mapConfig: initialMapConfig,
            date: moment("2000-01-01")
                .format("DD.MM.YYYY")
                .toString()
        });

        this.setLoaderOff();
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
                        mapConfigObject.y == this.state.activeYCord &&
                        mapConfigObject.z == this.state.activeZCord ? Object.assign(mapConfigObject, {
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

    handleSetActionModal = (x = 0, y = 0, z = 0) => {
        this.setState({
            showActionModal: !this.state.showActionModal,
            activeXCord: x,
            activeYCord: y,
            activeZCord: z
        });
    };

    setLoaderOff = () => {
        setTimeout(() => {
            this.setState({ showMapLoader: false })
        }, 11000)
    }

    render() {
        const {
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
            activeZCord,
            showMapLoader
        } = this.state;

        return (
            <div className="game__container">
                <GameContext.Provider
                    value={{
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
                        activeZCord: activeZCord,
                        handleSetElementDescription: this
                            .handleSetElementDescription
                    }}
                >
                    {!daylight && <DaylightOverlay />}

                    {showMapLoader && <HomeFirstSection loadScreen={true} />}

                    <Map />

                    <BottomPanel />
                </GameContext.Provider>
            </div>
        );
    }
}

Game.contextType = MainContext;
export default Game;
