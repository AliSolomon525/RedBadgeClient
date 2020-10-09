//BookListIndex is responsible for conditionally loading
//the other 3 components (BookList Create, Edit, and Table)
//BookListIndex is responsible for the splash page which users see after login
import * as React from "react";
//import BookListCreate from "./BookLists/BookListCreate";
//import BookListTable from "./BookLists/BookListTable";
//import BookListEdit from "./BookLists/BookListEdit";
import { Endpoints } from "../Components/Endpoints";

export interface BookListIndexProps {
  token: string | null;
  //updateToken: any;
}

export interface BookListIndexState {
  listname: string;
  listdescription: string;
}
// [listname: string, listdescription: string]
class BookListIndex extends React.Component<
  BookListIndexProps,
  BookListIndexState
> {
  constructor(props: BookListIndexProps) {
    super(props);
    this.state = {
      listname: "",
      listdescription: "",
    };
  }
  //inside a method we can use vanilla JS
  onSubmit() {
    const body: RequestBodyBookList = {
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
    const requestOptions = { method: "GET", headers: booklistHeaders };
    fetch(Endpoints.authorization.getBookListById)
      .then((res: any) => res.json())
      .then((json) => console.log(json));
  }
  //fetch(Endpoints.authorization.getBookListById).then((res:any)=> res.json()).then(json=> console.log(json))
  //}
  render() {
    return <div>Hello World</div>;
  }
}

export default BookListIndex;

//requests & responses go down here
export interface ResponseBodyBookList {
  id: number;
  listname: string;
  listdescription: string;
  owner: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface RequestBodyBookList {
  booklist: BookList;
}
export interface BookList {
  listname: string;
  listdescription: string;
}
