//BookListIndex is responsible for conditionally loading
//the other 3 components (BookList Create, Edit, and Table)
//BookListIndex is responsible for the splash page which users see after login
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//import BookListCreate from "./BookLists/BookListCreate";
//import BookListTable from "./BookLists/BookListTable";
//import BookListEdit from "./BookLists/BookListEdit";
import { Endpoints } from "../Components/Endpoints";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
  title: {
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  but: {
    marginLeft: theme.spacing(1),
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
}));

export interface BookListIndexProps {
  token: string | null;
  classes?: any;
}
export interface BookListIndexState {
  listname: string;
  listdescription: string;
}

class BookListIndex extends React.Component<
  BookListIndexProps,
  BookListIndexState
> {
  constructor(props: BookListIndexProps) {
    super(props);
    this.state = {
      listname: "",
      listdescription: "",
    };
  }
  //inside a method we can use vanilla JS
  onSubmit() {
    const body: RequestBodyBookList = {
      booklist: {
        listname: this.state.listname,
        listdescription: this.state.listdescription,
      },
    };
    let booklistHeaders = new Headers();
    booklistHeaders.append("Content-Type", "application/json");
    booklistHeaders.append(
      "Authorization",
      this.props.token != null ? this.props.token : ""
    );
    const requestOptions = { method: "GET", headers: booklistHeaders };
    fetch(Endpoints.authorization.getBookListById)
      .then((res: any) => res.json())
      .then((json: ResponseBodyBookList) => console.log(json));
  }
  //fetch(Endpoints.authorization.getBookListById).then((res:any)=> res.json()).then(json=> console.log(json))
  //}
  render() {
    const classes = useStyles();
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <form className={classes.container} noValidate>
              <TextField
                id="listname"
                variant="outlined"
                label="Book List Name"
                type="listname"
                // value={listname}
                onChange={(e) => this.setState({ listname: e.target.value })}
                // className={classes.textField}
                // InputLabelProps={{
                //   shrink: true,
                // }}
              />
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default BookListIndex;
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
