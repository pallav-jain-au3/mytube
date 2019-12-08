import {fetchVideos} from '../api/youtube';
import { store } from '../store'

function videoaReducer(videos = [], action){

    if (action.type === "FETCH_VIDEOS"){
        fetchVideos(store);
    }

    if (action.type === 'VIDEOS_LOADED'){
        videos = action.videos
    }
    if (action.type === 'CLEAR_VIDEOS'){
        videos = []
    }
    return videos
} 

export default videoaReducer;