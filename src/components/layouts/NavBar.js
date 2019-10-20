import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
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
    <li className="nav-item">
      <Link to="/auth/login" className="nav-link outline-white">Login</Link>
    </li>
    <li className="nav-item">
      <Link to="/signup" className="nav-link outline-white">Signup</Link>
    </li>
  </ul>
</nav>
    )
}
