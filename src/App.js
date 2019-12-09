import React, { Component } from "react";
import {Menu, Profile, Search, Trending, Logout, VideoPlayer} from "./component";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Menu />
            </div>
            <div className="col-md-9">
              <Route path="/app/trending" component={Trending} />
              <Route path="/app/profile" component={Profile} />
              <Route path="/app/search" component={Search} />
              <Route path="/app/logout" component={Logout} />
              <Route path="/app/player/:videoId" component={VideoPlayer} />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
