import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export interface NavProps {
  
}
 
export interface NavState {
  username: string
}
 
class Nav extends React.Component<NavProps, NavState> {
  constructor(props: NavProps) {
    super(props);
    this.state = {username :""  };
  }

  handleChange = (event: { target: { name: string; value: string; }; }) => {
    this.setState({username: event.target.value})
  }

  render() { 
    return (    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            BookWyrm BookClub
          </Typography>
          <Button>Logout</Button>
        </Toolbar>
      </AppBar>
    </div> );
  }
}
 
export default Nav;

///
