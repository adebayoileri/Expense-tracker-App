import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export class signUpUser extends Component {
  constructor(props){
    super(props);
    this.onSubmit =this.onSubmit.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);

    this.state={
        email: '',
        password: '',
    }
  }
  
    onSubmit(event){
      const user={
        email: this.state.email,
        password:this.state.password,
    }
    this.setState({
      email: '',
      password:''
    })
    event.preventDefault();
    axios.post('http://localhost:4300/api/v1/user/auth/signup',user)
    .then(res => console.log(res.data))
    .catch(err=>console.log(`Error:${err}`));
   console.log(user); 
  }
  onChangeEmail(e){
    this.setState({
      email:e.target.value
    })
  }
  onChangePassword(e){
    this.setState({
      password:e.target.value
    })
  }
    render() {
        return (
            <React.Fragment>
                     <div className="container">
                <form onSubmit={this.onSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Create Password</label>
    <input type="password" className="form-control" id="password" value={this.state.password}  onChange={this.onChangePassword} placeholder="Enter a Password" required/>
  </div>
  <button type="submit"className="btn btn-primary">Sign Up</button>
</form>
            </div>
            </React.Fragment>
        )
    }
}

export default signUpUser
