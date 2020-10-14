import * as React from "react";
import BookListCreate from "./BookListCreate";
import BookListTable from "./BookListTable";
import BookListEdit from "./BooklistEdit";
import { Endpoints } from "../Components/Endpoints";

export interface BookListIndexProps {
  token: string | null;
  //updateToken: any;
}

export interface BookListIndexState {
  listname: string;
  listdescription: string;
  openDialoge: boolean;
  bookListData: any;
   rowData: any;
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
      openDialoge: false,
      bookListData: [],
      rowData: {
        listname:"NAME",
        listdescription: "",
      },
      //fetch & store in state variable like booklistdata
      //next, pass that down to the child component
      //collect on this page the booklistdata 
    };
  }
  // fakeBookData=[
  //   { id: 3,
  // listname: "1",
  // listdescription: "uno"},
  //   { id: 3,
  //   listname: "College List",
  //   listdescription: "dos"},
  //   { id: 3,
  //     listname: "Fun REading",
  //     listdescription: "tres"}]
      
  //inside a method we can use vanilla JS
  onLoad() {
    console.log(this.props.token)
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
    fetch(Endpoints.authorization.getAllBookLists, requestOptions)
      .then((res: any) => res.json())
      .then((json) => {console.log(json); 
        this.setState({bookListData: json})});
  };

componentDidMount(){
  this.onLoad();
}

  render() {
    const { classes }: any = this.props;
    return <div>
      <BookListEdit rowData={this.state.rowData} onUpdate={this.onUpdate} token={this.props.token} openDialoge={this.state.openDialoge}/>
      <BookListCreate token={this.props.token}/>
      <BookListTable onUpdate={this.onUpdate} rows={this.state.bookListData} token={this.props.token}/>
    </div>;
  }
  //create a method to pass on to the children
  onUpdate=(row: any)=>{
    this.setState({openDialoge: !this.state.openDialoge, rowData: row })
    console.log(row.listname)
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
