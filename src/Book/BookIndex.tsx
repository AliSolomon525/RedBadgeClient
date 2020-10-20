import React from 'react'
import BookCreate from './BookCreate';
import BookCard from './BookCard';
import BookEdit from './BookEdit'
import { Endpoints } from '../Components/Endpoints';

export interface BookIndexProps {
    token: string | null;
}
 
export interface BookIndexState {
    openDialogCreate: boolean;
    openDialogUpdate: boolean;
    bookData: any;
    id: number;
    title: string;
    author: string;
    cover: string;
    booklist: number | string;
    date: number| string;
    owner: number | string;
}
 
class BookIndex extends React.Component<BookIndexProps, BookIndexState> {
    constructor(props: BookIndexProps) {
        super(props);
        this.state = { 
            openDialogCreate: false,
            openDialogUpdate: false,
            id: -1,
            bookData: [],
            title: "",
            author: "",
            cover: "",
            date: "",
            booklist: "",
            owner: "",
        };
    }
//FOR BOOKEDIT
    onUpdateSubmit=()=> {
            console.log(this.state.bookData)
            const body: RequestBodyBook = {
              book: {
                title: this.state.bookData.title,
                author: this.state.bookData.author,
                cover: this.state.bookData.cover,
                date: this.state.bookData.date,
                booklist: this.state.bookData.booklist,
                owner: this.state.bookData.owner,
              },
            };
            let bookHeaders = new Headers();
            bookHeaders.append("Content-Type", "application/json");
            bookHeaders.append(
              "Authorization",
              this.props.token != null ? this.props.token : ""
            );
            const requestOptions = { method: "PUT", headers: bookHeaders , body: JSON.stringify(body)};
            fetch(Endpoints.authorization.bookUpdate+this.state.bookData.id, requestOptions)
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

componentDidMount(){
    this.onLoad();
}

updateIndexStateBookData = (value: any) =>{
      this.setState({bookData: value})
      console.log(value);
    };
    render() { 
        return (
            <div>
            {/* <BookEdit token={this.props.token} onUpdate={this.onUpdate} openDialog={this.state.openDialog}/> 
            <BookCreate token={this.props.token} openDialog={this.state.openDialog} onLoad={this.onLoad} />
            {this.state.bookData.map((book: ResponseBook) => <BookCard token={this.props.token} author={book.author} title={book.title} cover={book.cover} date={book.date} /> )} */}
            <BookEdit bookData={this.state.bookData} token={this.props.token} onUpdate={this.onUpdate} openDialog={this.state.openDialogUpdate} updateIndexStateCardData={this.updateIndexStateBookData} onUpdateSubmit={this.onUpdateSubmit}/> 
            <BookCreate onLoad={this.onLoad} onCreate={this.onCreate} token={this.props.token} openDialog={this.state.openDialogCreate}/>
            {this.state.bookData.map((book: ResponseBook) => <BookCard onLoad={this.onLoad} onUpdate={this.onUpdate} onUpdateSubmit={this.onUpdateSubmit} token={this.props.token} author={book.author} title={book.title} cover={book.cover} id={this.state.id} date={book.date} //booklist={book.booklist} owner={book.owner} 
            />
            )};
            </div>
         );
    }  
    onUpdate = () => {
        this.setState({openDialogUpdate: !this.state.openDialogUpdate})
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