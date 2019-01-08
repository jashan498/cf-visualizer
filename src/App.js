import React, { Component } from "react";
import "./App.css";
import request from "./components/request";
import PieExample from "./components/langPie.jsx";
import BarExample from "./components/probBar.jsx";
import Verdict from "./components/verdictPie.jsx";
import DoughnutExample from "./components/tagsDoughnut.jsx";

class GetHandle extends Component {
  state = {
    submissions: []
  };

  async componentDidMount() {
    // const { data } = await axios.get(this.apiUrl + "no_life_");
    const submissions = await request();
    this.setState({ submissions });
  }

  // For Language Pie chart
  programLang = () => {
    const plang = this.state.submissions.map(p => p.programmingLanguage);
    // console.log(plang);
    let counts = {};
    for (let i = 0; i < plang.length; i++) {
      let num = plang[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    // console.log(counts);
    return counts;
  };

  // For Bar chart
  probIndex = () => {
    const submissions = this.state.submissions.filter(c => c.verdict === "OK");
    const pindex = submissions.map(p => p.problem.index);
    // console.log(pindex);
    let counts = {};
    for (let i = 0; i < pindex.length; i++) {
      let num = pindex[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    // console.log(counts);
    return counts;
  };

  // For Verdict Pie chart
  programVerdict = () => {
    const pverdict = this.state.submissions.map(p => p.verdict);
    // console.log(pverdict);
    let counts = {};
    for (let i = 0; i < pverdict.length; i++) {
      let num = pverdict[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    // console.log(counts);
    return counts;
  };

  // Tags for Doughnut
  programtags = () => {
    let tags = this.state.submissions.map(p => p.problem.tags);
    tags = [].concat.apply([], tags);
    // console.log(tags);
    let counts = {};
    for (let i = 0; i < tags.length; i++) {
      let num = tags[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    // console.log(counts);
    return counts;
  };

  render() {
    // return <PieExample data={this.programLang()} />;
    // return <BarExample data={this.probIndex()} />;
    return <Verdict data={this.programVerdict()} />;
    // return <DoughnutExample data={this.programtags()} />;
  }
}

export default GetHandle;
