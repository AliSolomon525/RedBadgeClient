import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Navbar/Nav";
import Auth from "./LoginSignup/Auth";
import SignupAdmin from "./LoginSignup/SignupAdmin";
import SignupUser from "./LoginSignup/SignupUser";
import Banner from "./Components/Banner";
import LoginUser from "./LoginSignup/LoginUser";
import LoginAdmin from "./LoginSignup/LoginAdmin";
import BookListIndex from "./BookLists/BookListIndex";

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
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <BookListIndex token={sessionToken} />
    ) : (
      <Auth token={sessionToken} updateToken={updateToken} />
    );
  };

  return (
    <div className="App">

      <Nav />
      {/* <Auth token={sessionToken} updateToken={updateToken} />

      <div className="container">
        <SignupAdmin updateToken={updateToken} />
        <SignupUser updateToken={updateToken} />
      </div>
      <div className="container2">
        <LoginAdmin updateToken={updateToken} />
        <LoginUser updateToken={updateToken} />
      </div> */}
      {protectedViews()}
      <Banner/>
    </div>
  );
}

export default App;
