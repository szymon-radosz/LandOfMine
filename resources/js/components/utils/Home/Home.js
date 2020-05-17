import React from "react";
import Head from "./../../global/Head";
import Footer from "./../../global/Footer";
import SideOptions from "./SideOptions";
import Newsletter from "./Newsletter";
import aboutImg from "./../../../../assets/images/about.jpg?v=1";
import HomeFirstSection from "./HomeFirstSection/HomeFirstSection"
import translationsHome from "./../../translations/translations-home.json"
import { MainContext } from "./../../MainContext"

const Home = () => {
    const [activeSideOptionNumber, setActiveSideOptionNumber] = React.useState(1);
    const context = React.useContext(MainContext);

    return (
        <>
            <Head title="Land of mine - Build your own city" />

            <SideOptions activeSideOptionNumber={activeSideOptionNumber} />

            <HomeFirstSection />

            <div className="page__about-section--container">
                <div className="page__about-section--wrapper">
                    <div className="page__about-section--left">
                        <img src={aboutImg} />
                    </div>

                    <div className="page__about-section--right">
                        <h3>
                            {translationsHome &&
                                translationsHome.aboutHeader &&
                                translationsHome.aboutHeader[0][context.activeLanguage]
                            }
                        </h3>
                        <p>
                            {translationsHome &&
                                translationsHome.aboutText1 &&
                                translationsHome.aboutText1[0][context.activeLanguage]
                            }
                        </p>
                        <p>
                            {translationsHome &&
                                translationsHome.aboutText2 &&
                                translationsHome.aboutText2[0][context.activeLanguage]
                            }
                        </p>
                        <p>
                            {translationsHome &&
                                translationsHome.aboutText3 &&
                                translationsHome.aboutText3[0][context.activeLanguage]
                            }{" "}
                            <a
                                href="https://tech-bulb.com/"
                                title="Visit author website"
                                target="_blank"
                            >
                                Szymon Radosz
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>

            <Newsletter />

            <Footer />
        </>
    );
};

export default Home;
