import React, { useState } from "react";
import { Endpoints } from "../Components/Endpoints";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export interface SignupUserProps {
  updateToken: any;
}

export interface SignupUserState {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

class SignupUser extends React.Component<SignupUserProps, SignupUserState> {
  constructor(props: SignupUserProps) {
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
    const data: SignupPost = {
      user: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        passwordHash: this.state.password,
      },
    };

    fetch(Endpoints.authorization.signupUser, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data: SignupResponse) => {
        console.log(data);
        this.props.updateToken(data.sessionToken);
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
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="names">
              <TextField
                id="outlined-required"
                label="First Name (User)"
                size="small"
                variant="outlined"
                onChange={(e) => this.setState({ firstName: e.target.value })}
                value={this.state.firstName}
              />
              <TextField
                id="outlined-required"
                label="Last Name (User)"
                size="small"
                variant="outlined"
                onChange={(e) => this.setState({ lastName: e.target.value })}
                value={this.state.lastName}
              />
            </div>

            <div className="names">
              <TextField
                id="outlined-required"
                label="Email (User)"
                type="email"
                size="small"
                variant="outlined"
                onChange={(e) => this.setState({ username: e.target.value })}
                value={this.state.username}
              />
              <TextField
                id="outlined-required"
                label="Password (User)"
                size="small"
                type="password"
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
                User Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupUser;

export interface Username {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  passwordHash: string;
  updatedAt: Date;
  createdAt: Date;
}
export interface SignupResponse {
  username: Username;
  message: string;
  sessionToken: string;
}

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  passwordHash: string;
}

export interface SignupPost {
  user: User;
}
