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
    cardData: any;
  }
 
export interface BookEditState {
    id: any; 
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
            id: this.props.cardData.id,
            title: this.props.cardData.title,
            author: this.props.cardData.author,
            cover: this.props.cardData.cover,
            owner: this.props.cardData.owner,
            booklist: this.props.cardData.booklist,
            openDialog: this.props.openDialog,
          };
    }

//TO CHANGE THE TITLE
  handleChangeTitle =(e:any) => {
      let BookObject ={
          id: this.props.cardData.id,
          title: e.target.value,
          author: this.props.cardData.author,
          cover: this.props.cardData.cover,
          owner: this.props.cardData.owner,
          booklist: this.props.cardData.booklist,
      }
      this.props.updateIndexStateCardData(BookObject)
  }

  //TO CHANGE THE AUTHOR
  handleChangeAuthor = (e:any) => {
    let BookObject = {
      id: this.props.cardData.id,
      title: this.props.cardData.title,
      author: e.target.value,
      cover: this.props.cardData.cover,
      date: this.props.cardData.date,
      owner: this.props.cardData.owner,
      booklist: this.props.cardData.booklist,
    }
    this.props.updateIndexStateCardData(BookObject)
  }


  //TO CHANGE THE DATE
  handleChangeDate = (e:any) => {
    let BookObject = {
      id: this.props.cardData.id,
      title: this.props.cardData.title,
      author: this.props.cardData.author,
      cover: this.props.cardData.cover,
      date: e.target.value,
      owner: this.props.cardData.owner,
      booklist: this.props.cardData.booklist,
    }
    this.props.updateIndexStateCardData(BookObject)
  }

    render() { 
        return ( 
            <div>
              <div>
          <Dialog open={this.props.openDialog} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Book Information</DialogTitle>
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
                value={this.props.cardData != undefined ?  this.props.cardData.title: ""}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Author"
                type="author"
                fullWidth
                onChange={(e) => this.handleChangeAuthor(e)}
                value={this.props.cardData != undefined ?  this.props.cardData.author: ""}
              />
                <TextField
                autoFocus
                margin="dense"
                type="date"
                fullWidth
                onChange={(e) => this.handleChangeDate(e)}
                value={this.props.cardData != undefined ?  this.props.cardData.date: Date}
              />
    
            </DialogContent>
            <DialogActions>
              <Button onClick={()=> {this.props.onUpdate(); this.props.onUpdateSubmit()}}>
                Update Book
              </Button>
              <Button onClick={() => this.props.onUpdate()}>
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