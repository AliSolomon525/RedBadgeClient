import * as React from "react";
import BookListCreate from "./BookListCreate";
import BookListTable from "./BookListTable";
import BookListEdit, { RequestBodyBookListUpdate } from "./BooklistEdit";
import { Endpoints } from "../Components/Endpoints";

export interface BookListIndexProps {
  token: string | null;
  // handleClick: any;
}

export interface BookListIndexState {
  listname: string;
  listdescription: string;
  openDialoge: boolean;
  bookListData: any;
  rowData: any;

  }
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
        listname:"",
        listdescription: "",
      },
      //fetch & store in state variable like booklistdata
      //next, pass that down to the child component
      //collect on this page the booklistdata 
    };
  }
  onUpDateSubmit=()=> {console.log(this.state.rowData)
    const body: RequestBodyBookListUpdate = {
      booklist: {
        listname: this.state.rowData.listname,
        listdescription: this.state.rowData.listdescription,
      },
    };
  
    let booklistHeaders = new Headers();
    booklistHeaders.append("Content-Type", "application/json");
    booklistHeaders.append(
      "Authorization",
      this.props.token != null ? this.props.token : ""
    );const requestOptions = { method: "PUT", headers: booklistHeaders , body: JSON.stringify(body)};fetch(Endpoints.authorization.bookListUpdate+this.state.rowData.id, requestOptions).then((res: any) => res.json()).then((json) => this.onLoad());}

    onLoad=()=> {
    
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

onUpdate=(row: any)=>{
  this.setState({openDialoge: !this.state.openDialoge, rowData: row })
}

updateIndexStateRowData = (value: any) =>{
  this.setState({rowData: value})
  console.log(value)};
  render() {
    const { classes }: any = this.props;
    return <div>
      <BookListEdit rowData={this.state.rowData} updateIndexStateRowData={this.updateIndexStateRowData} onUpdate={this.onUpdate} token={this.props.token} openDialoge={this.state.openDialoge} onUpDateSubmit={this.onUpDateSubmit}/>
      <BookListCreate token={this.props.token} onLoad={this.onLoad}/>
      <BookListTable onUpdate={this.onUpdate} rows={this.state.bookListData} token={this.props.token} onLoad={this.onLoad}/>
    </div>;
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