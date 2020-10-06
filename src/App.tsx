import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Navbar/Nav";
//import Auth from "./LoginSignup/Auth.tsx";
//import HomepageViewOne from "./Components/HomepageViewOne";
import SignupAdmin from "./LoginSignup/SignupAdmin";
import SignupUser from "./LoginSignup/SignupUser";
import Banner from "./Components/Banner";
import LoginUser from "./LoginSignup/LoginUser";
import LoginAdmin from "./LoginSignup/LoginAdmin";

//needs a function to check to see if there is a token forom local storage
//this functional component needs usestates
// interface UserInfo {
//   userName: string;
//   password: string;
// }

// export interface newToken {
//   newToken: any;
// }

//build an interface to handle settoken

function App() {
  const [token, setToken] = useState<any>(); //strong types the use state; this is casting a type
  //const [updateToken, setUpdate
  const [sessionToken, setSessionToken] = useState<string | null>("");
  useEffect(() => {
    if (localStorage.getItem(token)) {
      setSessionToken(localStorage.getItem(token));
    }
  }, []);
  const updateToken = (newToken: string) => {
    localStorage.setItem(token, newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  return (
    <div className="App">
      <Nav />

      <div className="container">
        <SignupAdmin updateToken={updateToken} />
        <SignupUser updateToken={updateToken} />
      </div>
      <div className="login">
        <LoginUser updateToken={updateToken} />
        <LoginAdmin updateToken={updateToken} />
      </div>
      <Banner />
    </div>
  );
}

export default App;
