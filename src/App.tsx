import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Navbar/Nav";
//import Auth from "./LoginSignup/Auth.tsx";
//import HomepageViewOne from "./Components/HomepageViewOne";
import SignupAdmin from "./LoginSignup/SignupAdmin";
import SignupUser from "./LoginSignup/SignupUser";
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
      <h1>Hello World</h1>
      <SignupAdmin updateToken={updateToken} />
      <SignupUser updateToken={updateToken} />
    </div>
  );
}

export default App;
