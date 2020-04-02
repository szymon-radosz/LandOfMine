import React, { Component } from "react";
import BottomPanel from "./BottomPanel/BottomPanel";
import Map from "./Map/Map";
import { GameContext } from "./GameContext";
import { MainContext } from "./../../MainContext";
import initialMapConfig from "./mapConfig";
import moment from "moment";
import DaylightOverlay from "./DaylightOverlay/DaylightOverlay";

// zoomX: 20, zoomY: 11 - initialZoomPosition: 8
// zoomX: 18, zoomY: 10 - initialZoomPosition: 7
// zoomX: 16, zoomY: 9 - initialZoomPosition: 6
// zoomX: 14, zoomY: 8 - initialZoomPosition: 5
// zoomX: 12, zoomY: 7 - initialZoomPosition: 4
// zoomX: 10, zoomY: 6 - initialZoomPosition: 3
// zoomX: 8, zoomY: 5 - initialZoomPosition: 2
// zoomX: 6, zoomY: 4 - initialZoomPosition: 1
// zoomX: 4, zoomY: 2 - initialZoomPosition: 0

class Game extends Component {
    constructor(props) {
        super(props);

        //initially we create reactange of recteangles 10x6
        this.state = {
            initialZoomPosition: 3,
            zoomX: 20,
            zoomY: 11,
            date: "",
            money: 1000000,
            population: 3000,
            materials: 1000,
            societyHappiness: 70,
            mapConfig: [],
            daysPassed: 0,
            daylight: true
        };
    }

    handleUpdateMapConfigItem = (
        x,
        y,
        value,
        population,
        money,
        desriptionHeader,
        descriptionContent,
        finishedBuildDays,
        durationBuildDays
    ) => {
        console.log([
            "handleUpdateMapConfigItem",
            x,
            y,
            value,
            population,
            money,
            desriptionHeader,
            descriptionContent,
            finishedBuildDays,
            durationBuildDays
        ]);

        this.setState(prevState => ({
            mapConfig: prevState.mapConfig.map(mapConfigObject =>
                mapConfigObject.x == x && mapConfigObject.y == y
                    ? Object.assign(mapConfigObject, {
                          value: value,
                          initialElement: false,
                          population: population,
                          money: money,
                          desriptionHeader: desriptionHeader,
                          descriptionContent: descriptionContent,
                          haveImage: true,
                          finishedBuildDays: finishedBuildDays,
                          durationBuildDays: durationBuildDays
                      })
                    : mapConfigObject
            )
        }));
    };

    handleZoomChange = operation => {
        const { zoomX } = this.state;

        if (zoomX < 4 || zoomX > 20) {
            this.context.handleShowAlert("Maximum length extended", "danger");
        } else if (zoomX === 20) {
            if (operation !== "increment") {
                this.setState({
                    zoomX: this.state.zoomX - 2,
                    zoomY: this.state.zoomY - 1
                });
            }
        } else if (zoomX === 4) {
            if (operation === "increment") {
                this.setState({
                    zoomX: this.state.zoomX + 2,
                    zoomY: this.state.zoomY + 1
                });
            }
        } else {
            if (operation === "increment") {
                this.setState({
                    zoomX: this.state.zoomX + 2,
                    zoomY: this.state.zoomY + 1
                });
            } else {
                this.setState({
                    zoomX: this.state.zoomX - 2,
                    zoomY: this.state.zoomY - 1
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

    handleMoneyEarning = () => {
        let moneySum = 0;

        this.state.mapConfig.map(async mapConfigObject => {
            if (
                mapConfigObject.money &&
                mapConfigObject.finishedBuildDays ===
                    mapConfigObject.durationBuildDays
            ) {
                console.log(["moneySum", moneySum, mapConfigObject]);
                moneySum += mapConfigObject.money;
            }
        });

        this.setState(prevState => ({
            money: prevState.money + moneySum
        }));
    };

    handleDayPassed = () => {
        this.setState({ daylight: false });
        console.log("handleDayPassed");
        this.handleIncrementFinishedBuildDays();
        this.handleMoneyEarning();
        this.setState({
            daysPassed: this.state.daysPassed + 1,
            date: moment(this.state.date, "YYYY/MM/DD")
                .add("days", 1)
                .format("yyyy/MM/dd")
        });

        setTimeout(() => {
            this.setState({ daylight: true });
        }, 1000);
    };

    componentDidMount = () => {
        this.setState({
            mapConfig: initialMapConfig,
            date: new Date("2000-01-01").toLocaleString()
        });
    };

    render() {
        const {
            zoomX,
            zoomY,
            date,
            money,
            population,
            initialZoomPosition,
            mapConfig,
            materials,
            societyHappiness,
            daysPassed,
            daylight
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
                        materials: materials,
                        initialZoomPosition: initialZoomPosition,
                        mapConfig: mapConfig,
                        societyHappiness: societyHappiness,
                        daysPassed: daysPassed,
                        handleDayPassed: this.handleDayPassed,
                        handleUpdateMapConfigItem: this
                            .handleUpdateMapConfigItem
                    }}
                >
                    {!daylight && <DaylightOverlay />}
                    <Map />
                    <BottomPanel />
                </GameContext.Provider>
            </div>
        );
    }
}

Game.contextType = MainContext;
export default Game;
