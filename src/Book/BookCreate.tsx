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

export interface BookCreateProps {
    token: string | null;
    openDialog: boolean;
    onLoad: any;
}
 
export interface BookCreateState {
    date: string;
    title: string;
    author: string;
    cover: string;
    owner: number | string;
    booklist: number | string;
}


class BookCreate extends React.Component<BookCreateProps, BookCreateState> {
  handleClose: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = () => {this.setState({})}
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
            booklist: "",
         };
    }

    onSubmit() {
        const body: RequestBodyBook = {
          book: {
            date: this.state.date,
            title: this.state.title,
            author: this.state.author,
            cover: this.state.cover,
            owner: this.state.owner,
            booklist: this.state.booklist
          },
        };
        let bookHeaders = new Headers();
        bookHeaders.append("Content-Type", "application/json");
        bookHeaders.append(
          "Authorization",
          this.props.token != null ? this.props.token : ""
        );
        const requestOptions = { method: "POST", headers: bookHeaders };
        fetch(Endpoints.authorization.bookCreate)
          .then((res: any) => res.json())
          .then((json: ResponseBook) => this.props.onLoad());
      }


    render() { 
        return ( 
          <div>
          <Button variant="outlined" color="primary" onClick={this.handleOpen}>
            Add a Book
          </Button>
          <Dialog open={this.props.openDialog} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add a Book</DialogTitle>
            <DialogContent>
              <DialogContentText>
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="Title"
                type="title"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                label="Author"
                type="author"
                fullWidth
              />
               <TextField
                autoFocus
                margin="dense"
                type="date"
                fullWidth
              />
                <TextField
                autoFocus
                margin="dense"
                label="Cover"
                type="cover"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onSubmit} color="primary">
                Add Book
              </Button>
              <Button onClick={this.handleClose} color="primary">
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