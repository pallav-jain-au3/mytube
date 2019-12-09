import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Login } from "./component/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class Home extends Component {
  doRedirect() {
    let loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      return <Redirect to="/app/trending" />;
    } else {
      return <Redirect to="/login" />;
    }
  }
  render() {
    return (
      <Router>
        <Route path="/app" component={App}></Route>
        <Route path="/login" component={Login}></Route>
        {this.doRedirect()}
      </Router>
    );
  }
}

export default Home;

ReactDOM.render(<Home />, document.getElementById("root"));
