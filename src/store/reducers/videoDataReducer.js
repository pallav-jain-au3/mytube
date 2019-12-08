import {fetchOneVideoDetails} from '../api/youtube'

function videoDataReducer(videoDetails = {}, action){

    if (action.type === 'FETCH_VIDEO_DATA'){
        console.log("reducer")
        fetchOneVideoDetails(action.videoId)
    }
    if (action.type === 'VIDEO_DATA_LOADED'){
        videoDetails = action.data
    }
    return videoDetails
}

export default videoDataReducer;