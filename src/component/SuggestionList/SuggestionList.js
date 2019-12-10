import React from 'react';
import Suggestion from '../Suggestion/Suggestion'
import './SuggestionList.css'

const SuggestionList = ({videoSuggestions}) => {
    let suggestions = videoSuggestions.map((video, id ) => <Suggestion  key = {id} title = {video.snippet.title}  videoId = {video.id.videoId}/>)
    return (  
        <ul className = "list-group">
        {suggestions}
        </ul>
    );
}
 
export default SuggestionList;