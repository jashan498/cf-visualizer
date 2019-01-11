import React, { Component } from "react";

function mode(array)
{
    if(array.length === 0)
        return null;
    let modeMap = {};
    let maxCount = 1;
    for(let i = 0; i < array.length; i++)
    {
        let el = array[i];
        if(!modeMap[el])
            modeMap[el] = 1;
        else
            modeMap[el]++;  

        if(modeMap[el] > maxCount)
            maxCount = modeMap[el];

    }
    return maxCount;
}

class Table extends Component {

  getT1Data = () => {
    const sub = this.props.submissions;
    const totalSub = [...new Set(sub.map(c=>c.problem.name))].length;
    const unsolved = [...sub.filter(c=>c.verdict!=="OK")];
    const solved = [...sub.filter(c=>c.verdict==="OK").map(c=>c.contestId)];

    return [totalSub, sub.length-unsolved.length, mode(solved)]
  }

  getT2Data = () => {
    const contests = this.props.contests;
    // const totalCont = contests.length;
    const ranks = contests.map(c=>c.rank);
    return [contests.length, Math.min.apply(null, ranks), Math.max.apply(null, ranks)]
  }

  render() {
    // console.log("hey ", this.props.submissions);
    const t1 = this.getT1Data();
    // const {t1} = this.state;
    const t2 = this.getT2Data();
    return (
      <div className="table-responsive tcontainer">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Some numbers about</th>
              <th scope="col">{this.props.user}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Tried</th>
              <td>{t1[0]}</td>
            </tr>
            <tr>
              <th scope="row">Solved</th>
              <td>{t1[1]}</td>
            </tr>
            <tr>
              <th scope="row">Max attempts</th>
              <td>{t1[2]}</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Contests of</th>
              <th scope="col">{this.props.user}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Number of contests</th>
              <td>{t2[0]}</td>
            </tr>
            <tr>
              <th scope="row">Best Rank</th>
              <td>{t2[1]}</td>
            </tr>
            <tr>
              <th scope="row">Worst Rank</th>
              <td>{t2[2]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
