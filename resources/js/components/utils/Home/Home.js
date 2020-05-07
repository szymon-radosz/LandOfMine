import React, { useContext, useState } from "react";
import Head from "./../../global/Head";
import Footer from "./../../global/Footer";
import Menu from "./../../global/Menu";
import SideOptions from "./../../global/SideOptions";
import Newsletter from "./../../global/Newsletter";
import aboutImg from "./../../../../assets/images/about.jpg?v=1";
import HomeFirstSection from "./HomeFirstSection/HomeFirstSection"

const Home = () => {
    const [activeSideOptionNumber, setActiveSideOptionNumber] = useState(1);
    return (
        <>
            <Head title="Land of mine - Build your own city" />

            {/* <Menu /> */}

            <SideOptions activeSideOptionNumber={activeSideOptionNumber} />

            <HomeFirstSection />

            <div className="page__about-section--container">
                <div className="page__about-section--wrapper">
                    <div className="page__about-section--left">
                        <img src={aboutImg} />
                    </div>

                    <div className="page__about-section--right">
                        <h3>About The Game</h3>
                        <p>
                            Land of mine is free city simulator working in your
                            browser to make that accessible from various devices
                            anytime when you're plugged in.
                        </p>
                        <p>
                            Build the city, manage and take decision to make
                            every day improvements. Build new necessary building
                            when you have appropierate amount of materials and
                            money. After going to the next day you will get new
                            resources which your city produces.
                        </p>
                        <p>
                            Land of mine is still trial project developed by{" "}
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
