import React, { Component } from 'react';
import {stateMapper, store} from '../store/store';
import {connect} from 'react-redux';
import Comments from './Comments' 

class VideoPlayer extends Component {
    componentDidMount(){
        this.props.dispatch({
            type:'FETCH_VIDEO_DATA',
            videoId : this.props.match.params.videoId
        })
    }
    render() { 
        let title = this.props.videoDetail;
        console.log(title)
        
        return ( 
            <div className = "container">
            {
                this.props.videoDetail.snippet ? (
                    <div>
                   
                    <iframe className = "embed-responsive-item" width="800" height="500"  src = {`https://www.youtube.com/embed/${this.props.match.params.videoId}?playlist=tgbNymZ7vqY&loop=1`}  frameBorder = "0"  allowfullscreen="allowfullScreen" title = "player"></iframe>
                    <h5 className = "text-left font-weight-bold">{this.props.videoDetail.snippet.title}</h5>
                    <p className ="text-muted">{ this.props.videoDetail.statistics.viewCount} views  <span>&#8226;</span></p>
                    <Comments id = {this.props.match.params.videoId} />
                    </div>
                    ) : "loading"
            }    
            </div>
         );
    }
}
 
export default connect(stateMapper)(VideoPlayer);