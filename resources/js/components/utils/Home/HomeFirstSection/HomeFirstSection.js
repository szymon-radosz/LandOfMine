import React, { Component } from "react";
import { MainContext } from "./../../../MainContext";

class HomeFirstSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: 0,
            showProgressPrecentage: false
        }
    }

    componentDidMount = () => {
        this.intervalId = setInterval(this.timer, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalId);
    }

    timer = () => {
        this.setState({
            currentCount: this.state.currentCount + 20
        })
        if (this.state.currentCount === 100) {
            clearInterval(this.intervalId);
            this.setState({ showProgressPrecentage: true })
        }
    }

    render() {
        const { showProgressPrecentage, currentCount } = this.state;
        const { loadScreen } = this.props;

        return (
            <div className={`page__main-section--container ${loadScreen && "page__main-section--loading"}`}>
                <div className="page__main-section--wrapper">
                    <div className="page__main-section--content">
                        <div className="page__main-section--top">
                            <h1>Land of mine</h1>
                            <h2>Build your own city</h2>
                            {!loadScreen && <div
                                className="main-section__top--btn"
                                onClick={() => this.context.handleChangePath("game")}
                            >
                                <p>Try now</p>
                            </div>}
                            {loadScreen && <div className="map-loader__container">
                                <div className="map-loader__bar" style={{ width: `calc(${currentCount}% - 4px)` }}></div>
                                <p>{!showProgressPrecentage ? `${currentCount} %` : "GET STARTED"}</p>
                            </div>}
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
        );
    }
}
HomeFirstSection.contextType = MainContext;
export default HomeFirstSection;