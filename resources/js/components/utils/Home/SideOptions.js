import React, { useContext } from "react";
import { MainContext } from "./../../MainContext";

const SideOptions = ({ activeSideOptionNumber }) => {
    const context = useContext(MainContext);

    return (
        <div className="side-options__container side-options__container--white-text">
            <div className="side-options__container--top">
                <p
                    className={`${activeSideOptionNumber &&
                        activeSideOptionNumber === 1 &&
                        "active-text"}`}
                >
                    01
                </p>
                <div className="side-options__divider--short"></div>
                <p
                    className={`${activeSideOptionNumber &&
                        activeSideOptionNumber === 2 &&
                        "active-text"}`}
                >
                    02
                </p>
                <div className="side-options__divider--short"></div>
                <p
                    className={`${activeSideOptionNumber &&
                        activeSideOptionNumber === 3 &&
                        "active-text"}`}
                >
                    03
                </p>
            </div>
            <div className="side-options__divider--long"></div>
            <div className="side-options__container--bottom">
                {context.languages &&
                    context.languages.map((language, i) => {
                        if (i !== context.languages.length - 1) {
                            return (
                                <>
                                    <p
                                        className={`${context.activeLanguage &&
                                            context.activeLanguage ===
                                            language &&
                                            "active-text"}`}
                                        onClick={() =>
                                            context.handleLanguageChange(
                                                language
                                            )
                                        }
                                    >
                                        {language}
                                    </p>
                                    <div className="side-options__divider--short"></div>
                                </>
                            );
                        }
                        return (
                            <p
                                className={`${context.activeLanguage &&
                                    context.activeLanguage === language &&
                                    "active-text"}`}
                                onClick={() =>
                                    context.handleLanguageChange(language)
                                }
                            >
                                {language}
                            </p>
                        );
                    })}
            </div>
        </div>
    );
};

export default SideOptions;
