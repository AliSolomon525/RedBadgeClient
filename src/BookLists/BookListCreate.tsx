import * as React from "react";
// import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// //import InputTextFields from "../inputs/InputTextFields";
// import Modal from "@material-ui/core/Modal";
// //if we use arrow functions we will never have to deal with binding - state & binding - so use arrow functions in methods

// //props are what we want our function and component to take in; props are passed INTO a component;
// //props handled OUTSIDE the component & must be updated outside the component
// //props when we want to display info in a component without hard-coding it - essentially a varible to a function
// export interface BookListCreateProps {
//     listname: string;
//     listdescription: string;
//     books: string; //this is not in server model; but will need to connect books to the lists
// }
//  //state is handled inside the component & we can update it inside the component
//  //state is when we need to re-render and update app based on something user has done
//  //things we want to change need to stay in state
// export interface BookListCreateState {
//     booklistInfo: string;
// }

// class BookListCreate extends React.Component<BookListCreateProps, BookListCreateState> {
//     constructor(props: BookListCreateProps) {
//         super(props);
//         this.state = {booklistInfo : ""  };
//     }
// componentDidUpdate(prevProps: BookListCreateProps) {
//     if (this.props.listname !== prevProps.listname) {
//         fetch(
//             //what goes here if anything??
//             //endpoint for create a booklist
//         )
//         .then((res)=>res.json())
//         .then((data: JSON)=> {
//             console.log(data);
//             this.setState({booklistInfo: //what goes here??.createObject(data)})
//         })
//     }
// }

//     render() {
//         return (
//             <div>
//             <button type="button" onClick={handleOpen}>
//             Create a Booklist
//             </button>
//             <Modal>
//             open={open}
//             onClose={handleClose}
//             </Modal>
//             </div>
//          );
//     }
// }

// export default BookListCreate;
