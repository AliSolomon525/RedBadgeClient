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
import BookIndex from "./Book/BookIndex";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import BookClub from "./Components/BookClub";
import AdminPage from "./LoginSignup/AdminPage";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import AdminPageIndex from "./LoginSignup/AdminPageIndex";

function App() {
  const [token, setToken] = useState<any>(); //strong types the use state; this is casting a type
  const [hideBookIndex, setHideBookIndex]= useState<boolean>(false);
  //const [updateToken, setUpdate
  const [sessionToken, setSessionToken] = useState<string | null>("");
  // const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setSessionToken(token);
    }
console.log(token);
  }, []);
  const updateToken = (newToken: string, isAdmin = "false") => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("isAdmin", isAdmin);
    setSessionToken(newToken);
    console.log(sessionToken);
  };
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    // return sessionToken === localStorage.getItem("token") ? (
    //   <BookIndex  token={sessionToken} />
    // ) : (
    //   <div>
    const isAdmin = localStorage.getItem("isAdmin");
    if (sessionToken === localStorage.getItem("token")) {
      if (isAdmin === "true") {
        return <AdminPageIndex token={sessionToken}/>
      } else {
        return <BookListIndex token={sessionToken} />
      }
    } else {
        return (<div>
        <Auth token={sessionToken} updateToken={updateToken} />
        <Banner />
      </div>)
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
      <GuardProvider>
      <div>
        <Nav clickLogout={clearToken}/>
      </div>
      <Switch>
        <GuardedRoute path="/about"><About /></GuardedRoute>
        <GuardedRoute path="/bookclub"><BookClub/></GuardedRoute>
      <GuardedRoute path="/">
      {protectedViews()}
      </GuardedRoute>
      <GuardedRoute path="/banner">
      <Banner/>
      </GuardedRoute>
      </Switch>
      </GuardProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
