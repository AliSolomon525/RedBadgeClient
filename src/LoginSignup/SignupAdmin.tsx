import React from 'react'


export interface SignupAdminProps {
    name?: any;
    value?: any;
}
 
export interface SignupAdminState {
    firstName : string,
    lastName: string,
    username : string,
    passwordHash : string,
}
 
class SignupAdmin extends React.Component<SignupAdminProps, SignupAdminState> {
    constructor(props: SignupAdminProps) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            username : '',
            passwordHash : '',
    }    
    }
    handleChange = (event : any) => {
        event.preventDefault();
        const { value } = event.target;
        console.log(this.state) ;
    }
    handleSubmit = (event : any) => {
    //fetch
    };

    render() {
        return (
          <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>Sign Up Admin</h2>
               <form onSubmit={this.handleSubmit} noValidate >
                  <div className='fullName'>
                     <label htmlFor="firstName">First Name: </label>
                     <input type='text' name='firstName' onChange={this.handleChange}/>
                  </div>
                  <div className='lastName'>
                     <label htmlFor="lastName">Last Name: </label>
                     <input type='text' name='lastName' onChange={this.handleChange}/>
                  </div>
                  <div className='username'>
                     <label htmlFor="username">Email: </label>
                     <input type='email' name='username' onChange={this.handleChange}/>
                  </div>
                  <div className='password'>
                     <label htmlFor="password">Password: </label>
                     <input type='password' name='password' onChange={this.handleChange}/>
                  </div>              
                  <div className='submit'>
                     <button>Register Me</button>
                  </div>
             </form>
         </div>
      </div>
     );
    }
}
 
export default SignupAdmin;