import React from "react";

const TableLegend = ({ legends }) => {
    return (
        <div className="legend__container">
            {legends &&
                legends.map((legend, i) => {
                    return (
                        <div className="legend" key={legend.text}>
                            <div
                                className="legend-color__container"
                                style={{ backgroundColor: legend.color }}
                            ></div>
                            <p className="legend__text">{legend.text}</p>
                        </div>
                    );
                })}
        </div>
    );
};

export default TableLegend;
