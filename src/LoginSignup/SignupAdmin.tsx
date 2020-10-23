import React, { useState } from "react";
import { Endpoints } from "../Components/Endpoints";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import banner3 from "../assets/banner3.jpg";

export interface SignupAdminProps {
  updateToken: any;
}

export interface SignupAdminState {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

class SignupAdmin extends React.Component<SignupAdminProps, SignupAdminState> {
  constructor(props: SignupAdminProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    };
  }

  handleChange = (event: any) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ username: value });
    console.log(this.state);
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    const data: SignupAdminPost = {
      admin: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        passwordHash: this.state.password,
      },
    };

    fetch(Endpoints.authorization.signupAdmin, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data: SignupAdminResponse) => {
        console.log(data);
        this.props.updateToken(data.sessionToken, data.isAdmin);
        this.setState({
          firstName: "",
          lastName: "",
          username: "",
          password: "",
        });
      });
  };

  showPasswordToggle() {
    const [isPassword, setisPassword] = useState("password");
    if (isPassword == "text") {
      setisPassword("password");
    } else {
      setisPassword("text");
    }
  }

  render() {
    return (
      <div>
      <div className="wrapper2">
        <div className="form-wrapper">
          {/* <h2 style={{ textAlign: "center" }}>Sign Up Admin</h2> */}
          <form onSubmit={this.handleSubmit}>
            <div className="names">
              <TextField
                id="outlined-required"
                label="First Name (Admin)"
                type="text"
                size="small"
                variant="outlined"
                onChange={(e) => this.setState({ firstName: e.target.value })}
                value={this.state.firstName}
              />
              <TextField
                id="outlined-required"
                label="Last Name (Admin)"
                type="text"
                size="small"
                variant="outlined"
                onChange={(e) => this.setState({ lastName: e.target.value })}
                value={this.state.lastName}
              />
            </div>

            <div className="names">
              <TextField
                id="outlined-required"
                label="Email (Admin)"
                type="email"
                size="small"
                variant="outlined"
                onChange={(e) => this.setState({ username: e.target.value })}
                value={this.state.username}
              />
              <TextField
                id="outlined-required"
                label="Password (Admin)"
                type="password"
                size="small"
                variant="outlined"
                onChange={(e) => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
            </div>
            <div className="submit">
              <Button
                variant="outlined"
                type="submit"
                onClick={(e) => this.handleSubmit(e)}
              >
                Admin Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div><img src={banner3} alt="book on table" style={{ width: "100%", height: "80%", paddingTop: "5px", justifyContent: "center" }} /></div>
      </div>
    );
  }
}

export default SignupAdmin;

export interface Username {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  passwordHash: string;
  updatedAt: Date;
  createdAt: Date;
}
export interface SignupAdminResponse {
  username: Username;
  message: string;
  sessionToken: string;
  isAdmin: boolean;
}

export interface Admin {
  firstName: string;
  lastName: string;
  username: string;
  passwordHash: string;
}

export interface SignupAdminPost {
  admin: Admin;
}
