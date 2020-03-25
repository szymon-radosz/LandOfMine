import React, { useContext } from "react";

const BottomPanel = () => {
    return (
        <div className="bottom-panel-game__container">
            <div className="bottom-panel-game__element">
                <p>23 March, 2020</p>
            </div>
            <div className="bottom-panel-game__element">
                <p>Population: 10000</p>
                <p>Money: 10000000</p>
            </div>
            <div className="bottom-panel-game__element">
                <div className="bottom-panel-game__action--btn">
                    <p>Action</p>
                </div>
            </div>
        </div>
    );
};

export default BottomPanel;
