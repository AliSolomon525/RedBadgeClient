//BookList Edit Modal will only display if the 
//user would like to edit the details of a workout
import * as React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Endpoints } from '../Components/Endpoints';

export interface BookListEditProps {
    token: string | null;
    openDialoge: boolean;
}
 
export interface BookListEditState {
  listname: string;
  listdescription: string; 
//   open: boolean;
  openDialoge: boolean;
 
}
 
class BookListEdit extends React.Component<BookListEditProps, BookListEditState> {
    handleClose: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = () => {this.setState({openDialoge: false})};
    handleOpen: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = () => {
    //   this.setState({open: true})
    }
    
    constructor(props: BookListEditProps) {
        super(props);
        this.state = { 
            listname: "", 
        listdescription: "", 
        openDialoge: this.props.openDialoge,  };
    }

    onSubmit() {
        const body: RequestBodyBookListUpdate = {
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
        const requestOptions = { method: "PUT", headers: booklistHeaders };
        fetch(Endpoints.authorization.bookListUpdate)
          .then((res: any) => res.json())
          .then((json) => console.log(json));
      }

    render() { 
        return ( 
            <div>
      <Button variant="outlined" color="primary" onClick={this.handleOpen}>
        Update Book List
      </Button>
      <Dialog open={this.state.openDialoge} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Book List</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Use this form to update book list information.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Book List Name"
            type="string"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Book List Description"
            type="string"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={this.onSubmit} color="primary">
            Update
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
           
         );
    }
}
 
export default BookListEdit;
//requests & responses go down here
export interface ResponseBodyBookListUpdate {
    id: number;
    listname: string;
    listdescription: string;
    owner: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface RequestBodyBookListUpdate {
    booklist: BookList;
  }
  export interface BookList {
    listname: string;
    listdescription: string;
  }
  