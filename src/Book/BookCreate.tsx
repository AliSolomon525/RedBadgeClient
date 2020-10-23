import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Endpoints } from '../Components/Endpoints';
import { Theme } from '@material-ui/core';

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
    paddingBottom: theme.spacing(1),
  },
  title: {
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    paddingBottom: theme.spacing(1),
  },
  but: {
    marginLeft: theme.spacing(1),
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
});

export interface BookCreateProps {
    token: string | null;
    openDialog: boolean;
    onLoad: any;
    onCreate: any;
    booklistId: number;
}
 
export interface BookCreateState {
    date: string;
    title: string;
    author: string;
    cover: string;
    owner: number | string;
}


class BookCreate extends React.Component<BookCreateProps, BookCreateState> {
  handleOpen: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = () => {
    // this.setState({open: true})
  }
    constructor(props: BookCreateProps) {
        super(props);
        this.state = { 
            date: "",
            title: "",
            author: "",
            cover: "",
            owner: "",
         };
    }

    onSubmit(event: any) {
        const body: RequestBodyBook = {
          book: {
            date: this.state.date,
            title: this.state.title,
            author: this.state.author,
            cover: this.state.cover,
            owner: this.state.owner,
            booklist: this.props.booklistId,
          },
        };
        let bookHeaders = new Headers();
        bookHeaders.append("Content-Type", "application/json");
        bookHeaders.append(
          "Authorization",
          this.props.token != null ? this.props.token : ""
        );
        const requestOptions = { method: "POST", headers: bookHeaders, body: JSON.stringify(body)};
        fetch(Endpoints.authorization.bookCreate, requestOptions)
          .then((res: any) => res.json())
          .then((json: ResponseBook) => {
            this.props.onLoad()
            this.props.onCreate()});
      }

    render() { 
        return ( 
          <div>
       {this.props.booklistId != 0 && <Button variant="outlined" onClick={this.props.onCreate} style={{backgroundColor:"#ffe8d6"}} >
            Add a Book
          </Button>}
          <Dialog open={this.props.openDialog} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add a Book</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
              </DialogContentText> */}
              <TextField
                autoFocus
                margin="dense"
                label="Title"
                type="title"
                fullWidth
                onChange={(e) => this.setState({ title: e.target.value })}
              />
              <TextField
              style={{fontSize: "15px"}}
                autoFocus
                margin="dense"
                label="Author"
                type="author"
                fullWidth
                onChange={(e) => this.setState({ author: e.target.value })}
              />
               <TextField
                autoFocus
                margin="dense"
                type="date"
                fullWidth
                onChange={(e) => this.setState({ date: e.target.value})}
              />
            </DialogContent>
            <DialogActions style={{margin: "auto"}}>
              <Button onClick={(e)=>this.onSubmit(e)}>
                Add Book
              </Button>
              <Button onClick={this.props.onCreate}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          </div>
        )}
}

export default BookCreate;

export interface RequestBodyBook {
    book: Book;
  }

export interface Book {
    date: string;
    title: string;
    author: string;
    cover: string;
    owner: number | string;
    booklist: number | string;
}

export interface ResponseBook {
    id: number;
    date: string;
    title: string;
    author: string;
    cover: string;
    owner: number;
    booklist: number;
    updatedAt: Date;
    createdAt: Date;
}