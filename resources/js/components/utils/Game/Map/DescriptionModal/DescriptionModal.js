import React from "react";
import { GameContext } from "./../../GameContext"
import close from "./../../../../../../assets/images/close.png";

const DescriptionModal = () => {
    const context = React.useContext(GameContext);

    return (
        <div className="action-modal__container">
            <div
                className="action-modal__close"
                onClick={() => context.handleSetDescriptionModal()}
                title="Close"
            >
                <img src={close} alt="Close" />
            </div>
            <div className="modal__content">
                <p className="modal__content--header">{context.activeDescriptionHeader && context.activeDescriptionHeader}</p>
                <p className="modal__content--description">{context.activeDescriptionContent && context.activeDescriptionContent}</p>
            </div>
        </div>
    )

}

export default DescriptionModal;