import React from "react";
import Container from "@material-ui/core/Container";
import SignupAdmin from "./SignupAdmin";
import LoginAdmin from "./LoginAdmin";
import SignupUser from "./SignupUser";
import LoginUser from "./LoginUser";

//token is the prop
//what am I bringing in? - the app.tsx file carries the token,
//but needs to carry function that checks the token.
//
export interface AuthProps {
  token: string | null;
  updateToken: any;
}

export interface AuthState {
  authInfo: any;
}

class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = { authInfo: [] };
  }
  render() {
    return (
      <div>
        <div className="container">
          {/* <SignupAdmin updateToken={this.props.updateToken} /> */}
          <SignupUser updateToken={this.props.updateToken} />
        </div>
        <div className="container2">
          <LoginUser updateToken={this.props.updateToken} />
          <LoginAdmin updateToken={this.props.updateToken} />
        </div>
      </div>
    );
  }
}

export default Auth;