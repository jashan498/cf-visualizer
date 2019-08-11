import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const options = {
  legend: {
    position: "right"
  }
};

class BarProblems extends Component {
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
        label: "Problem Type",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)"
      }
    ];
    return data;
  };

  render() {
    return (
      <div style={{ position: "relative", height: "30vh", width: "50vw" }}>
        <Bar data={this.filterData()} options={options} />
      </div>
    );
  }
}

export default BarProblems;
