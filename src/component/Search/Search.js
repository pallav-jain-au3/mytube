import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { store, stateMapper } from "../../store/store";
import Videos from "../Videos/Videos";
import SuggestionList from "../SuggestionList/SuggestionList";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      matches: []
    };
  }
  handleChange = e => {
    store.dispatch({
      type: "CLEAR_MATCHES"
    });
    this.setState({
      input: e.target.value,
      matches: []
    });

    store.dispatch({
      type: "SEARCH_VIDEO",
      input: this.state.input
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      matches: this.props.videoSearches
    });
  };

  render() {
    let videos = this.props.videoSearches;

    return (
      <div>
        <Paper elevation={6}>
          <form onSubmit={this.onSubmit}>
            <TextField fullWidth label="search" onChange={this.handleChange} />
          </form>
        </Paper>
        <SuggestionList videoSuggestions={videos} />
        <div>
          <Videos videos={this.state.matches} />
        </div>
      </div>
    );
  }
}

export default connect(stateMapper)(Search);
