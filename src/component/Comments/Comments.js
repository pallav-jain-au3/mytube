import React, { Component } from "react";
import { connect } from "react-redux";
import { stateMapper } from "../../store/store";
import Comment from "../Comment/Comment";
class Comments extends Component {
  componentWillMount() {
    this.props.dispatch({
      type: "FETCH_COMMENTS",
      videoId: this.props.id
    });
  }
  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_COMMENTS"
    });
  }

  render() {
    console.log(
      this.props.videoComments.length > 0
        ? this.props.videoComments[0].snippet.topLevelComment.snippet
        : "loading"
    );
    let comments = this.props.videoComments.map((comment, index) => {
      let image = comment.snippet.topLevelComment.snippet.authorProfileImageUrl;
      let authorName =
        comment.snippet.topLevelComment.snippet.authorDisplayName;
      let text = comment.snippet.topLevelComment.snippet.textOriginal;
      return (
        <div key={index}>
          <Comment authorName={authorName} comment={text} image={image} />
        </div>
      );
    });
    return <div className="jumbotron">{comments}</div>;
  }
}

export default connect(stateMapper)(Comments);
