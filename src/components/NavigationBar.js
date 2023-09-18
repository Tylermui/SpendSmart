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
        <Link className="nav-item nav-link" to="/">SpendSmart</Link>
        <Link className="nav-item nav-link" to="/AddExpense">Add Expense</Link>
        <Link className="nav-item nav-link" to="/AddIncome">Add Income</Link>

        <Link className="nav-item nav-link to-right" to="/Logout">Logout</Link>
        </div>
      </div>
    </nav>  
    )
}
