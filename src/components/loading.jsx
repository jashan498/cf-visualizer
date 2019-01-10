import React, { Component } from "react";

class LoadingScreen extends Component {
  render() {
    if (!this.props.show) return null;
    return (
      <div className="lcontainer">
        <div className="item item-1" />
        <div className="item item-2" />
        <div className="item item-3" />
        <div className="item item-4" />
      </div>
    );
  }
}

export default LoadingScreen;
