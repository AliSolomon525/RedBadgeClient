import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: "A5A58D",
    minHeight: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#fffdfb",
    font: "Lucida Sans Unicode",
  },
});

export interface NavProps {
  username?: string;
  className?: string;
  color?: any;
  classes?: any;
  clickLogout?: any;
}

export interface NavState {
  username: string;
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
    const { classes }: any = this.props;
    return (
      <div style={{ paddingTop: 56, paddingBottom: 10 }}>
        <AppBar
          style={{
            backgroundColor: "#a5a58d",
            position: "fixed",
          }}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              BookWyrm BookClub
            </Typography>

           <Link to="/banner"
           style={{
            textDecoration: "none",
            color: "black",
            textTransform: "uppercase",
            fontSize: "15px",
            paddingRight: "10px",
          }}>Home</Link>

            <Link to="/about"
            style={{
              textDecoration: "none",
              color: "black",
              textTransform: "uppercase",
              fontSize: "15px",
              paddingRight: "5px",
            }}>About Us</Link>

            <Link to="/bookclub"
            style={{
              textDecoration: "none",
              color: "black",
              textTransform: "uppercase",
              fontSize: "15px",
              padding: "4px",
            }}>Book Clubs</Link>

            <Button onClick={this.props.clickLogout} style={{
              textDecoration: "none",
              color: "white",
              textTransform: "uppercase",
              fontSize: "14px",
            }}>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(Nav);
