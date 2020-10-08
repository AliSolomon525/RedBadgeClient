import React, { useState } from "react";
import { Endpoints } from "../Components/Endpoints";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export interface LoginUserProps {
  updateToken: any;
}

export interface LoginUserState {
  username: string;
  password: string;
}

class LoginUser extends React.Component<LoginUserProps, LoginUserState> {
  constructor(props: LoginUserProps) {
    super(props);
    this.state = {
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
    const data: LoginUserPost = {
      user: {
        username: this.state.username,
        passwordHash: this.state.password,
      },
    };

    fetch(Endpoints.authorization.loginUser, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data: LoginResponse) => {
        console.log(data);
        this.props.updateToken(data.sessionToken);
        this.setState({
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
                type="email"
                label="Email (User)"
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
                User Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginUser;

export interface Username {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  passwordHash: string;
  updatedAt: Date;
  createdAt: Date;
}
export interface LoginResponse {
  username: Username;
  message: string;
  sessionToken: string;
}

export interface User {
  username: string;
  passwordHash: string;
}

export interface LoginUserPost {
  user: User;
}
