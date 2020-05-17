import React, { Component } from "react";
import { GameContext } from "./../../GameContext";
import Options from "./Options/Options";

import translationsGame from "./../../../../translations/translations-game.json"

import close from "./../../../../../../assets/images/close.png";

/* buildings */
import houseBlue from "./../../../../../../assets/images/house-blue.png";
import houseGreen from "./../../../../../../assets/images/house-green.png";
import houseRed from "./../../../../../../assets/images/house-red.png";

import residenceGreen from "./../../../../../../assets/images/residence-green.png";
import residenceRed from "./../../../../../../assets/images/residence-red.png";
import residenceYellow from "./../../../../../../assets/images/residence-yellow.png";

/* businesses */
import autoService from "./../../../../../../assets/images/auto-service.png";
import bakery from "./../../../../../../assets/images/bakery.png";
import bookShop from "./../../../../../../assets/images/book-shop.png";
import clothingShop from "./../../../../../../assets/images/clothing-shop.png";
import drugStore from "./../../../../../../assets/images/drug-store.png";
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
            optionElements: []
        };
    }

    componentDidMount = () => {
        this.setState({
            optionElements: [
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
                    description:
                        [
                            {
                                "EN": `+10 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["EN"]
                                    }`,
                                "GE": `+10 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["GE"]
                                    }`,
                                "RU": `+10 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+10 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -100 ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+10 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["EN"]
                                    }`,
                                "GE": `+10 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["GE"]
                                    }`,
                                "RU": `+10 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+10 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -100 ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+10 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["EN"]
                                    }`,
                                "GE": `+10 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["GE"]
                                    }`,
                                "RU": `+10 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+10 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -100 ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+100 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["EN"]
                                    }`,
                                "GE": `+100 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["GE"]
                                    }`,
                                "RU": `+100 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+100 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -200 ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+100 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["EN"]
                                    }`,
                                "GE": `+100 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["GE"]
                                    }`,
                                "RU": `+100 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+100 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -200 ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+100 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["EN"]
                                    }`,
                                "GE": `+100 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["GE"]
                                    }`,
                                "RU": `+100 ${translationsGame &&
                                    translationsGame.freeHumanResources &&
                                    translationsGame.freeHumanResources[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+100 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -200 ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
                    cost: 5000000,
                    notAddedHumanResources: true,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description:
                        [
                            {
                                "EN": `+5000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+5000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+5000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+5000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -100 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        } \n -50 ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        } \n -30 ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -30 ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+5000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+5000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+5000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+5000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -80 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -40 ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -30  ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.001
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
                    description:
                        [
                            {
                                "EN": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -30  ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -30  ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -30  ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -30  ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+5000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+5000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+5000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+5000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -100 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -50  ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -30  ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -30  ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -30  ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description:
                        [
                            {
                                "EN": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["EN"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["EN"]
                                    }`,
                                "GE": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["GE"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["GE"]
                                    }`,
                                "RU": `+3000 ${translationsGame &&
                                    translationsGame.money &&
                                    translationsGame.money[0]["RU"]
                                    } ${translationsGame &&
                                    translationsGame.everyday &&
                                    translationsGame.everyday[0]["RU"]
                                    }`
                            }
                        ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -30  ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
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
                    description: [
                        {
                            "EN": `+3000 ${translationsGame &&
                                translationsGame.money &&
                                translationsGame.money[0]["EN"]
                                } ${translationsGame &&
                                translationsGame.everyday &&
                                translationsGame.everyday[0]["EN"]
                                }`,
                            "GE": `+3000 ${translationsGame &&
                                translationsGame.money &&
                                translationsGame.money[0]["GE"]
                                } ${translationsGame &&
                                translationsGame.everyday &&
                                translationsGame.everyday[0]["GE"]
                                }`,
                            "RU": `+3000 ${translationsGame &&
                                translationsGame.money &&
                                translationsGame.money[0]["RU"]
                                } ${translationsGame &&
                                translationsGame.everyday &&
                                translationsGame.everyday[0]["RU"]
                                }`
                        }
                    ],
                    descriptionActionModal:
                        `+3000 ${translationsGame &&
                        translationsGame.money &&
                        translationsGame.money[0][this.context.activeLanguage]
                        } ${translationsGame &&
                        translationsGame.everyday &&
                        translationsGame.everyday[0][this.context.activeLanguage]
                        }\n -50 ${translationsGame &&
                        translationsGame.freeHumanResources &&
                        translationsGame.freeHumanResources[0][this.context.activeLanguage]
                        }\n -30  ${translationsGame &&
                        translationsGame.materials &&
                        translationsGame.materials[0][this.context.activeLanguage]
                        }`,
                    cost: 100000,
                    notAddedHumanResources: false,
                    haveImage: true,
                    scaleParam: 0.002
                }]
        })
    }


    render() {
        const {
            optionElements
        } = this.state;

        return (
            <div className="action-modal__container">
                <div
                    className="action-modal__close"
                    onClick={this.context.handleSetActionModal}
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
