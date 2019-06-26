import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Table from "./components/table";
import request from "./components/request";
import NavBar from "./components/navBar";
import PieLang from "./components/langPie";
import BarProblems from "./components/probBar";
import PieVerdict from "./components/verdictPie";
import DoughnutTags from "./components/tagsDoughnut";
import SubNav from "./components/subNav";
import LoadingScreen from "./components/loading";
import { ToastContainer, toast } from "react-toastify";

class GetHandle extends Component {
  state = {
    userName: "",
    tuser: "",
    submissions: [],
    contests: [],
    userInfo: [],
    show: false,
    otherRoutes: false
  };

  // For Bar chart
  getUnsolvedProblems = () => {
    const submissions = this.state.submissions
      .filter(c => c.verdict !== "OK")
      .map(c => c.id);
    console.log(submissions);
    return submissions;
  };

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

  onChange = e => {
    this.setState({ tuser: e });
    // console.log(this.state);
  };

  onSubmit = async () => {
    // e.preventDefault();
    // console.log(this.state);
    this.setState({ show: true });
    try {
      const rData = await request(this.state.tuser);
      // console.log(rData[1])
      this.setState({
        submissions: rData[0],
        contests: rData[1],
        userInfo: rData[2],
        userName: this.state.tuser,
        show: false,
        otherRoutes: true
      });
      // console.log(this.state);
    } catch (ex) {
      // this.history.pushState(null, "lang");
      // console.log(this.state);
      this.setState({ show: false });
      // console.log(ex);
      if (ex.message === "Network Error") toast.error("Invalid Username");
    }
  };

  otherRoutes = () => {
    if (!this.state.otherRoutes) return null;
    // console.log("other ", this.state.userName);
    return (
      <div className="row above">
        <div className="col-md-4 col-xs-12 alig">
          <Table
            user={this.state.userName}
            submissions={this.state.submissions}
            contests={this.state.contests}
            userInfo={this.state.userInfo}
          />
        </div>
        <div className="col-md-8 col-xs-12">
          <SubNav />
          <Switch>
            <Route
              path="/lang"
              render={() => <PieLang data={this.programLang()} />}
            />
            <Route
              path="/category"
              render={() => <BarProblems data={this.probIndex()} />}
            />
            <Route
              path="/verdict"
              render={() => <PieVerdict data={this.programVerdict()} />}
            />
            <Route
              path="/tags"
              render={() => <DoughnutTags data={this.programtags()} />}
            />
          </Switch>
        </div>
      </div>
    );
  };

  redirectFromHome = () => {
    if (this.state.otherRoutes) return <Redirect from="/" to="/lang" />;
  };

  renderNavBar = () => {
    if (this.state.otherRoutes)
      return <NavBar onChange={this.onChange} onSubmit={this.onSubmit} />;
    else
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a
            className="navbar-brand"
            href="https://jashan498.github.io/cf-visualizer"
          >
            CodeForces Visualizer
          </a>
          <a
            href="https://github.com/jashan498/cf-visualizer"
            className="ml-auto"
          >
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              {" "}
              Code
            </button>
          </a>
        </nav>
      );
  };

  render() {
    if (this.state.show)
      return (
        <div>
          {this.renderNavBar()}
          <div className="container lmar">
            <LoadingScreen show={this.state.show} />
          </div>
        </div>
      );
    return (
      <div>
        {this.renderNavBar()}
        <div className="container lmar">
          <ToastContainer />
          <Route
            path="/"
            exact
            render={() => (
              <Home onChange={this.onChange} onSubmit={this.onSubmit} />
            )}
          />
          {this.redirectFromHome()}
          {this.otherRoutes()}
        </div>
      </div>
    );
  }
}

export default GetHandle;
