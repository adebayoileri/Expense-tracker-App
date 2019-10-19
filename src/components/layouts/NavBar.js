import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <Link to="/" class="navbar-brand">Expense Tracker App </Link>

  <ul class="navbar-nav">
    <li class="nav-item">
      <Link to="/" class="nav-link">Home</Link>
    </li>
    <li className="nav-item">
      <Link to="/about" className="nav-link">About</Link>
    </li>
    <li className="nav-item">
      <Link  to="/expenses" className="nav-link">Expenses</Link>
    </li>
    <li className="nav-item">
      <Link to="/auth/login" className="nav-link">Login</Link>
    </li>
    <li className="nav-item">
      <Link to="/signup" className="nav-link">Signup</Link>
    </li>
  </ul>
</nav>
    )
}
