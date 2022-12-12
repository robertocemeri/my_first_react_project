import React from "react";
import "./LoriChart.css";
import LoriChartBar from "./LoriChartBar";
const LoriChart = (props) => {
  console.log(props.dataPoints);
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <LoriChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default LoriChart;
