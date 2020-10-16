import React, { useState } from "react";
import { Endpoints } from "../Components/Endpoints";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export interface LoginAdminProps {
  updateToken: any;
}

export interface LoginAdminState {
  username: string;
  password: string;
}

class LoginAdmin extends React.Component<LoginAdminProps, LoginAdminState> {
  constructor(props: LoginAdminProps) {
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
    const data: LoginAdminPost = {
      admin: {
        username: this.state.username,
        passwordHash: this.state.password,
      },
    };

    fetch(Endpoints.authorization.loginAdmin, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data: LoginAdminResponse) => {
        console.log(data);
        this.props.updateToken(data.sessionToken, data.isAdmin);
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
                Admin Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginAdmin;

export interface Username {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  passwordHash: string;
  updatedAt: Date;
  createdAt: Date;
}
export interface LoginAdminResponse {
  username: Username;
  message: string;
  sessionToken: string;
  isAdmin: string;
}

export interface Admin {
  username: string;
  passwordHash: string;
}

export interface LoginAdminPost {
  admin: Admin;
}
