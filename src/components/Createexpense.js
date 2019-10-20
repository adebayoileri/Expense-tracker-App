import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export class createexpense extends Component {
    state ={
        description:'',
        category:'',
        payment:'',
        amount:'',
        date:new Date()
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }
    onChangePayment(e){
        this.setState({
            payment:e.target.value
        });
    }
    onChangeAmount(e){
        this.setState({
            amount:e.target.value
        });
    }
    onChangeDate(date){ 
        this.setState({
            date: date
        });
    }
    onChangeCategory(e){
        this.setState({
            category:e.target.value
        });
    }

    onSubmit(e){
        e.prevent.Default();
        const expense = {
            description:this.state.description,
            payment:this.state.payment,
            category:this.state.category,
            amount:this.state.amount,
            date:this.state.date
        }
        console.log(expense); 
        window.location ='/expenses';
    }
    render() {
        return (
    <div className="container mt-60">
    <div className="alert alert-success" role="alert"> Expense Added </div>
    <h3 className="text-left mt-40">Add New Expense</h3>
    <br></br>

    <form>
    <div className="form-group">
    <label htmlFor="description">Description(Spent On):</label>
    <input type="text" className="form-control" id="description" value={this.state.description} onChange={this.onChangeDescription.bind(this)} placeholder="Description"/>
    </div>

    <div className="form-group">
    <label htmlFor="amount">Amount(₦):</label>
    <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text">₦</span>
    </div>
    <input type="number" className="form-control" id="amount" value={this.state.amount} onChange={this.onChangeAmount.bind(this)} placeholder="Amount spent"/>
    </div>
    </div>

    <div className="form-group">
      <label htmlFor="payment-method">Payment Method:</label>
      <select id="payment-method" value={this.state.payment} onChange={this.onChangePayment.bind(this)} className="form-control">
        <option>Cash</option>
        <option>Card</option>
        <option>Crypto</option>
      </select>
    </div>

    <div className="form-group">
    <label htmlFor="category">Category:</label>
    <select className="form-control" value={this.state.category} onChange={this.onChangeCategory.bind(this)} id="category">
      <option >Transport</option>
      <option>Food</option>
      <option>Needs</option>
      <option>Miscellaneous/Wants</option>
    </select>
     </div>

         <label htmlFor="date">Date:</label>
         <div className="form-group">
        <DatePicker selected={this.state.date} onChange={this.onChangeDate.bind(this)}/>
     </div>
     <button type="submit" onSubmit={this.onSubmit.bind(this)} className="btn btn-primary">Add expense</button>
    </form>
    </div>
        )
    }
}

export default createexpense;
