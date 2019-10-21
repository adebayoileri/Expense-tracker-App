import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <Link to="/" className="navbar-brand">Expense Tracker App </Link>
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/" className="nav-link">Home</Link>
    </li>
    <li className="nav-item">
      <Link to="/about" className="nav-link">About</Link>
    </li>
    <li className="nav-item">
      <Link  to="/expenses" className="nav-link">Expenses</Link>
    </li>
  </ul>
  <button className="btn btn-sm align-middle btn-primary ml-3 order-lg-last" type="button"><Link to="/auth/login" className="text-white">Login</Link></button>
  <button className="btn btn-sm align-middle btn-primary ml-3 order-lg-last" type="button"><Link to="/auth/signup" className="text-white">Signup</Link></button>
</nav>
    )
}
