import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export class signUpUser extends Component {
    render() {
        return (
            <React.Fragment>
                     <div className="container">
                <form>
  <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Create Password</label>
    <input type="password" className="form-control" id="password" placeholder="Enter a Password" required/>
  </div>
  <button type="submit"className="btn btn-primary">Sign Up</button>
</form>
            </div>
            </React.Fragment>
        )
    }
}

export default signUpUser
