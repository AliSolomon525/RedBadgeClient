import React from 'react'
import BookCreate from './BookCreate';
import BookCard from './BookCard';
import BookEdit from './BookEdit'
import { Endpoints } from '../Components/Endpoints';

export interface BookIndexProps {
    token: string | null;
}
 
export interface BookIndexState {
    openDialog: boolean;
    bookData: any;
}
 
class BookIndex extends React.Component<BookIndexProps, BookIndexState> {
    constructor(props: BookIndexProps) {
        super(props);
        this.state = { 
            openDialog: false,
            bookData: [],
        };
    }

fakeData =[{
    id: 3,
    title: "Catcher in the Rye",
    author: "JD Salinger",
    cover: "www.xyz.com",
    date: '10/13/2020',
},
{
    id: 3,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "JK Rowling",
    cover: "www.xyz.com",
    date: '10/13/2020',
},
{
    id: 3,
    title: "A Deadly Education",
    author: "Naomi Novik",
    cover: "www.xyz.com",
    date: '10/13/2020',
}]

    onLoad = () => {
        console.log(this.props.token);
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

    render() { 
        return (
            <div>
            <BookEdit token={this.props.token} onUpdate={this.onUpdate} openDialog={this.state.openDialog}/> 
            <BookCreate token={this.props.token} openDialog={this.state.openDialog}/>
            {this.state.bookData.map((book: ResponseBook) => <BookCard token={this.props.token} author={book.author} title={book.title} cover={book.cover} date={book.date} /> )}
            </div>
         );
    }  //create a method to pass info to children
    onUpdate = () => {
        this.setState({openDialog: !this.state.openDialog})
        console.log(this.state.openDialog);
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

//card needs to know id of book so I need to pass that as a prop, go to Card interface and pass as prop

//need to figure out a way to get the update to toggle the open

