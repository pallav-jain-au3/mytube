import {fetchOneVideoDetails} from '../api/youtube'

function videoDataReducer(videoDetails = {}, action){

    if (action.type === 'FETCH_VIDEO_DATA'){
        fetchOneVideoDetails(action.videoId)
    }
    if (action.type === 'VIDEO_DATA_LOADED'){
        videoDetails = action.data
    }
    return videoDetails
}

export default videoDataReducer;