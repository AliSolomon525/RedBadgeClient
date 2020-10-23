import * as React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface BookListEditProps {
  token: string | null;
  openDialoge: boolean;
  onUpdate: any;
  rowData: any;
  updateIndexStateRowData: any;
  onUpDateSubmit: any;
}
 
export interface BookListEditState {
  listname: string;
  listdescription: string; 
  openDialoge: boolean;
}
 
class BookListEdit extends React.Component<BookListEditProps, BookListEditState> {
    // handleClose: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = () => {this.setState({openDialoge: false})};
    handleOpen: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined = () => {
    //   this.setState({open: true})
    }
    
    constructor(props: BookListEditProps) {
        super(props);
        this.state = { 
            listname: this.props.rowData.listname, 
        listdescription: this.props.rowData.listdescription, 
        openDialoge: this.props.openDialoge,
      };
    }

//FOR THE LIST NAME!
handleChangeListName = (e:any)=>{
  let RowObject = {
    id: this.props.rowData.id,
    listname: e.target.value,
    listdescription: this.props.rowData.listdescription,
  }
  this.props.updateIndexStateRowData(RowObject)
}
//FOR THE LIST DESCRIPTION!
handleChangeListDescription = (e:any)=>{
  let RowObject = {
    id: this.props.rowData.id,
    listname: this.props.rowData.listname,
    listdescription: e.target.value,
  }
  this.props.updateIndexStateRowData(RowObject)
}
render() { 
        return ( 
            <div>
      {/* <Button variant="outlined" color="primary" onClick={this.handleOpen}>
        Update Book List
      </Button> */}
      <Dialog open={this.props.openDialoge} onClose={this.props.onUpdate} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Book List</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Use this form to update book list information.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Book List Name"
            type="string"
            fullWidth
            onChange={(e) => this.handleChangeListName(e)}
            value={this.props.rowData != undefined ?  this.props.rowData.listname: ""}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Book List Description"
            type="string"
            fullWidth
            onChange={(e) => this.handleChangeListDescription(e)}
                value={this.props.rowData != undefined ? this.props.rowData.listdescription: ""}
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={()=>{
            this.props.onUpdate()
          this.props.onUpDateSubmit()
        
        
        }} color="primary">
            Update
          </Button>
          <Button onClick={()=>{
            this.props.onUpdate()
          this.props.onUpDateSubmit()
        
        
        }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
           
         );
    }
}
 
export default BookListEdit;
//requests & responses go down here
export interface ResponseBodyBookListUpdate {
    id: number;
    listname: string;
    listdescription: string;
    owner: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface RequestBodyBookListUpdate {
    booklist: BookList;
  }
  export interface BookList {
    listname: string;
    listdescription: string;
  }