import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";


export default function LinearLineGraphDemo(props) {
  //console.log(props.myData);
  const data = {
    datasets: [
      {
        label: "Temperature (degree)",
        //data: [...co2data].reverse(),
        data: props.myData,
        borderColor: "#C22F29",
        backgroundColor: "#C22F29",
        yAxisID: "Temperature",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Temparature",
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
        text: "Yearly Temperature",
      },
    },
    scales: {
      Tempareture: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  return (
    <div style={{ width: "1000px" }}>
      <h1>AnnualGloabalLineGraph</h1>
      <Line options={options} data={data} />
    </div>
  );
}