import React, { useState } from 'react'
import BookCreate from './BookCreate';
import BookCard from './BookCard';
import BookEdit from './BookEdit'
import { Endpoints } from '../Components/Endpoints';
import { NotificationConfirmationNumber } from 'material-ui/svg-icons';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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

export interface BookIndexProps {
    token: string | null;
    booklistId: number;
}
 
export interface BookIndexState {
    openDialogCreate: boolean;
    openDialogUpdate: boolean;
    bookData: any;
    title: string;
    author: string;
    cover: string;
    booklist: number | string;
    date: number | string;
    owner: number | string;
    cardData: any;
}
 
class BookIndex extends React.Component<BookIndexProps, BookIndexState> {
  cardData: any;
    constructor(props: BookIndexProps) {
        super(props);
        this.state = { 
            openDialogCreate: false,
            openDialogUpdate: false,
            bookData: [],
            cardData: {
            id: "",
            title: "",
            author: "",
            cover: "",
            date: "",
            booklist: "",
            owner: "",
          },
            title: "",
            author: "",
            cover: "",
            date: "",
            booklist: "",
            owner: ""

        };
    }
//FOR BOOKEDIT
    onUpdateSubmit=()=> {
            console.log(this.state.bookData)
            const body: RequestBodyBook = {
              book: {
                title: this.state.cardData.title,
                author: this.state.cardData.author,
                cover: this.state.cardData.cover,
                date: this.state.cardData.date,
                booklist: this.state.cardData.booklist,
                owner: this.state.cardData.owner,
                id: this.state.cardData.id,
              },
            };
            let bookHeaders = new Headers();
            bookHeaders.append("Content-Type", "application/json");
            bookHeaders.append(
              "Authorization",
              this.props.token != null ? this.props.token : ""
            );
            const requestOptions = { method: "PUT", headers: bookHeaders , body: JSON.stringify(body)};
            fetch(Endpoints.authorization.bookUpdate+this.state.cardData.id, requestOptions)
              .then((res: any) => res.json())
              .then((json) => this.onLoad());
          }
        
//LOADS THE GET AUTOMATICALLY ON PAGE
    onLoad = () => {
        let bookHeaders = new Headers();
        bookHeaders.append("Content-Type", "application/json");
        bookHeaders.append(
          "Authorization",
          this.props.token != null ? this.props.token : ""
        );
        const requestOptions = { method: "GET", headers: bookHeaders };
        fetch(Endpoints.authorization.getAllBooks, requestOptions)
          .then((res: any) => res.json())
          .then((json: ResponseBook) => {console.log(json)
        this.setState({bookData: json})});
      }

//CREATES A BOOK TO ADD TO THE BOOKLIST
onSubmit(event: any) {
  const body: RequestBodyBook = {
    book: {
      id: this.state.cardData.id,
      date: this.state.cardData.date,
      title: this.state.cardData.title,
      author: this.state.cardData.author,
      cover: this.state.cardData.cover,
      owner: this.state.cardData.owner,
      booklist: this.props.booklistId
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
      this.onLoad()
      this.onCreate()});
}

componentDidMount(){
    this.onLoad();
}

updateIndexStateBookData = (value: any) =>{
      this.setState({cardData: value})
      console.log(value);
    };
    render() { 
        return (
            <div>
            <BookEdit cardData={this.state.cardData} token={this.props.token} onUpdate={this.onUpdate} openDialog={this.state.openDialogUpdate} updateIndexStateCardData={this.updateIndexStateBookData} onUpdateSubmit={this.onUpdateSubmit}/> 

            <BookCreate booklistId={this.props.booklistId} onLoad={this.onLoad} onCreate={this.onCreate} token={this.props.token} openDialog={this.state.openDialogCreate}/>

            {this.state.bookData.filter((book: ResponseBook)=> book.booklist==this.props.booklistId).map((book: ResponseBook) => <BookCard onLoad={this.onLoad} onUpdate={this.onUpdate} onUpdateSubmit={this.onUpdateSubmit} token={this.props.token} author={book.author} title={book.title} cover={book.cover} id={book.id} date={book.date} card={book}/>
            )}
            </div>
         );
    }  
    onUpdate = (card: any) => {
        this.setState({openDialogUpdate: !this.state.openDialogUpdate, cardData: card})
        console.log(this.state.openDialogUpdate);
    }
    onCreate = () => {
      this.setState({openDialogCreate: !this.state.openDialogCreate})
      console.log(this.state.openDialogCreate)
    }
    }

 
export default BookIndex;

export interface RequestBodyBook {
    book: Book;
  }

export interface Book {
    id: number;
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