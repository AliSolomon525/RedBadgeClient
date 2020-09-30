import React from "react";
import { Endpoints } from "../Components/Endpoints";

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
    const data: SignupPost = {
      user: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
      },
    };

    fetch(Endpoints.authorization.signupUser), {
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
          <h2>Sign Up User</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                name="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name: </label>
              <input type="text" name="lastName" onChange={this.handleChange} />
            </div>
            <div className="username">
              <label htmlFor="username">Email: </label>
              <input
                type="email"
                name="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="submit">
              <button>Register Me</button>
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
