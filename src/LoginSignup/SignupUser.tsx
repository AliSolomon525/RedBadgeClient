import React from "react";
import { Endpoints } from "../Components/Endpoints";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export interface SignupUserProps {
  // name?: any;
  // value?: any;
  updateToken: any;
}

export interface SignupUserState {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export interface SignupPost {
  user: User;
}

export interface User {
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
        password: this.state.password,
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
      });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2 style={{ textAlign: "center" }}>Sign Up User</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <TextField
                id="outlined-required"
                label="First Name"
                type="text"
                size="small"
                name="firstName"
                variant="outlined"
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <TextField
                id="outlined-required"
                label="Last Name"
                type="text"
                size="small"
                name="firstName"
                variant="outlined"
                onChange={this.handleChange}
              />
            </div>
            <div className="username">
              <TextField
                id="outlined-required"
                label="Email"
                type="text"
                size="small"
                name="firstName"
                variant="outlined"
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <TextField
                id="outlined-required"
                label="Password"
                type="text"
                size="small"
                name="firstName"
                variant="outlined"
                onChange={this.handleChange}
              />
            </div>
            <div className="submit">
              <br />
              <Button variant="outlined">Register Me</Button>
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
