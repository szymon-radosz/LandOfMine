import React, { useContext } from "react";
import { MainContext } from "./../../MainContext";

const SideOptions = ({ activeSideOptionNumber, setActiveSidebarOption }) => {
    const context = useContext(MainContext);

    return (
        <div className="side-options__container side-options__container--white-text">
            <div className="side-options__container--top">
                <a href="#main" onClick={() => setActiveSidebarOption(1)}>
                    <p
                        className={`${activeSideOptionNumber &&
                            activeSideOptionNumber === 1 &&
                            "active-text"}`}
                    >
                        01
                    </p>
                </a>
                <div className="side-options__divider--short"></div>
                <a href="#about" onClick={() => setActiveSidebarOption(2)}>
                    <p
                        className={`${activeSideOptionNumber &&
                            activeSideOptionNumber === 2 &&
                            "active-text"}`}
                    >
                        02
                    </p>
                </a>
                <div className="side-options__divider--short"></div>
                <a href="#newsletter" onClick={() => setActiveSidebarOption(3)}>
                    <p
                        className={`${activeSideOptionNumber &&
                            activeSideOptionNumber === 3 &&
                            "active-text"}`}
                    >
                        03
                    </p>
                </a>
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
