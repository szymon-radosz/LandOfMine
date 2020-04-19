import React from "react";
import { Helmet } from "react-helmet";
// import favicon from "./../../../assets/images/favicon.png"

const Head = ({ title }) => {
    return (
        //@ts-ignore
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="author" content="Szymon Radosz" />
            <meta
                name="description"
                content="Land Of Mine - Build Your Own City"
            />
            <meta
                name="keywords"
                content="game, citites, gaming, web browser game"
            />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <title>{title}</title>

            <link
                href="https://fonts.googleapis.com/css?family=Nunito:200,600"
                rel="stylesheet"
                type="text/css"
            />
            {/* <link rel="shortcut icon" src={favicon}/> */}

            <link rel="stylesheet" href="/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/style.css" />
            <link rel="stylesheet" href="/css/responsive.css" />
        </Helmet>
    );
};

export default Head;
