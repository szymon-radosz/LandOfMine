type options = {
    id: number;
    name: string;
    icon: any;
    altIcon: string;
};

type optionsElement = {
    sidebarOption: string;
    name: string;
    value: string;
    freeHumanResources: number;
    population: number;
    money: number;
    materials: number;
    icon: any;
    desriptionHeader: string;
    finishedBuildDays: number;
    durationBuildDays: number;
    description: string;
    descriptionActionModal: string;
    cost: number;
    notAddedHumanResources: boolean;
};

interface ActionModalProps {}

interface ActionModalState {
    activeSidebarOption: string;
    sidebarOptions: options[];
    optionElements: optionsElement[];
}

export { ActionModalProps, ActionModalState };
