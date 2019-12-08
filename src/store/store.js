import {createStore, combineReducers} from 'redux';
import videoReducer from './reducers/videoReducer';
import videoDataReducer from './reducers/videoDataReducer'


let reducer = combineReducers({
    videos: videoReducer,
    videoDetail : videoDataReducer
})

let store = createStore(reducer);
store.subscribe(() =>{
    console.log("dispatched", store.getState())
})

function stateMapper(state){
    return state;
}
export {store, stateMapper};