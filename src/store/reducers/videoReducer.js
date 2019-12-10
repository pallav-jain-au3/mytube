import {fetchVideos} from '../api/youtube';


function videoReducer(videos = [], action){

    if (action.type === "FETCH_VIDEOS"){
        fetchVideos();
    }

    if (action.type === 'VIDEOS_LOADED'){
        videos = action.videos
    }
    if (action.type === 'CLEAR_VIDEOS'){
        videos = []
    }
    return videos
} 

export default videoReducer;