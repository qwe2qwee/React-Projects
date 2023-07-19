import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {props.dataPoints.map((d) => (
        <ChartBar
          key={d.label}
          value={d.value}
          maxValue={totalMaximum}
          label={d.label}
        />
      ))}
    </div>
  );
};

export default Chart;
