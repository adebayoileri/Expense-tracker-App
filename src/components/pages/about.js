import React, { Component } from 'react'
import '../../App.css';
import 'react-fontawesome';
import col from '../../img/col.png'

class about extends Component {
    render() {
        return (
            <div className="container">
            <h1 className="text-center mt-40">About Expense Tracker App</h1>
            <img src={col} style={{width:'100%',height:'350px auto'}}alt="card and money phone also"/>
       <section className="boxes">
    <div className="box" style={{background:'#39f'}}>
      <h3>Get a quick overview</h3>
      <p>about your total incomes and expenses at a glance and in one place.</p>
    </div>
    <div className="box" style={{background:'coral'}}>
      <h3>Have perfect control</h3>
      <p>over all your cash expenses, bank accounts, E-Wallets and crypto wallets.</p>
    </div>
    <div className="box" style={{background:'lightgreen'}}>
      <h3>Track your cash flow</h3>
      <p>add your cash expenses,card transaction and crypto wallet for complete overview of your cashflow</p>
    </div>
    <div className="box" style={{background:'crimson'}}>
      <h3>Understand your financial habits</h3>
      <p>See where your money goes and come from </p>
    </div>
  </section>
</div>
        )
    }
}

export default about
