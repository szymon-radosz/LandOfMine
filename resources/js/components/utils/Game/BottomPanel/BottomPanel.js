import React from "react";
import { GameContext } from "./../GameContext";
import { MainContext } from "./../../../MainContext";
import logo from "./../../../../../assets/images/LOM-white.png";
import translationsGame from "./../../../translations/translations-game.json"

const BottomPanel = ({ languages, activeLanguage, handleLanguageChange }) => {
    const gameContext = React.useContext(GameContext);
    const context = React.useContext(MainContext);

    return (
        <div className="bottom-panel-game__container">
            <div className="bottom-panel-game__element">
                <a onClick={() => context.handleChangePath("")}>
                    <img
                        className="bottom-panel-game--logo"
                        src={logo}

                    />
                </a>

                <div className="bottom-panel__language-list">
                    {languages && languages.length > 0 && languages.map((language, i) => {
                        return (
                            <a href="#" onClick={() => handleLanguageChange(language)}>
                                <p className={language === activeLanguage ?
                                    "bottom-panel__language" :
                                    "bottom-panel__language bottom-panel__language--inactive"
                                } key={`${language}-${i}`}
                                >{language}</p>
                            </a>

                        )
                    })}
                </div>
            </div>
            <div className="bottom-panel-game__element bottom-panel-game__element--middle">
                <p>
                    <strong>
                        {translationsGame &&
                            translationsGame.overalPopulation &&
                            translationsGame.overalPopulation[0][context.activeLanguage]
                        }
                    </strong>{" "}{gameContext &&
                        gameContext.population &&
                        gameContext.population}
                </p>
                <p>
                    <strong>
                        {translationsGame &&
                            translationsGame.freeHumanResources &&
                            translationsGame.freeHumanResources[0][context.activeLanguage]
                        }
                    </strong>{" "}{gameContext &&
                        gameContext.freeHumanResources &&
                        gameContext.freeHumanResources}
                </p>
                <p>
                    <strong>
                        {translationsGame &&
                            translationsGame.money &&
                            translationsGame.money[0][context.activeLanguage]
                        }
                    </strong>{" "}
                    <span data-cy="money-value">{`${gameContext &&
                        gameContext.money &&
                        gameContext.money}`}</span>
                </p>
                <p>
                    <strong>
                        {translationsGame &&
                            translationsGame.materials &&
                            translationsGame.materials[0][context.activeLanguage]
                        }
                    </strong>{" "}{gameContext &&
                        gameContext.materials &&
                        gameContext.materials}</p>
            </div>
            <div className="bottom-panel-game__element">
                <button className="bottom-panel__naxt-day--btn" onClick={gameContext.handleDayPassed}>
                    {translationsGame &&
                        translationsGame.nextDay &&
                        translationsGame.nextDay[0][context.activeLanguage]
                    }
                </button>
            </div>
        </div>
    );
};

export default BottomPanel;
