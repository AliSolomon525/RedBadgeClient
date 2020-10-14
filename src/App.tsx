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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About";
import BookClub from "./Components/BookClub";

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
      <div>
        <Auth token={sessionToken} updateToken={updateToken} />
        <Banner />
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
      <div>
        <Nav clickLogout={clearToken}/>
      </div>
      <Switch>
        <Route path="/about"><About /></Route>
        <Route path="/bookclub"><BookClub/></Route>
      <Route path="/">
      {protectedViews()}
      </Route>
      <Route path="/banner">
      <Banner/>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
