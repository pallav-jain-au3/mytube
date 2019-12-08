import {createStore, combineReducers} from 'redux';
import videoReducer from './reducers/videoReducer';
import videoDataReducer from './reducers/videoDataReducer';
import videoCommentsReducer from './reducers/videoCommentsReducer'


let reducer = combineReducers({
    videos: videoReducer,
    videoDetail : videoDataReducer,
    videoComments : videoCommentsReducer
})

let store = createStore(reducer);
store.subscribe(() =>{
    console.log("dispatched", store.getState())
})

function stateMapper(state){
    return state;
}
export {store, stateMapper};