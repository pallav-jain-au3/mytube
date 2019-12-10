import React, { Component } from "react";
import GoogleLogin from "react-google-login";

class Login extends Component {
  responseGoogle = response => {
    let user = {
      accessToken: response.accessToken,
      name: response.profileObj.name
    };
    localStorage.setItem("user", JSON.stringify(user));
    this.props.history.push("/app/trending");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="text-danger">Login using your Google account</h4>
            <GoogleLogin
              clientId="163944735500-nri0fe3onoq78jqspbhm2v1dlefplu5f.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
