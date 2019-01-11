import React, { Component } from "react";

class Home extends Component {
  onClickPreventDefault = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return (
      <div className="ocontainer">
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={this.onClickPreventDefault}
        >
          <input
            type="text"
            placeholder="Search username..."
            onChange={e => this.props.onChange(e.currentTarget.value)}
          />
          <div className="search" />
        </form>
      </div>
    );
  }
}

export default Home;
