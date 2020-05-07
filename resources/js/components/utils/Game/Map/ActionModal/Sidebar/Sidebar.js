import React from "react";

const Sidebar = ({
    options,
    handleSetActiveSidebarOption,
    activeSidebarOption
}) => {
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
