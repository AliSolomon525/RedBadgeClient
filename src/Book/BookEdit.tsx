import React from 'react'
import { Endpoints } from '../Components/Endpoints';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface BookEditProps {
    token: string | null;
    onUpdate: any;
    openDialog: boolean;
}
 
export interface BookEditState {
    date: string;
    title: string;
    author: string;
    cover: string;
    owner: number | string;
    booklist: number | string;
    openDialog: boolean;
}
 
class BookEdit extends React.Component<BookEditProps, BookEditState> {
  handleClose: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = () => {this.setState({openDialog: false})}
  handleOpen: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = () => {
    // this.setState({open: true})
  }
    constructor(props: BookEditProps) {
        super(props);
        this.state = { 
            date: "",
            title: "",
            author: "",
            cover: "",
            owner: "",
            booklist: "",
            openDialog: this.props.openDialog,
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
        const requestOptions = { method: "PUT", headers: bookHeaders };
        fetch(Endpoints.authorization.bookUpdate)
          .then((res: any) => res.json())
          .then((json: ResponseBook) => console.log(json));
      }


    render() { 
        return ( 
            <div>
              <div>
          <Button variant="outlined" color="primary" onClick={() => {console.log("Come back to me!")}}>
           Update Book Information
          </Button>
          <Dialog open={false}aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update</DialogTitle>
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
              <Button onClick={()=> this.props.onUpdate()} color="primary">
                Add Book
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
            </div>
            </div>
         );
    }
}
 
export default BookEdit;

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