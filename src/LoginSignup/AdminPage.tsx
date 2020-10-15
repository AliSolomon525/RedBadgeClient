import React from "react";

export interface AdminPageProps {
    
}
 
export interface AdminPageState {
    
}

//method for fetch getAllUsers and delete functionality
 
class AdminPage extends React.Component<AdminPageProps, AdminPageState> {
    constructor(props: AdminPageProps) {
        super(props);
        this.state = { AdminPageInfo: [] };
    }
    render() { 
        return ( <div>Table Here w/ Delete Button</div> );
    }
}
 
export default AdminPage;