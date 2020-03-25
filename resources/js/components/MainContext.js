import React from "react";
export const MainContext = React.createContext({
    handleChangePath: path => {},
    handleShowSidebarText: () => {},
    handlAactiveMenuSection: text => {},
    handleShowLoader: status => {},
    handleShowAlert: (message, status) => {},
    setUserLoggedIn: status => {},
    setToken: token => {},
    handleLogout: () => {},
    checkTokenExpiration: err => {},
    userLoggedIn: false,
    showSidebarText: false,
    activeMenuSection: "",
    APP_URL: "",
    API_URL: "",
    showLoader: false,
    token: "",
    checkAllowedPath: (path) => {}
});
