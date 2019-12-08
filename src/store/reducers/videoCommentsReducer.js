import {fetchComments} from '../api/youtube';

const videoCommentsReducer = (comments = [], action) =>{
    if (action.type === "FETCH_COMMENTS"){
        fetchComments(action.videoId)
    }
    if (action.type === "LOAD_COMMENTS"){
        comments = action.data
    }
    if (action.type === "CLEAR_COMMENTS"){
        comments = []
    }

    return comments
}

export default videoCommentsReducer;