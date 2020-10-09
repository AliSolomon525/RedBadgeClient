import React from 'react'

export interface BookEditProps {
    token: string;
}
 
export interface BookEditState {
    date: string;
    title: string;
    author: string;
    cover: string;
    owner: number | string;
    booklist: number | string;
}
 
class BookEdit extends React.Component<BookEditProps, BookEditState> {
    constructor(props: BookEditProps) {
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