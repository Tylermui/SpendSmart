import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';



export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <div className="navbar-nav">
          <a className="nav-item nav-link" id="home" href="/">SpendSmart</a>
          <a className="nav-item nav-link" id="logout" href="/logout">Logout</a>
          <Link className="nav-item nav-link" to="/AddIncome">Add Income</Link>
        </div>
      </div>
    </nav>  
    )
}
