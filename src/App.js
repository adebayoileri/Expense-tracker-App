import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import editExpense from './components/editExpense';
import createExpense from './components/Createexpense';
import expenseList from './components/expenseList';
import login from './components/pages/loginUser';
import signup from './components/pages/signUpUser';
import about from './components/pages/about';
import './App.css';
import money from './img/moneysvg.png';


function App() {
  return (
    <Router>
    <NavBar/>
    <Route exact path="/" render={props =>(
      <React.Fragment>
      <div className="container" style={{padding:'1em'}}>
            <h1 className="text-center mt-40" >Welcome to the Expense tracker App</h1>
            <div className="gridcont-a">
            <img className="gridcont-b" src={money} alt="Moneypng" style={{maxwidth:'280px'}}/>
            <h2 className="gridcont-c text-center mt-50">Save Your Spendings</h2>
            </div>
      </div>
      </React.Fragment>
    )} />
    <Route path="/expense/update/:id" component={editExpense}/>
    <Route path="/create" component={createExpense}/>
    <Route path="/about" component={about} />
    <Route path="/expenses" component={ expenseList} />
    <Route path="/auth/login" component={login} />
    <Route path="/signup" component={signup} />
    <Footer/>
    </Router>
  );
}

export default App;
