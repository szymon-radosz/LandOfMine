import React, { useContext, useState } from "react";
import Head from "./../../global/Head";
import Footer from "./../../global/Footer";
import { MainContext } from "./../../MainContext";
import Menu from "./../../global/Menu";
import SideOptions from "./../../global/SideOptions";
import aboutImg from "./../../../../assets/images/about.jpg";
import Newsletter from "./../../global/Newsletter";

const Home = () => {
    const context = useContext(MainContext);
    const [activeSideOptionNumber, setActiveSideOptionNumber] = useState(1);
    return (
        <>
            <Head title="Zdrowy Koszyk - darmowy skaner składu produktów" />

            <Menu forceSearchPath={false} />

            <SideOptions activeSideOptionNumber={activeSideOptionNumber} />

            <div className="page__main-section--container">
                <div className="page__main-section--wrapper">
                    <div className="page__main-section--content">
                        <div className="page__main-section--top">
                            <h1>Land of mine</h1>
                            <h2>Build your own city</h2>
                            <div
                                className="main-section__top--btn"
                                onClick={() =>
                                    context.handleChangePath("trial")
                                }
                            >
                                <p>Try free trial</p>
                            </div>
                        </div>
                        <a
                            href="https://www.freepik.com/free-photos-vectors/food"
                            target="_blank"
                        >
                            Food vector created by upklyak - www.freepik.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="page__about-section--container">
                <div className="page__about-section--wrapper">
                    <div className="page__about-section--left">
                        <img src={aboutImg} />
                    </div>

                    <div className="page__about-section--right">
                        <h3>About Game</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc a nibh nibh. Cras luctus magna tortor,
                            vitae efficitur ligula tempus ut. Proin et
                            pellentesque mi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc a nibh nibh. Cras luctus magna tortor,
                            vitae efficitur ligula tempus ut. Proin et
                            pellentesque mi.
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
