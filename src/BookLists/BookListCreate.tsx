import * as React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//import BookListCreate from "./BookLists/BookListCreate";
//import BookListTable from "./BookLists/BookListTable";
//import BookListEdit from "./BookLists/BookListEdit";
import { Endpoints } from "../Components/Endpoints";
import { createStyles, Theme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const useStyles =(theme: Theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
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
});

export interface BookListIndexProps {
  token: string | null;
  classes: any;
  onLoad: any;
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
  onSubmit=(event:any)=> {
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
    const requestOptions = { method: "POST", headers: booklistHeaders, body: JSON.stringify(body) };
    fetch(Endpoints.authorization.bookListCreate,requestOptions)
      .then((res: any) => res.json())
      .then((json: ResponseBodyBookList) => this.props.onLoad());
    // alert("hello")
  }
  render() {
    const { classes }: any = this.props;
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
                onChange={(e) => this.setState({ listname: e.target.value })}
              />
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <form className={classes.container} noValidate>
              <TextField
                id="listdescription"
                variant="outlined"
                label="Book List Description"
                type="listdescription"
                onChange={(e) => this.setState({ listdescription: e.target.value })}
              />
            </form>
          </Grid>
        </Grid>
        <br/>
        <Button
        // className={classes.but}
        // type="submit"
        // variant="contained"
        // size="medium"
        // textAlign="center"
        onClick={(e)=>this.onSubmit(e)}
      >
        Create a Booklist
      </Button>


      </div>
    );
  }
}
export default withStyles((theme)=> ({
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
}))(BookListIndex);
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
