import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface BookEditProps {
    token: string | null;
    openDialog: boolean;
    onUpdate: any;
    updateIndexStateCardData: any;
    onUpdateSubmit: any;
    bookData: any;
}
 
export interface BookEditState {
    title: string;
    author: string;
    cover: string;
    owner: number | string;
    booklist: number | string;
    openDialog: boolean;
}
 
class BookEdit extends React.Component<BookEditProps, BookEditState> {
  // handleClose: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = () => {this.setState({openDialog: false})}
  handleOpen: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = () => {
    // this.setState({open: true})
  }
    constructor(props: BookEditProps) {
        super(props);
        this.state = { 
            title: this.props.bookData.title,
            author: this.props.bookData.author,
            cover: this.props.bookData.cover,
            owner: this.props.bookData.owner,
            booklist: this.props.bookData.booklist,
            openDialog: this.props.openDialog,
          };
    }

//TO CHANGE THE TITLE
  handleChangeTitle =( e:any ) => {
      let BookObject ={
          id: this.props.bookData.id,
          title: e.target.value,
          author: this.props.bookData.author,
          cover: this.props.bookData.cover,
          owner: this.props.bookData.owner,
          booklist: this.props.bookData.booklist,
      }
      this.props.updateIndexStateCardData(BookObject)
  }

  //TO CHANGE THE AUTHOR
  handleChangeAuthor = (e:any) => {
    let BookObject = {
      id: this.props.bookData.id,
      title: this.props.bookData.title,
      author: e.target.value,
      cover: this.props.bookData.cover,
      date: this.props.bookData.date,
      owner: this.props.bookData.owner,
      booklist: this.props.bookData.booklist,
    }
    this.props.updateIndexStateCardData(BookObject)
  }

  //TO CHANGE THE COVER
  handleChangeCover = (e:any) => {
    let BookObject = {
      id: this.props.bookData.id,
      title: this.props.bookData.title,
      author: this.props.bookData.author,
      cover: e.target.value,
      date: this.props.bookData.date,
      owner: this.props.bookData.owner,
      booklist: this.props.bookData.booklist,
    }
    this.props.updateIndexStateCardData(BookObject)
  }

  //TO CHANGE THE DATE
  handleChangeDate = (e:any) => {
    let BookObject = {
      id: this.props.bookData.id,
      title: this.props.bookData.title,
      author: this.props.bookData.author,
      cover: this.props.bookData.cover,
      date: e.target.value,
      owner: this.props.bookData.owner,
      booklist: this.props.bookData.booklist,
    }
    this.props.updateIndexStateCardData(BookObject)
  }

  // onUpdateSumbit() {
  //       const body: RequestBodyBook = {
  //         book: {
  //           date: this.state.bookData.date,
  //           title: this.state.bookData.title,
  //           author: this.state.bookData.author,
  //           cover: this.state.bookData.cover,
  //           owner: this.state.bookData.owner,
  //           booklist: this.state.bookData.booklist
  //         },
  //       };
  //       let bookHeaders = new Headers();
  //       bookHeaders.append("Content-Type", "application/json");
  //       bookHeaders.append(
  //         "Authorization",
  //         this.props.token != null ? this.props.token : ""
  //       );
  //       const requestOptions = { method: "PUT", headers: bookHeaders };
  //       fetch(Endpoints.authorization.bookUpdate, requestOptions)
  //         .then((res: any) => res.json())
  //         .then((json: ResponseBook) => console.log(json));
  //     }


    render() { 
        return ( 
            <div>
              <div>
          <Dialog open={this.props.openDialog} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update</DialogTitle>
            <DialogContent>
              <DialogContentText>
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="Title"
                type="string"
                fullWidth
                onChange={(e) => this.handleChangeTitle(e)}
                value={this.props.bookData != undefined ?  this.props.bookData.title: ""}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Author"
                type="author"
                fullWidth
                onChange={(e) => this.handleChangeAuthor(e)}
                value={this.props.bookData != undefined ?  this.props.bookData.author: ""}
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
                onChange={(e) => this.handleChangeCover(e)}
                value={this.props.bookData != undefined ?  this.props.bookData.cover: ""}
              />
                <TextField
                autoFocus
                margin="dense"
                label="Date"
                type="date"
                fullWidth
                onChange={(e) => this.handleChangeDate(e)}
                value={this.props.bookData != undefined ?  this.props.bookData.date: Date}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={()=> this.props.onUpdate()} color="primary">
                Update Book
              </Button>
              <Button color="primary">
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