import React from "react";
import SideOptions from "../../../../../global/SideOptions";

type sidebarOptionType = {
    name: string;
    icon: any;
    altIcon: string;
};

type SidebarProps = {
    options: sidebarOptionType[];
    handleSetActiveSidebarOption: any;
    activeSidebarOption: string;
};

const Sidebar = ({
    options,
    handleSetActiveSidebarOption,
    activeSidebarOption
}: SidebarProps) => {
    return (
        <div className="action-modal__sidebar--container">
            {options &&
                options.map((option, i) => {
                    return (
                        <div
                            className={
                                option.name !== activeSidebarOption
                                    ? "sidebar__element opacity"
                                    : "sidebar__element"
                            }
                            key={`sidebar-element-${i}`}
                            onClick={() =>
                                handleSetActiveSidebarOption(option.name)
                            }
                        >
                            <img
                                src={option.icon}
                                alt={option.altIcon}
                                title={option.name}
                            />
                            <p
                                className={
                                    activeSidebarOption === option.name
                                        ? "bold"
                                        : ""
                                }
                            >
                                {option.name}
                            </p>
                        </div>
                    );
                })}
        </div>
    );
};

export default Sidebar;
