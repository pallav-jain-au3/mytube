import React, { Component } from "react";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  componentDidMount() {
    let name = JSON.parse(localStorage.getItem("user")).name;
    this.setState({
      name: name
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-danger">Your Profile</h2>
        <h5>Welcome {this.state.name}</h5>
      </div>
    );
  }
}

export default Profile;
