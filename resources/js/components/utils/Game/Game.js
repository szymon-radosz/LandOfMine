import React, { Component } from "react";
import BottomPanel from "./BottomPanel/BottomPanel";
import Map from "./Map/Map";
import { GameContext } from "./GameContext";
import { MainContext } from "./../../MainContext";

class Game extends Component {
    constructor(props) {
        super(props);

        //initially we create reactange of recteangles 10x6
        this.state = {
            zoomX: 10,
            zoomY: 6
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

    render() {
        const { zoomX, zoomY } = this.state;
        return (
            <div className="game__container">
                <GameContext.Provider
                    value={{
                        zoomX: zoomX,
                        zoomY: zoomY,
                        handleZoomChange: this.handleZoomChange
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
