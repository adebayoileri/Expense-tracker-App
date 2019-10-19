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
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" required/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
}

export default loginUser;
