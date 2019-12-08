import React, { Component } from 'react';
import Menu from './Menu';
import Profile from './Profile';
import Search from './Search'
import Trending from './Trending';
import {Route} from 'react-router-dom';
import Logout from './Logout';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import VideoPlayer from './VideoPlayer'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Provider store = {store}>
            <div className = "container">
            <div className = "row">
               <div className = "col-md-3">
               
               <Menu />
               </div> 
            <div className = "col-md-9">
        
            <Route path = '/app/trending'  component = {Trending}/>
            <Route path = '/app/profile' component = {Profile} />
            <Route path = '/app/search' component = {Search} />
            <Route path = '/app/logout' component = {Logout} />
            <Route path = '/app/player/:videoId' component = {VideoPlayer} />
            
           

            </div>
            </div>
            </div>
            </Provider>
         );
    }
}
 
export default App;