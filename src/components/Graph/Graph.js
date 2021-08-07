import React from 'react';
import PropTypes from 'prop-types';
import './Graph.css';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const data = {
  dataLine: {
    labels: ["Aug 7", "Aug 8", "Aug 9", "Aug 10", "Aug 11", "Aug 12", "Aug 13"],
    datasets: [
      {
        label: "My First dataset",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(100, 204,230, .3)",
        borderColor: "rgb(100, 204, 230)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [15, 25, 35, 55, 80, 35, 40]
      },
      {
        label: "My Second dataset",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(50,150,150, .3)",
        borderColor: "rgb(50, 150, 150)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 30, 80, 10, 56, 25, 40]
      },
      {
        label: "My Third dataset",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225,100,100, .3)",
        borderColor: "rgb(225,100, 100)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 20, 81, 15, 55, 40]
      },
      {
        label: "My Fourth dataset",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(184, 10, 210, .3)",
        borderColor: "rgb(184, 10, 210)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(35, 26, 136)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [28, 48, 40, 19, 86, 27, 90]
      },
      {
        label: "My Fifth dataset",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(35, 26, 10, .3)",
        borderColor: "rgb(35, 26, 10)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(35, 26, 136)",
        pointBackgroundColor: "rgb(255, 255, 0)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [90, 40, 48, 27, 19, 35, 90]
      }
    ]
  }
};
const Graph = () => (
  <div className="Graph" data-testid="Graph">
    <MDBContainer>
        <h3 className="mt-5">Campaign Dashboard</h3>
        <Line data={data.dataLine} options={{ responsive: true, plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart'
      }
    }}} />
      </MDBContainer>
  </div>
);

Graph.propTypes = {};

Graph.defaultProps = {};

export default Graph;
