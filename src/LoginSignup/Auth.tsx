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
        {/* <SignupUser updateToken={this.props.updateToken} />
        <LoginUser updateToken={this.props.updateToken} />
        <SignupAdmin updateToken={this.props.updateToken} />
        <LoginAdmin updateToken={this.props.updateToken} /> */}
      </div>
    );
  }
}

export default Auth;

// import LoginUser from './LoginUser';
// import SignupUser from './SignupUser';
// import LoginAdmin from './LoginAdmin';
// import SignupAdmin from './SignupAdmin';

// export interface AuthProps {

// }

// export interface AuthState {
//     const [isLogin, setIsLogin];
//     const [password, setPassword];

//     const title = isLogin === true ? "Login" : "Signup"

//     function toggle(e) {
//         e.preventDefault()
//         if  (isLogin === true) {
//            setIsLogin(false)
//         } else {
//             setIsLogin(true)
//         }
//     }
// }

// class Auth extends React.Component<AuthProps, AuthState> {
//     constructor(props: AuthProps) {
//         super(props);
//         this.state = {
//             isLogin: true,
//             email : ,
//             password:
//         };
//     }
// loginClicked() {
//     this.setState({loginClick: !this.state.loginClick)
// }
//     render() {
//         return (
//         <div>
//             {isLogin ? <Login token={props.token} updateToken={props.updateToken}/> : <Signup token={props.token} updateToken={props.updateToken}/>}
//             <button className="toggleButton" onClick={(e) => toggle(e)}>Login/Signup Toggle</button>
//           </div>

//         );
//     }
// }

// export default Auth;
