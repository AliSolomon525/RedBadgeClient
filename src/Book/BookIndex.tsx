import React from 'react'
import BookCreate from './BookCreate';
import BookCard from './BookCard';

export interface BookIndexProps {
    token: string;
}
 
export interface BookIndexState {
    date: string;
    title: string;
    author: string;
    cover: string;
    owner: number | string;
    booklist: number | string;
}
 
class BookIndex extends React.Component<BookIndexProps, BookIndexState> {
    constructor(props: BookIndexProps) {
        super(props);
        this.state = { 
            date: "",
            title: "",
            author: "",
            cover: "",
            owner: "",
            booklist: ""
        };
    }

    render() { 
        return (
            <div>
            <BookCreate token={this.props.token}/>
            <BookCard token={this.props.token}/>
            </div>
         );
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