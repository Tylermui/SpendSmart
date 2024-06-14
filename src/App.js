import './App.css';
import { AddIncomePage } from './components/pages/AddIncomePage';
import { HomePage } from './components/pages/HomePage';
import { AddExpensePage } from './components/pages/AddExpensePage';
import { LandingPage } from './components/pages/LandingPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    <Router>
      {/* This how the app will go to different routes */}
      <Routes>
        <Route exact path='/' Component={LandingPage} />
        <Route exact path='/Home' Component={HomePage} />
        <Route exact path='/AddExpense' Component={AddExpensePage} />
        <Route exact path='/AddIncome' Component={AddIncomePage} />
        {/* <Route exact path='/Logout' Component={LogoutPage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
