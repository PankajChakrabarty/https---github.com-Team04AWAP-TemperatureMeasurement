import React from "react";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";

export default function MixChartGraph(props) {
  //console.log(props.myData);
  const data = {
    datasets: [
        {
            label: "Global Annual",
            //data: [...co2data].reverse(),
            data: props.data1,
            borderColor: "#C22F29",
            backgroundColor: "#C22F29",
            yAxisID: "Temperature",
            parsing: {
              xAxisKey: "Time",
              yAxisKey: "Temparature",
            },
            pointRadius: 1,
          },
          {
            label: "Global Monthly",
            //data: [...co2data].reverse(),
            data: props.data2,
            borderColor: "rgba(245, 76, 222,96)",
            backgroundColor: "rgba(245, 76, 222, 0.5)",
            yAxisID: "Temperature",
            parsing: {
              xAxisKey: "Time",
              yAxisKey: "Temperature",
            },
            pointRadius: 1,
          }, 
          {
          label: "Nothern Hemisphere Anuual",
          //data: [...co2data].reverse(),
          data: props.data3,
          borderColor: "#825FFA",
          backgroundColor: "#825FFA",
          yAxisID: "Temperature",
          parsing: {
            xAxisKey: "Time",
            yAxisKey: "Temperature",
          },
          pointRadius: 1,
        },
        {
            label: "Nothern Hemisphere Monthly",
            //data: [...co2data].reverse(),
            data: props.data4,
            borderColor: "#2BFAD9",
            backgroundColor: "#2BFAD9",
            yAxisID: "Temperature",
            parsing: {
              xAxisKey: "Time",
              yAxisKey: "Temperature",
            },
            pointRadius: 1,
          },
          {
            label: "Southern Hemisphere Anuual",
            //data: [...co2data].reverse(),
            data: props.data5,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            yAxisID: "Temperature",
            parsing: {
              xAxisKey: "Time",
              yAxisKey: "Temperature",
            },
            pointRadius: 1,
          },
          {
            label: "Southern Hemisphere Monthly",
            //data: [...co2data].reverse(),
            data: props.data6,
            borderColor: "#B7FA42",
            backgroundColor: "#B7FA42",
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
        text: "Temperature Anomalies from 1850",
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
      <h1>MixGraph</h1>
      <Line options={options} data={data} />
    </div>
  );
}