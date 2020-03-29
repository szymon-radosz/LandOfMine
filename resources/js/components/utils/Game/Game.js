import React, { Component } from "react";
import BottomPanel from "./BottomPanel/BottomPanel";
import Map from "./Map/Map";
import { GameContext } from "./GameContext";
import { MainContext } from "./../../MainContext";
import initialMapConfig from "./mapConfig";

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
            mapConfig: initialMapConfig
        };
    }

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

    componentDidMount = () => {
        this.setState({ date: new Date("2000-01-01").toLocaleString() });
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
            societyHappiness
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
                        societyHappiness: societyHappiness
                    }}
                >
                    <Map />
                    <BottomPanel />
                </GameContext.Provider>
            </div>
        );
    }
}

Game.contextType = MainContext;
export default Game;
