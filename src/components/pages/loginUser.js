import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';


export class loginUser extends Component {
    render() {
        return (
            <div className="container">
                <form>
  <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="password">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Password" required/>
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
