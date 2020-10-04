import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: "A5A58D",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: "A5A58D",
  },
});

// export interface Props extends WithStyles<typeof styles>

export interface NavProps {
  username?: string;
  className?: string;
  color?: any;
  classes?: string;
}

export interface NavState {
  username: string;
  // open?: any;
  // setOpen?: any;
}

class Nav extends React.Component<NavProps, NavState> {
  constructor(props: NavProps) {
    super(props);
    this.state = { username: "" };
  }

  handleChange = (event: { target: { name: string; value: string } }) => {
    this.setState({ username: event.target.value });
  };

  // showSignup = () => {
  //   if (this.state.open) {
  //     this.state.setOpen(false);
  //   } else {
  //     this.state.setOpen(true);
  //   }
  // };

  render() {
    // const { classes } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <AppBar position="static" style={{ backgroundColor: "#a5a58d" }}>
          <Toolbar>
            <Typography variant="h6" style={{ color: "black" }}>
              BookWyrm BookClub
            </Typography>
            {/* <Button onClick={this.showSignup}>User: Sign Up</Button> */}
            <Button style={{ marginRight: "right" }}>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Nav;
