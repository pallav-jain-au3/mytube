import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import Login from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

class Home extends Component {
   doRedirect(){
       let loggedIn = localStorage.getItem("user");
       if(loggedIn){
           return <Redirect to = "/app" />
       } 
       else{
           return <Redirect to = "/login" />
       }
   }
    render() { 
        return (  
            <Router>
               <Route path = "/app" component = {App}></Route>
               <Route path = "/login" component = {Login}></Route>
               {}
           </Router>
        );
    }
}
 
export default Home;


ReactDOM.render(<Home />, document.getElementById('root'));


