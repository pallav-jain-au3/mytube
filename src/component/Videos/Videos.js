import React, { Component } from "react";
// import { connect } from "react-redux";
// import { stateMapper } from "../../store/store";
import { Link } from "react-router-dom";

class Videos extends Component {
  renderVideos() {
   if (!this.props.videos){
     return "loading";
   }
    return this.props.videos.map(video => {
      let videoId = video.id;
      if (typeof videoId === "object"){
        videoId = video.id.videoId
      }
      let etag = video.etag;
      let videoImg = video.snippet.thumbnails.high.url;
      let title = video.snippet.title;

      return (
        <div className="col-md-4 card" key={etag}>
          <Link to={`/app/player/${videoId}`}>
            <img
              className="img-fluid"
              src={videoImg}
              alt="img"
            />
          </Link>
          <div className="card-body">
            <p className="font-weight-bold">{title}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="row container">{this.renderVideos()}</div>;
  }
}

export default Videos;
