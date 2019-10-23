import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export class Createexpense extends Component {
    constructor(props){
        super(props);
    this.onSubmit =this.onSubmit.bind(this);

        this.state = {
        description:'',
        category:'',
        payment:'',
        amount:'',
        date:new Date()
         }
    }
    onSubmit(event){
         const expense = {
             description:this.state.description,
           payment:this.state.payment,
           category:this.state.category,
           amount:this.state.amount,
           date:this.state.date
       }
       event.preventDefault();
      console.log(expense); 
      axios.post('http://localhost:4300/api/v1/expenses/create',expense)
      .then(res => console.log(res.data))
      .catch(err=> console.log(err));
       window.location ='/expenses';
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

    render() {
        return (
          <div className="container mt-60">
    <div className="alert alert-success" role="alert"> Expense Added </div>
    <h3 className="text-left mt-40">Add New Expense</h3>
    <br></br>

    <form onSubmit={this.onSubmit}>
    <div className="form-group">
    <label htmlFor="description">Description(Spent On):</label>
    <input type="text" className="form-control" id="description" value={this.state.description} onChange={this.onChangeDescription.bind(this)} placeholder="Description" required/>
    </div>

    <div className="form-group">
    <label htmlFor="amount">Amount(₦):</label>
    <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text">₦</span>
    </div>
    <input type="number" className="form-control" id="amount" value={this.state.amount} onChange={this.onChangeAmount.bind(this)} placeholder="Amount spent" required/>
    </div>
    </div>

    <div className="form-group">
      <label htmlFor="payment-method">Payment Method:</label>
      <select value={this.state.payment} onChange={this.onChangePayment.bind(this)} className="form-control" id="payment">
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
            <div className="form-group">
     <input type="submit" value="Add expense" className="btn btn-primary"/>
     </div>
    </form>
    </div>
        )
    }
}

export default Createexpense;