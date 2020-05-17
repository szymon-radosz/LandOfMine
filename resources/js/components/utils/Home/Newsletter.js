import React from "react";
import { MainContext } from "./../../MainContext"
import translationsHome from "./../../translations/translations-home.json"

const Newsletter = () => {
    const context = React.useContext(MainContext);

    return (
        <div className="newsletter__container" id="newsletter">
            <div className="newsletter__wrapper">
                <h3>
                    {translationsHome &&
                        translationsHome.newsletterHeader &&
                        translationsHome.newsletterHeader[0][context.activeLanguage]
                    }
                </h3>
                <input
                    className="newsletter__email"
                    type="email"
                    placeholder={translationsHome &&
                        translationsHome.newsletterInputPlaceholder &&
                        translationsHome.newsletterInputPlaceholder[0][context.activeLanguage]
                    }
                />
                <div className="newsletter__btn">
                    <p>
                        {translationsHome &&
                            translationsHome.newsletterSubmit &&
                            translationsHome.newsletterSubmit[0][context.activeLanguage]
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
