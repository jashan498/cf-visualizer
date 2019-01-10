import React from "react";
import { Link } from "react-router-dom";

const onClickPreventDefault = e => {
  e.preventDefault();
};

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        CodeForces Visualizer
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={onClickPreventDefault}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search username"
            onChange={e => props.onChange(e.currentTarget.value)}
          />
          <Link to="/lang">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={props.onSubmit}
            >
              Search
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
