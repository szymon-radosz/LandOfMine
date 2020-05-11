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

class ActionModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
                    description: "+10 Free Human Resources",
                    descriptionActionModal:
                        "+10 Free Human Resources\n -100 materials",
                    cost: 500000,
                    notAddedHumanResources: true,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description: "+10 Free Human Resources",
                    descriptionActionModal:
                        "+10 Free Human Resources\n -100 materials",
                    cost: 500000,
                    notAddedHumanResources: true,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description: "+10 Free Human Resources",
                    descriptionActionModal:
                        "+10 Free Human Resources\n -100 materials",
                    cost: 500000,
                    notAddedHumanResources: true,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description: "+100 Free Human Resources",
                    descriptionActionModal:
                        "+100 Free Human Resources\n -200 materials",
                    cost: 5000000,
                    notAddedHumanResources: true,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description: "+100 Free Human Resources",
                    descriptionActionModal:
                        "+100 Free Human Resources\n -200 materials",
                    cost: 5000000,
                    notAddedHumanResources: true,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description: "+100 Free Human Resources",
                    descriptionActionModal:
                        "+100 Free Human Resources\n -200 materials",
                    cost: 5000000,
                    notAddedHumanResources: true,
                    haveImage: true,
                    scaleParam: 0.001
                },
                // {
                //     sidebarOption: "Buildings",
                //     name: "Sky Building - Green",
                //     value: "sky-building-green",
                //     freeHumanResources: 0,
                //     population: 1000,
                //     money: 0,
                //     materials: 300,
                //     icon: skyBuildingGreen,
                //     desriptionHeader: "Sky Building - Green",
                //     description: "+1000 Free Human Resources",
                //     descriptionActionModal:
                //         "+1000 Free Human Resources\n -300 materials",
                //     cost: 50000000,
                //     notAddedHumanResources: true,
                //     haveImage: true
                // },
                // {
                //     sidebarOption: "Buildings",
                //     name: "Sky Building - Red",
                //     value: "sky-building-red",
                //     freeHumanResources: 0,
                //     population: 1000,
                //     money: 0,
                //     materials: 300,
                //     icon: skyBuildingRed,
                //     desriptionHeader: "Sky Building - Red",
                //     description: "+1000 Free Human Resources",
                //     descriptionActionModal:
                //         "+1000 Free Human Resources\n -300 materials",
                //     cost: 50000000,
                //     notAddedHumanResources: true,
                //     haveImage: true
                // },
                // {
                //     sidebarOption: "Buildings",
                //     name: "Sky Building - Yellow",
                //     value: "sky-building-yellow",
                //     freeHumanResources: 0,
                //     population: 1000,
                //     money: 0,
                //     materials: 300,
                //     icon: skyBuildingYellow,
                //     desriptionHeader: "Sky Building - Yellow",
                //     description: "+1000 Free Human Resources",
                //     descriptionActionModal:
                //         "+1000 Free Human Resources\n -300 materials",
                //     cost: 50000000,
                //     notAddedHumanResources: true,
                //     haveImage: true
                // },

                /* businesses */
                // {
                //     sidebarOption: "Businesses",
                //     name: "Factory",
                //     value: "factory",
                //     freeHumanResources: 1000,
                //     population: 0,
                //     money: 10000,
                //     materials: 300,
                //     icon: factory,
                //     desriptionHeader: "Factory",
                //     description: "+50000 money everyday",
                //     descriptionActionModal:
                //         "+50000 money everyday\n -1000 human resources \n -200 materials",
                //     cost: 30000000,
                //     notAddedHumanResources: false,
                //     haveImage: true
                // },
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
                    description: "+5000 money everyday",
                    descriptionActionModal:
                        "+5000 money everyday\n -100 human resources \n -50 materials",
                    cost: 200000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description: "+5000 money everyday",
                    descriptionActionModal:
                        "+5000 money everyday\n -80 human resources \n -40 materials",
                    cost: 150000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.001
                },
                // {
                //     sidebarOption: "Businesses",
                //     name: "Fruit Shop",
                //     value: "fruit-shop",
                //     freeHumanResources: 50,
                //     population: 0,
                //     money: 3000,
                //     materials: 30,
                //     icon: fruitShop,
                //     desriptionHeader: "Fruit Shop",
                //     description: "+3000 money everyday",
                //     descriptionActionModal:
                //         "+3000 money everyday\n -50 human resources \n -30 materials",
                //     cost: 100000,
                //     notAddedHumanResources: false,
                //     haveImage: true,
                //     scaleParam: 0.001
                // },
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.0007
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.0011
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.0012
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
                    description: "+5000 money everyday",
                    descriptionActionModal:
                        "+5000 money everyday\n -100 human resources \n -50 materials",
                    cost: 200000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.0007
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.0008
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.0012
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.0012
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.0011
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
                    description: "+3000 money everyday",
                    descriptionActionModal:
                        "+3000 money everyday\n -50 human resources \n -30 materials",
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.002
                }
            ]
        };
    }


    render() {
        const {
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
                <Options
                    optionElements={optionElements}
                />
            </div>
        );
    }
}

ActionModal.contextType = GameContext;
export default ActionModal;
