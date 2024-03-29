import React from "react";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";

export default function MonthlyLineGraphDemo(props) {
  //console.log(props.myData);
  const data = {
    datasets: [
      {
        label: "Temperature (degree)",
        //data: [...co2data].reverse(),
        data: props.ownData,
        borderColor: "rgba(245, 76, 222,96)",
        backgroundColor: "rgba(245, 76, 222, 0.5)",
        yAxisID: "Temperature",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Temperature",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Temperature",
      },
    },
  scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
      },
      yAxis: {
        type: "linear",
      },
    },
  };

  return (
    <div style={{ width: "1000px" }}>
      <h1>MonthlyGlobalLineGraph</h1>
      <Line options={options} data={data} />
    </div>
  );
}