import React, { Component } from "react";
import { GameContext } from "./../../GameContext";
import Sidebar from "./Sidebar/Sidebar";
import Options from "./Options/Options";

import close from "./../../../../../../assets/images/close.png";

/* buildings */
import houseBlue from "./../../../../../../assets/images/house-blue.png";
import houseGreen from "./../../../../../../assets/images/house-green.png";
import houseRed from "./../../../../../../assets/images/house-red.png";

import residenceGreen from "./../../../../../../assets/images/residence-green.png";
import residenceRed from "./../../../../../../assets/images/residence-red.png";
import residenceYellow from "./../../../../../../assets/images/residence-yellow.png";

import skyBuildingGreen from "./../../../../../../assets/images/sky-building-green.png";
import skyBuildingRed from "./../../../../../../assets/images/sky-building-red.png";
import skyBuildingYellow from "./../../../../../../assets/images/sky-building-yellow.png";

/* businesses */
import factory from "./../../../../../../assets/images/factory.png";
import autoService from "./../../../../../../assets/images/auto-service.png";
import bakery from "./../../../../../../assets/images/bakery.png";
import bookShop from "./../../../../../../assets/images/book-shop.png";
import clothingShop from "./../../../../../../assets/images/clothing-shop.png";
import drugStore from "./../../../../../../assets/images/drug-store.png";
import fruitShop from "./../../../../../../assets/images/fruit-shop.png";
import gasStation from "./../../../../../../assets/images/gas-station.png";
import giftShop from "./../../../../../../assets/images/gift-shop.png";
import musicShop from "./../../../../../../assets/images/music-shop.png";
import shoesShop from "./../../../../../../assets/images/shoes-shop.png";
import supermarket from "./../../../../../../assets/images/supermarket.png";

/* entertainment */
import coffeeShop from "./../../../../../../assets/images/coffee-shop.png";
import bar from "./../../../../../../assets/images/bar.png";
import fastFood from "./../../../../../../assets/images/fast-food.png";
import friedChicken from "./../../../../../../assets/images/fried-chicken.png";
import restaurant from "./../../../../../../assets/images/restaurant.png";
import stadium from "./../../../../../../assets/images/stadium.png";

class ActionModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSidebarOption: "All",
            sidebarOptions: [
                {
                    id: 0,
                    name: "All",
                    altIcon: "Icon made by Freepik from www.flaticon.com"
                },
                {
                    id: 1,
                    name: "Buildings",
                    altIcon: "Icon made by Freepik from www.flaticon.com"
                },
                {
                    id: 2,
                    name: "Businesses",
                    altIcon: "Icon made by Freepik from www.flaticon.com"
                },
                {
                    id: 3,
                    name: "Entertainment",
                    altIcon: "Icon made by Freepik from www.flaticon.com"
                }
            ],
            optionElements: [
                /* buildings */
                {
                    sidebarOption: "Buildings",
                    name: "House - Blue",
                    value: "house-blue",
                    freeHumanResources: 0,
                    population: 10,
                    money: 0,
                    materials: 100,
                    icon: houseBlue,
                    desriptionHeader: "House - Blue",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+10 Free Human Resources",
                    descriptionActionModal:
                        "+10 Free Human Resources\n -100 materials",
                    cost: 500000,
                    notAddedHumanResources: true,
                    haveImage: true
                },
                {
                    sidebarOption: "Buildings",
                    name: "House - Green",
                    value: "house-green",
                    freeHumanResources: 0,
                    population: 10,
                    money: 0,
                    materials: 100,
                    icon: houseGreen,
                    desriptionHeader: "House - Green",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+10 Free Human Resources",
                    descriptionActionModal:
                        "+10 Free Human Resources\n -100 materials",
                    cost: 500000,
                    notAddedHumanResources: true,
                    haveImage: true
                },
                {
                    sidebarOption: "Buildings",
                    name: "House - Red",
                    value: "house-red",
                    freeHumanResources: 0,
                    population: 10,
                    money: 0,
                    materials: 100,
                    icon: houseRed,
                    desriptionHeader: "House - Red",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+10 Free Human Resources",
                    descriptionActionModal:
                        "+10 Free Human Resources\n -100 materials",
                    cost: 500000,
                    notAddedHumanResources: true,
                    haveImage: true
                },
                {
                    sidebarOption: "Buildings",
                    name: "Residence - Green",
                    value: "residence-green",
                    freeHumanResources: 0,
                    population: 100,
                    money: 0,
                    materials: 200,
                    icon: residenceGreen,
                    desriptionHeader: "Residence - Green",
                    finishedBuildDays: 1,
                    durationBuildDays: 5,
                    description: "+100 Free Human Resources",
                    descriptionActionModal:
                        "+100 Free Human Resources\n -200 materials",
                    cost: 5000000,
                    notAddedHumanResources: true,
                    haveImage: true
                },
                {
                    sidebarOption: "Buildings",
                    name: "Residence - Red",
                    value: "residence-red",
                    freeHumanResources: 0,
                    population: 100,
                    money: 0,
                    materials: 200,
                    icon: residenceRed,
                    desriptionHeader: "Residence - Red",
                    finishedBuildDays: 1,
                    durationBuildDays: 5,
                    description: "+100 Free Human Resources",
                    descriptionActionModal:
                        "+100 Free Human Resources\n -200 materials",
                    cost: 5000000,
                    notAddedHumanResources: true,
                    haveImage: true
                },
                {
                    sidebarOption: "Buildings",
                    name: "Residence - Yellow",
                    value: "residence-yellow",
                    freeHumanResources: 0,
                    population: 100,
                    money: 0,
                    materials: 200,
                    icon: residenceYellow,
                    desriptionHeader: "Residence - Yellow",
                    finishedBuildDays: 1,
                    durationBuildDays: 5,
                    description: "+100 Free Human Resources",
                    descriptionActionModal:
                        "+100 Free Human Resources\n -200 materials",
                    cost: 5000000,
                    notAddedHumanResources: true,
                    haveImage: true
                },
                {
                    sidebarOption: "Buildings",
                    name: "Sky Building - Green",
                    value: "sky-building-green",
                    freeHumanResources: 0,
                    population: 1000,
                    money: 0,
                    materials: 300,
                    icon: skyBuildingGreen,
                    desriptionHeader: "Sky Building - Green",
                    finishedBuildDays: 1,
                    durationBuildDays: 7,
                    description: "+1000 Free Human Resources",
                    descriptionActionModal:
                        "+1000 Free Human Resources\n -300 materials",
                    cost: 50000000,
                    notAddedHumanResources: true,
                    haveImage: true
                },
                {
                    sidebarOption: "Buildings",
                    name: "Sky Building - Red",
                    value: "sky-building-red",
                    freeHumanResources: 0,
                    population: 1000,
                    money: 0,
                    materials: 300,
                    icon: skyBuildingRed,
                    desriptionHeader: "Sky Building - Red",
                    finishedBuildDays: 1,
                    durationBuildDays: 7,
                    description: "+1000 Free Human Resources",
                    descriptionActionModal:
                        "+1000 Free Human Resources\n -300 materials",
                    cost: 50000000,
                    notAddedHumanResources: true,
                    haveImage: true
                },
                {
                    sidebarOption: "Buildings",
                    name: "Sky Building - Yellow",
                    value: "sky-building-yellow",
                    freeHumanResources: 0,
                    population: 1000,
                    money: 0,
                    materials: 300,
                    icon: skyBuildingYellow,
                    desriptionHeader: "Sky Building - Yellow",
                    finishedBuildDays: 1,
                    durationBuildDays: 7,
                    description: "+1000 Free Human Resources",
                    descriptionActionModal:
                        "+1000 Free Human Resources\n -300 materials",
                    cost: 50000000,
                    notAddedHumanResources: true,
                    haveImage: true
                },

                /* businesses */
                {
                    sidebarOption: "Businesses",
                    name: "Factory",
                    value: "factory",
                    freeHumanResources: 1000,
                    population: 0,
                    money: 10000,
                    materials: 300,
                    icon: factory,
                    desriptionHeader: "Factory",
                    finishedBuildDays: 1,
                    durationBuildDays: 7,
                    description: "+50000 money everyday",
                    descriptionActionModal:
                        "+50000 money everyday\n -1000 human resources \n -200 materials",
                    cost: 30000000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Businesses",
                    name: "Auto Service",
                    value: "auto-service",
                    freeHumanResources: 100,
                    population: 0,
                    money: 5000,
                    materials: 50,
                    icon: autoService,
                    desriptionHeader: "Auto Service",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+5000 money everyday",
                    descriptionActionModal:
                        "+5000 money everyday\n -100 human resources \n -50 materials",
                    cost: 200000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Businesses",
                    name: "Bakery",
                    value: "bakery",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: bakery,
                    desriptionHeader: "Bakery",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Businesses",
                    name: "Book Shop",
                    value: "book-shop",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: bookShop,
                    desriptionHeader: "Book Shop",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Businesses",
                    name: "Clothing Shop",
                    value: "clothing-shop",
                    freeHumanResources: 80,
                    population: 0,
                    money: 5000,
                    materials: 40,
                    icon: clothingShop,
                    desriptionHeader: "Clothing Shop",
                    finishedBuildDays: 1,
                    durationBuildDays: 4,
                    description: "+5000 money everyday",
                    descriptionActionModal:
                        "+5000 money everyday\n -80 human resources \n -40 materials",
                    cost: 150000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Businesses",
                    name: "Drug Store",
                    value: "drug-store",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: drugStore,
                    desriptionHeader: "Drug Store",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Businesses",
                    name: "Fruit Shop",
                    value: "fruit-shop",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: fruitShop,
                    desriptionHeader: "Fruit Shop",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Businesses",
                    name: "Gas Station",
                    value: "gas-station",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: gasStation,
                    desriptionHeader: "Gas Station",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Businesses",
                    name: "Gift Shop",
                    value: "gift-shop",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: giftShop,
                    desriptionHeader: "Gift Shop",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Businesses",
                    name: "Music Shop",
                    value: "music-shop",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: musicShop,
                    desriptionHeader: "Music Shop",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Businesses",
                    name: "Shoes Shop",
                    value: "shoes-shop",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: shoesShop,
                    desriptionHeader: "Shoes Shop",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Businesses",
                    name: "Supermarket",
                    value: "supermarket",
                    freeHumanResources: 100,
                    population: 0,
                    money: 5000,
                    materials: 50,
                    icon: supermarket,
                    desriptionHeader: "Supermarket",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+5000 money everyday",
                    descriptionActionModal:
                        "+5000 money everyday\n -100 human resources \n -50 materials",
                    cost: 200000,
                    notAddedHumanResources: false,
                    haveImage: true
                },

                /* entertainment */
                {
                    sidebarOption: "Entertainment",
                    name: "Coffee Shop",
                    value: "coffee-shop",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: coffeeShop,
                    desriptionHeader: "Coffee Shop",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Entertainment",
                    name: "Bar",
                    value: "bar",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: bar,
                    desriptionHeader: "Bar",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Entertainment",
                    name: "Fast Food",
                    value: "fast-food",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: fastFood,
                    desriptionHeader: "Fast Food",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Entertainment",
                    name: "Fried Chicken",
                    value: "fried-chicken",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: friedChicken,
                    desriptionHeader: "Fried Chicken",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Entertainment",
                    name: "Restaurant",
                    value: "restaurant",
                    freeHumanResources: 50,
                    population: 0,
                    money: 3000,
                    materials: 30,
                    icon: restaurant,
                    desriptionHeader: "Restaurant",
                    finishedBuildDays: 1,
                    durationBuildDays: 3,
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true
                },
                {
                    sidebarOption: "Entertainment",
                    name: "Stadium",
                    value: "stadium",
                    freeHumanResources: 1000,
                    population: 0,
                    money: 10000,
                    materials: 300,
                    icon: stadium,
                    desriptionHeader: "Stadium",
                    finishedBuildDays: 1,
                    durationBuildDays: 7,
                    description: "+10000 money everyday",
                    descriptionActionModal:
                        "+50000 money everyday\n -1000 human resources \n -200 materials",
                    cost: 30000000,
                    notAddedHumanResources: false,
                    haveImage: true
                }
            ]
        };
    }

    handleSetActiveSidebarOption = (name) => {
        this.setState({ activeSidebarOption: name });
    };

    handleUpdateItem = (
        value,
        freeHumanResources,
        population,
        materials,
        money,
        desriptionHeader,
        descriptionContent,
        finishedBuildDays,
        durationBuildDays,
        notAddedHumanResources
    ) => {
        this.context.handleUpdateMapConfigItem(
            value,
            population,
            freeHumanResources,
            materials,
            money,
            desriptionHeader,
            descriptionContent,
            finishedBuildDays,
            durationBuildDays,
            notAddedHumanResources
        );
    };

    render() {
        const {
            sidebarOptions,
            activeSidebarOption,
            optionElements
        } = this.state;

        return (
            <div className="action-modal__container">
                <div
                    className="action-modal__close"
                    onClick={() => this.context.handleSetActionModal()}
                    title="Close"
                >
                    <img src={close} alt="Close" />
                </div>
                <Sidebar
                    options={sidebarOptions}
                    handleSetActiveSidebarOption={
                        this.handleSetActiveSidebarOption
                    }
                    activeSidebarOption={activeSidebarOption}
                />
                <Options
                    optionElements={optionElements}
                    activeSidebarOption={activeSidebarOption}
                    handleUpdateItem={this.handleUpdateItem}
                />
            </div>
        );
    }
}

ActionModal.contextType = GameContext;
export default ActionModal;
