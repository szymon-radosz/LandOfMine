import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AppComponent } from "../utils/styledComponents/AppComponent";
import { MainContext } from "./MainContext";
import history from "./History";
import Alert from "./utils/Alert/Alert";
import Home from "./utils/Home/Home";
import Game from "./utils/Game/Game";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            APP_URL: "http://127.0.0.1:8000",
            // APP_URL: "http://land-of-mine.com/",
            showLoader: false,
            alertMessage: "",
            alertStatus: "",
            allowedPaths: ["game"],
            allowRedirect: false,
            redirectedPath: "",
            languages: ["EN", "GE", "RU"],
            activeLanguage: "EN"
        };

        this.history = history;

        this.routes = [
            {
                path: "/game",
                name: "Game",
                Component: Game
            },
            {
                path: "/",
                name: "Home",
                Component: Home
            }
        ];
    }

    handleLanguageChange = (language) => {
        this.setState({ activeLanguage: language });
    };

    checkAllowedPath = (path) => {
        const allowedPaths = this.state.allowedPaths;

        if (allowedPaths.includes(path.split("/")[1])) {
            //console.log(["path", path, path.split("/")[1]]);
            return <Redirect to={path} />;
        } else {
            return <Redirect to="/" />;
        }
    };

    handleChangePath = (path) => {
        //console.log(["chandleChangePath", path]);
        const { allowedPaths, userLoggedIn } = this.state;

        if (!userLoggedIn) {
            if (allowedPaths.includes(path.split("/")[0])) {
                this.setState({ allowRedirect: true, redirectedPath: path });
            } else {
                this.setState({ allowRedirect: true, redirectedPath: "/" });
            }
        } else {
            this.history.push({ pathname: path, state: {} });
        }
    };

    handleShowAlert = (message, status) => {
        this.setState({ alertMessage: message, alertStatus: status });

        setTimeout(() => {
            this.setState({ alertMessage: "", alertStatus: "" });
        }, 4000);
    };

    handleShowLoader = (status) => {
        this.setState({ showLoader: status });
    };

    getUrlPathname = () => {
        return window.location.pathname;
    };

    render() {
        const {
            APP_URL,
            showLoader,
            alertMessage,
            alertStatus,
            allowRedirect,
            redirectedPath,
            languages,
            activeLanguage
        } = this.state;


        return (
            <MainContext.Provider
                value={{
                    handleChangePath: this.handleChangePath,
                    APP_URL: APP_URL,
                    showLoader: showLoader,
                    handleShowLoader: this.handleShowLoader,
                    handleShowAlert: this.handleShowAlert,
                    checkAllowedPath: this.checkAllowedPath,
                    handleLanguageChange: this.handleLanguageChange,
                    languages: languages,
                    activeLanguage: activeLanguage
                }}
            >
                {alertMessage && alertStatus && (
                    <Alert message={alertMessage} status={alertStatus} />
                )}

                <div className="container-sm app__container">
                    <AppComponent>
                        <Router history={history}>
                            {allowRedirect && redirectedPath && (
                                <Redirect to={redirectedPath} />
                            )}

                            <Switch>
                                {this.routes.map(
                                    ({ path, name, Component }) => {
                                        return (
                                            <Route
                                                exact
                                                key={`path-${name}`}
                                                path={path}
                                            >
                                                <Component />
                                            </Route>
                                        );
                                    }
                                )}
                            </Switch>
                        </Router>
                    </AppComponent>
                </div>
            </MainContext.Provider>
        );
    }
}

export default Main;
