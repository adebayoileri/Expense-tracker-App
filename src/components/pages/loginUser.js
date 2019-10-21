import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';


export class loginUser extends Component {
  constructor(props){
    super(props);
    this.onSubmit =this.onSubmit.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);

    this.state={
        email: '',
        password: '',
        login:false
    }
  }
  
    onSubmit(event){
      const user={
        email: this.state.email,
        password:this.state.password,
        login:true
    }
    event.preventDefault();
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
            <div className="container">
                <form onSubmit={this.onSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control"  id="email" value={this.state.email} onChange={this.onChangeEmail}  placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} id="password" placeholder="Password" required/>
  </div>

  <div className="form-group">
      <input type="checkbox" className="form-check-input" id="checkbox"/>
      <label htmlFor="Rememberpass">Remember Password</label>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
}

export default loginUser;
