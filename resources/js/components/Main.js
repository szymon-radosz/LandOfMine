import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AppComponent } from "./../utils/styledComponents/AppComponent";
import Dashboard from "./utils/Dashboard/Dashboard";
import Login from "./utils/Login/Login";
import { MainContext } from "./MainContext";
import history from "./History";
import Alert from "./utils/Alert/Alert";
import RegisterAdmin from "./utils/RegisterAdmin/RegisterAdmin";
import Home from "./utils/Home/Home";
import Game from "./utils/Game/Game";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userLoggedIn: false,
            showSidebarText: false,
            activeMenuSection: "",
            APP_URL: "http://127.0.0.1:8000",
            API_URL: "http://127.0.0.1:8000/api/",
            showLoader: false,
            alertMessage: "",
            alertStatus: "",
            token: "",
            allowedPaths: ["trial"],
            allowRedirect: false,
            redirectedPath: "",
            languages: ["RU", "GE", "EN"],
            activeLanguage: "EN"
        };

        this.history = history;

        this.routes = [
            {
                path: "/dashboard",
                name: "Dashboard",
                Component: Dashboard
            },
            {
                path: "/login",
                name: "Login",
                Component: Login
            },
            {
                path: "/register",
                name: "RegisterAdmin",
                Component: RegisterAdmin
            },
            {
                path: "/trial",
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

    handleLanguageChange = language => {
        this.setState({ activeLanguage: language });
    };

    checkAllowedPath = path => {
        const allowedPaths = this.state.allowedPaths;

        if (allowedPaths.includes(path.split("/")[1])) {
            //console.log(["path", path, path.split("/")[1]]);
            return <Redirect to={path} />;
        } else {
            return <Redirect to="/" />;
        }
    };

    setToken = token => {
        this.setState({ token });
    };

    setUserLoggedIn = status => {
        this.setState({ userLoggedIn: status });
    };

    handleLogout = () => {
        localStorage.clear();
        this.setState({ userLoggedIn: false });
    };

    handleShowAlert = (message, status) => {
        this.setState({ alertMessage: message, alertStatus: status });

        setTimeout(() => {
            this.setState({ alertMessage: "", alertStatus: "" });
        }, 4000);
    };

    handleShowLoader = status => {
        this.setState({ showLoader: status });
    };

    handleShowSidebarText = () => {
        this.setState({ showSidebarText: !this.state.showSidebarText });
    };

    handlAactiveMenuSection = text => {
        this.setState({ activeMenuSection: text });
    };

    handleChangePath = path => {
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

    checkTokenExpiration = status => {
        if (status === 401) {
            this.handleShowAlert("Token invalid", "danger");
            this.handleLogout();
        }
    };

    componentDidMount = () => {
        if (localStorage.getItem("token")) {
            this.setState({
                token: localStorage.getItem("token"),
                userLoggedIn: true
            });
        }
    };

    getUrlPathname = () => {
        return window.location.pathname;
    };

    render() {
        const {
            userLoggedIn,
            showSidebarText,
            activeMenuSection,
            API_URL,
            APP_URL,
            showLoader,
            alertMessage,
            alertStatus,
            token,
            allowRedirect,
            redirectedPath,
            languages,
            activeLanguage
        } = this.state;

        const lastUrlSegment = this.getUrlPathname();
        //console.log(["lastUrlSegment", lastUrlSegment]);

        return (
            <MainContext.Provider
                value={{
                    handleChangePath: this.handleChangePath,
                    userLoggedIn: userLoggedIn,
                    showSidebarText: showSidebarText,
                    handleShowSidebarText: this.handleShowSidebarText,
                    activeMenuSection: activeMenuSection,
                    handlAactiveMenuSection: this.handlAactiveMenuSection,
                    API_URL: API_URL,
                    APP_URL: APP_URL,
                    showLoader: showLoader,
                    handleShowLoader: this.handleShowLoader,
                    handleShowAlert: this.handleShowAlert,
                    setUserLoggedIn: this.setUserLoggedIn,
                    token: token,
                    setToken: this.setToken,
                    handleLogout: this.handleLogout,
                    checkTokenExpiration: this.checkTokenExpiration,
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
                            {userLoggedIn && token ? (
                                <Redirect to="dashboard" />
                            ) : (
                                this.checkAllowedPath(lastUrlSegment)
                            )}

                            {allowRedirect && redirectedPath && (
                                <Redirect to={redirectedPath} />
                            )}

                            <Switch>
                                {this.routes.map(
                                    ({ path, name, Component }) => {
                                        return (
                                            <Route exact key={name} path={path}>
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
