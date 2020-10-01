import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export interface NavProps {
  username?: string;
}

export interface NavState {
  target: {
    username: string;
    name?: string;
    value: any;
  };
}

class Nav extends React.Component<NavProps, NavState> {
  constructor(props: NavProps) {
    super(props);
    this.state({ target: { name: "", value: "" } });
  }

  //create a method for handle change
  //change the state to the new value
  handleChange = (event: { target: { name: string; value: any } }) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">BookWyrm BookClub</Typography>
            <Button>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Nav;

// export interface Username {
//   id: number;
//   firstName: string;
//   lastName: string;
//   username: string;
//   passwordHash: string;
//   updatedAt: Date;
//   createdAt: Date;
// }
// export interface SignupResponse {
//   username: Username;
//   message: string;
//   sessionToken: string;
// }
