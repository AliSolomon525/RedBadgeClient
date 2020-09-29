import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import { makeStyles, Theme } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import TabPanel from '@material-ui/lab/TabPanel';


// export interface NavProps {
//   children?: React.ReactNode;
//   index: any;
//   value: any;
//  }

// export interface NavState {


// }

// function TabPanel(props: NavProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// function SimpleTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   }

// class Nav extends React.Component<NavState, NavProps> {
//   constructor(props: NavProps) {
//     super(props);
//     //define your state here:
//     this.state = {
//       index: 0, 
//       value: ,

//     };
    
//   }

  //create a method for handle change
  // change the state to the new value
//   handleChange(e) {
//     this.setState({})
//   }

//   render() { 
//     return ( 
//       <div className="appbar">
//       <AppBar position="static">
//         <Tabs value={this.value} onChange={this.handleChange}>
//           <Tab label="Item One" {...a11yProps(0)}/>
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={this.value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={this.value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={this.value} index={2}>
//         Item Three
//       </TabPanel>
//     </div>
//      );
//   }
// };
 
// export default Nav;