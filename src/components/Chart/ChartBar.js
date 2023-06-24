import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
    let height = Math.round(props.value / props.maxValue * 100);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:height}}></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
}

export default ChartBar;
