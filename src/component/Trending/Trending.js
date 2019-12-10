import React, { Component } from "react";
import { connect } from "react-redux";
import { stateMapper } from "../../store/store";
import Videos from "../Videos/Videos";

class Trending extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_VIDEOS"
    });
  }
  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_VIDEOS"
    });
  }

  render() {
    let videos = this.props.videos.length ? (<Videos videos = {this.props.videos} />): "loading"
    return (
      <div>
        <h1>This is Trending </h1>
        {videos}
      </div>
    );
  }
}

export default connect(stateMapper)(Trending);
