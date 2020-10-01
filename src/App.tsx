import React from "react";
import "./App.css";
// import Nav from './Navbar/Nav';
import HomepageViewOne from "./Components/HomepageViewOne";
import SignupAdmin from "./LoginSignup/SignupAdmin";
import SignupUser from "./LoginSignup/SignupUser";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <h1>Hello World</h1>
      <SignupAdmin updateToken={updateToken} />
      <SignupUser updateToken={updateToken} />
    </div>
  );
}

export default App;
