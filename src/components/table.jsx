import React, { Component } from "react";

class Table extends Component {
  render() {
    // console.log("hey ", this.props.user);
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
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">Solved</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">Max attempts</th>
              <td>Larry</td>
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
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">Best Rank</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">Worst Rank</th>
              <td>Larry</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
