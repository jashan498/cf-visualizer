import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

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

class PieExample extends Component {
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
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ];
    return data;
  };

  render() {
    return (
      <div>
        <h2>Languages Used</h2>
        <Pie data={this.filterData()} />
      </div>
    );
  }
}

export default PieExample;
