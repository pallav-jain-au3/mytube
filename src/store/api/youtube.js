import MYTUBE_API from '../../config';
import {store} from '../store'
function fetchVideos(store){
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${ MYTUBE_API.key}&chart=mostPopular&maxResults=10`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        store.dispatch({
            type: 'VIDEOS_LOADED',
            videos: res.items
        })
    })
}

function fetchOneVideoDetails(videoId){
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${ MYTUBE_API.key}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
       
  
        store.dispatch({
            type: 'VIDEO_DATA_LOADED',
            data: res.items.length > 0 ? res.items[0] :{}
        })
    })
}

function fetchComments(videoId){
    let url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${ MYTUBE_API.key}`;
    fetch(url)
    .then(res => res.json())
    .then(res => store.dispatch({
        type : 'LOAD_COMMENTS',
        data :res.items
    }))
}

export {
    fetchVideos, fetchOneVideoDetails, fetchComments
}