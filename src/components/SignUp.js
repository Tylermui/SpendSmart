import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';



export const SignUp = () => {
  return (
    <form method="POST">
    <h3 align="center">Sign Up</h3>
    <div class="form-group">
      <label for="email">Email Address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        name="email"
        placeholder="Enter email"
      />
    </div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        name="firstName"
        placeholder="Enter first name"
      />
    </div>
    <div class="form-group">
      <label for="password1">Password</label>
      <input
        type="password"
        class="form-control"
        id="password1"
        name="password1"
        placeholder="Enter password"
      />
    </div>
    <div class="form-group">
      <label for="password2">Password (Confirm)</label>
      <input
        type="password"
        class="form-control"
        id="password2"
        name="password2"
        placeholder="Confirm password"
      />
    </div>
    <br />
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    )
}
