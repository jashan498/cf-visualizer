import React, { Component } from "react";
import "./App.css";
import request from "./components/request";
import PieExample from "./components/pie.jsx";

class GetHandle extends Component {
  state = {
    submissions: []
  };

  async componentDidMount() {
    // const { data } = await axios.get(this.apiUrl + "no_life_");
    const submissions = await request();
    this.setState({ submissions });
  }

  programLang = () => {
    const pindex = this.state.submissions.map(p => p.programmingLanguage);
    // console.log(pindex);
    let counts = {};
    for (let i = 0; i < pindex.length; i++) {
      let num = pindex[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    // console.log(counts);
    return counts;
  };

  render() {
    return <PieExample data={this.programLang()} />;
  }
}

export default GetHandle;
