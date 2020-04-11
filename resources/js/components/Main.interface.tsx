interface MainProps {}

interface MainState {
    userLoggedIn: boolean;
    showSidebarText: boolean;
    activeMenuSection: string;
    APP_URL: string;
    API_URL: string;
    showLoader: boolean;
    alertMessage: string;
    alertStatus: string;
    token: string;
    allowedPaths: string[];
    allowRedirect: boolean;
    redirectedPath: string;
    languages: string[];
    activeLanguage: string;
}

export { MainProps, MainState };
