import * as React from 'react';
import { Endpoints } from '../Components/Endpoints';
import AdminPage, { Username } from './AdminPage';

export interface AdminPageIndexProps {
    token: string | null;
}
 
export interface AdminPageIndexState {
    rows: any;
}
 
class AdminPageIndex extends React.Component<AdminPageIndexProps, AdminPageIndexState> {
    constructor(props: AdminPageIndexProps) {
        super(props);
        this.state = {
            rows: []
        };
    }

    onLoad=()=> {
        let AdminPageHeaders = new Headers();
        AdminPageHeaders.append("Content-Type", "application/json");
        AdminPageHeaders.append(
          "Authorization",
          this.props.token != null ? this.props.token : ""
        );
        const requestOptions = { method: "GET", headers: AdminPageHeaders};
        fetch(Endpoints.authorization.getAllUsers, requestOptions)
          .then((res: any) => res.json())
          .then((json: SignupResponse) => this.setState({rows:json}));
        }
    
    componentDidMount(){
        this.onLoad();
    }

    render() { 
        return ( <div><AdminPage onLoad={this.onLoad} token={this.props.token} rows={this.state.rows}/></div> );
    }
}
 
export default AdminPageIndex;

export interface SignupResponse {
    username: Username;
    message: string;
    sessionToken: string;
  }

