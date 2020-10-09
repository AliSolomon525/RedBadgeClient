import React from 'react'
import { Endpoints } from '../Components/Endpoints';


export interface BookCreateProps {
    token: string;
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
    constructor(props: BookCreateProps) {
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
          .then((json: ResponseBook) => console.log(json));
      }


    render() { 
        return ( 
            <div>

            </div>
         );
    }
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