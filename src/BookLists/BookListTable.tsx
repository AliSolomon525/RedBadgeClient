//map through all of the Book Lists and display them in rows
import React, { useState } from 'react';
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
import BookIndex from '../Book/BookIndex';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      paddingBottom: "30px",
    },
  });
  
function  createData(listname: any, listdescription: any, seemore: any) {
    return { listname, listdescription, seemore };
  }
  
export interface BookListTableProps {
    token: string | null;
    classes?: any;
    rows: any;
    onUpdate: any;
    onLoad: any;
}

export interface BookListTableState {
  listname: string;
  listdescription: string;
  booklistId: number;
}

class BookListTable extends React.Component<BookListTableProps, BookListTableState> {
    row: any;
    constructor(props: BookListTableProps) {
        super(props);
        this.state = { 
          listname: "",
          listdescription: "",
          booklistId: 0,
         };
    }
showBookCards = (row:any)=>{console.log(row); this.setState({booklistId: row.id})}

    //method to delete books lists from table button
    deleteBookList(id:number){
      console.log(this.props.token)
      let booklistHeaders = new Headers();
      booklistHeaders.append("Content-Type", "application/json");
      booklistHeaders.append(
        "Authorization",
        this.props.token != null ? this.props.token : ""
      );
      const requestOptions = { method: "DELETE", headers: booklistHeaders };
      fetch(Endpoints.authorization.bookListDelete+id,requestOptions)
        .then((res: any) => res.json())
        .then((json) => this.props.onLoad());
    }


    render() {
        const { classes }: any = this.props;
        return ( 
            <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
             {/* the column headers */}
            <TableRow>
            {/* <TableCell>Book Lists</TableCell> */}
            <TableCell style={{textAlign: "center", fontWeight: "bold", fontSize: "18px", font: "Lucida Sans Unicode"}}>Book List Name</TableCell>
            <TableCell style={{textAlign: "center", fontWeight: "bold", fontSize: "18px", font: "Lucida Sans Unicode"}}>Book List Description</TableCell>
            <TableCell style={{textAlign: "center", fontWeight: "bold", fontSize: "18px", font: "Lucida Sans Unicode"}}>View and Add Books</TableCell>
            <TableCell style={{textAlign: "center", fontWeight: "bold", fontSize: "18px", font: "Lucida Sans Unicode"}}>Update Book List</TableCell>
            <TableCell style={{textAlign: "center", fontWeight: "bold", fontSize: "18px", font: "Lucida Sans Unicode"}}>Delete Book List</TableCell>
          </TableRow>
          </TableHead>
        <TableBody>
          {this.props.rows.map((row:any, index:number) => (
            <TableRow key={index} style={{textAlign: "center"}}> 

           <TableCell style={{textAlign: "center"}}>{row.listname}</TableCell>

              <TableCell component="th" scope="row" style={{textAlign: "center"}}>
                {row.listdescription}
              </TableCell>

              <TableCell style={{textAlign: "center"}}><Button variant="outlined" onClick={() => this.showBookCards(row)}>View and Add Books</Button></TableCell>            
              <TableCell style={{textAlign: "center"}}><Button variant="outlined" onClick={()=>{this.props.onUpdate(row)}}>Update</Button></TableCell>
            <TableCell style={{textAlign: "center"}}><Button variant="outlined" onClick={()=>this.deleteBookList(row.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className="wrapper4">
    <BookIndex token={this.props.token} booklistId={this.state.booklistId} />    
    </div>
    <div className="about-footer">&copy; BookWyrm BookClub 2020</div> 
    </div>

         )
    }
}

export default withStyles((Theme)=>({
    table: {
      minWidth: 650,
    },
  }))(BookListTable);

//requests & responses go down here
export interface ResponseBodyBookList {
  id: number;
  listname: string;
  listdescription: string;
  owner: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface RequestBodyBookList {
  booklist: BookList;
}
export interface BookList {
  listname: string;
  listdescription: string;
}


 