import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="text-danger">myTube</h1>
        <hr />
        <ul className="list-group">
          <li className="bg-danger text-light list-group-item">
            <span>Menu</span>
          </li>
          <li className="list-group-item">
            <Link to="/app/trending">Trending</Link>
          </li>
          <li className="list-group-item">
            <Link to="/app/search">Search</Link>
          </li>
          <li className="list-group-item">
            <Link to="/app/profile">Profile</Link>
          </li>
          <li className="list-group-item">
            <Link to="/app/logout">Logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
