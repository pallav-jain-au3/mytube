import React, { Component } from 'react';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store';
import {Link} from 'react-router-dom';


class Videos extends Component {
    renderVideos(){
        return this.props.videos.map(video =>{
                return (
                    <div className = "col-md-4 card" key = {video.etag}>
                        <Link to = {`/app/player/${video.id}`}>
                            <img className = "img-fluid"src={video.snippet.thumbnails.high.url} alt="img" />
                        </Link>    
                        <div className ="card-body">
                            <p className = "font-weight-bold">{video.snippet.title}</p>
                        </div>
                    
                    </div>
                )
        })
    }
    
    render() { 
        return (
            <div className = "row container">
            {this.renderVideos()}
            </div>
          );
    }
}
 
export default connect(stateMapper)(Videos)