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
import { withRouter } from "react-router-dom";

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
    let counts = {};
    for (let i = 0; i < pindex.length; i++) {
      let num = pindex[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts;
  };

  // For Verdict Pie chart
  programVerdict = () => {
    const pverdict = this.state.submissions.map(p => p.verdict);
    let counts = {};
    for (let i = 0; i < pverdict.length; i++) {
      let num = pverdict[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts;
  };

  // Tags for Doughnut
  programtags = () => {
    let tags = this.state.submissions.map(p => p.problem.tags);
    tags = [].concat.apply([], tags);
    let counts = {};
    for (let i = 0; i < tags.length; i++) {
      let num = tags[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts;
  };

  onChange = e => {
    this.setState({ tuser: e });
  };

  componentDidMount() {
    const submissions = JSON.parse(localStorage.getItem("submissions"));
    const contests = JSON.parse(localStorage.getItem("contests"));
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const userName = localStorage.getItem("userName");
    const otherRoutes =
      localStorage.getItem("otherRoutes") === "false" ? false : true;
    this.setState({
      submissions,
      contests,
      userInfo,
      userName,
      otherRoutes
    });
  }

  onSubmit = async () => {
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

      // Store current state in local storage so that it can be fetched
      // even after the page is reloaded.
      localStorage.setItem("submissions", JSON.stringify(rData[0]));
      localStorage.setItem("contests", JSON.stringify(rData[1]));
      localStorage.setItem("userInfo", JSON.stringify(rData[2]));
      localStorage.setItem("userName", this.state.tuser);
      localStorage.setItem("show", "false");
      localStorage.setItem("otherRoutes", "true");
      console.log(this.state);
    } catch (ex) {
      this.setState({ show: false });
      if (ex.message === "Network Error") toast.error("Invalid Username");
    }
  };

  otherRoutes = () => {
    if (this.props.location.pathname === "/") return null;
    if (!this.state.otherRoutes) return null;
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
              exact
              path="/lang"
              render={() => <PieLang data={this.programLang()} />}
            />
            <Route
              exact
              path="/category"
              render={() => <BarProblems data={this.probIndex()} />}
            />
            <Route
              exact
              path="/verdict"
              render={() => <PieVerdict data={this.programVerdict()} />}
            />
            <Route
              exact
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

  redirectHome = () => {
    if (this.state.otherRoutes) return <Redirect to="/" />;
  };

  renderNavBar = () => {
    if (this.state.otherRoutes && !(this.props.location.pathname === "/"))
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
              Source
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

export default withRouter(GetHandle);
