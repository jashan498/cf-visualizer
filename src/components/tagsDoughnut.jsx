import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const options = {
  legend: {
    position: "right"
  }
};

class DoughnutTags extends Component {
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
          "#b71c1c",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#0c6db3",
          "#4682B4",
          "#00FFFF",
          "#0099FF",
          "#3E3BF5",
          "#827717",
          "#3F51B5",
          "#8BC34A",
          "#F2317A"
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
    return data;
  };

  render() {
    return (
      <div style={{ position: "relative", height: "30vh", width: "50vw" }}>
        <Doughnut data={this.filterData()} options={options} />
      </div>
    );
  }
}

export default DoughnutTags;
