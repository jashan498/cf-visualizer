import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

// const data = {
//   labels: ["Red", "Green", "Yellow"],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//       hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
//     }
//   ]
// };

class DoughnutExample extends Component {
  state = {
    data: []
  };

  filterData = () => {
    const sub = this.props.data;
    const keys = [];
    const values = [];
    for (let v in sub) {
      keys.push(v);
      values.push(sub[v]);
    }
    let data = {};
    data.labels = keys.slice();
    data.datasets = [
      {
        data: values.slice(),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#43A19E",
          "#7B43A1",
          "#F2317A",
          "#FF9824",
          "#58CF6C",
          "#8BC34A",
          "#CDDC39",
          "#FFC107",
          "#FF9800",
          "#FF5722",
          "#795548",
          "#607D8B",
          "#E65100",
          "#827717",
          "#004D40",
          "#1A237E",
          "#6200EA",
          "#3F51B5",
          "#F50057",
          "#304FFE",
          "#b71c1c"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#0c6db3",
          "#4682B4",
          "#00FFFF",
          "#0099FF",
          "#3E3BF5"
        ]
      }
    ];
    console.log(data);
    return data;
  };

  render() {
    return (
      <div>
        <h2>Languages Used</h2>
        <Doughnut data={this.filterData()} />
      </div>
    );
  }
}

export default DoughnutExample;
