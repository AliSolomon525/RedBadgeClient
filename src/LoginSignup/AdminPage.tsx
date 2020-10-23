import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import Button from "@material-ui/core/Button";
import {Endpoints} from "../Components/Endpoints";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
function  createData(firstName: any, lastName: any, username: any) {
    return { firstName, lastName, username};
  }

export interface AdminPageProps {
    token: string | null;
    classes?: any;
    onLoad: any;
    rows: any;
}
 
export interface AdminPageState {
    firstName: string;
    lastName: string;
    username: string;
    
}

//method for fetch getAllUsers and delete functionality
 
class AdminPage extends React.Component<AdminPageProps, AdminPageState> {
    rows: any;
    constructor(props: AdminPageProps) {
        super(props);
        this.state = { 
        firstName: "",
        lastName: "",
        username: "",
      };};

    deleteUser(id:number){
        console.log(this.props.token)
        let AdminPageHeaders = new Headers();
       AdminPageHeaders.append("Content-Type", "application/json");
       AdminPageHeaders.append(
          "Authorization",
          this.props.token != null ? this.props.token : ""
        );
        const requestOptions = { method: "DELETE", headers: AdminPageHeaders };
        fetch(Endpoints.authorization.deleteUser+id, requestOptions)
          .then((res: any) => res.json())
          .then((json) => this.props.onLoad());
      }

    render() { 
        const { classes }: any = this.props;
        return ( <div>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                   {/* the column headers */}
                <TableRow>
                  <TableCell style={{textAlign: "center", fontWeight: "bold", fontSize: "18px", font: "Lucida Sans Unicode"}}>First Name</TableCell>
                  <TableCell style={{textAlign: "center", fontWeight: "bold", fontSize: "18px", font: "Lucida Sans Unicode"}}>Last Name</TableCell>
                  <TableCell style={{textAlign: "center", fontWeight: "bold", fontSize: "18px", font: "Lucida Sans Unicode"}}>Username</TableCell>
                  <TableCell style={{textAlign: "center", fontWeight: "bold", fontSize: "18px", font: "Lucida Sans Unicode"}}>Delete User</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.rows.map((row:any,index:number) => (
                  <TableRow key={index}> 
                    <TableCell component="th" scope="row" style={{textAlign: "center"}}>
                      {row.firstName}
                    </TableCell>
                    <TableCell component="th" scope="row" style={{textAlign: "center"}}>
                      {row.lastName}
                    </TableCell>
                    <TableCell component="th" scope="row" style={{textAlign: "center"}}>
                      {row.username}
                    </TableCell>
                    
                  <TableCell style={{textAlign: "center"}}><Button variant="outlined" onClick={()=>this.deleteUser(row.id)}>Delete</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="about-footer">&copy; BookWyrm BookClub 2020</div>
          </div> );
    }
}
 
    export default withStyles((theme)=>({
        table: {
          minWidth: 650,
        },
      }))(AdminPage);

export interface Username {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
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