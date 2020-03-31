import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
class editExpense extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        description:'',
        category:'',
        payment:'',
        amount:'',
        date:new Date()
         }
    }
    componentDidMount(){
      axios.get('https://xpensetrackerapp.herokuapp.com/api/v1/expenses/expense/'+this.props.match.params.id)
      .then(res => this.setState({
        description:res.data.description,
        category:res.data.category,
        payment:res.data.payment,
        amount:res.data.amount,
        date:new Date(res.data.date)
      }))
    }
    onSubmit=(event,id)=>{
         const expense = {
             description:this.state.description,
           payment:this.state.payment,
           category:this.state.category,
           amount:this.state.amount,
           date:this.state.date
       }
       event.preventDefault();
      console.log(expense); 
      axios.put('https://xpensetrackerapp.herokuapp.com/api/v1/expenses/expense/update/'+id,expense)
      .then(res => console.log(res.data))
      .catch(err=> console.log(err));
       window.location ='/expenses';
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
          <div className="container mt-60">
    <div className="alert alert-primary" role="alert"> Expense Updated </div>
    <h3 className="text-center mt-40">Edit Expense</h3>
    <form onSubmit={this.onSubmit}>
    <div className="form-group">
    <label htmlFor="description">Description(Spent On):</label>
    <input type="text" className="form-control" id="description" value={this.state.description} onChange={this.handleChange} placeholder="Description" required/>
    </div>

    <div className="form-group">
    <label htmlFor="amount">Amount(₦):</label>
    <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text">₦</span>
    </div>
    <input type="number" className="form-control" id="amount" value={this.state.amount} onChange={this.handleChange} placeholder="Amount spent" required/>
    </div>
    </div>

    <div className="form-group">
      <label htmlFor="payment-method">Payment Method:</label>
      <select value={this.state.payment} onChange={this.handleChange} className="form-control" id="payment">
        <option>Cash</option>
        <option>Card</option>
        <option>Crypto</option>
      </select>
    </div>

    <div className="form-group">
    <label htmlFor="category">Category:</label>
    <select className="form-control" value={this.state.category} onChange={this.handleChange} id="category">
      <option >Transport</option>
      <option>Food</option>
      <option>Needs</option>
      <option>Miscellaneous/Wants</option>
    </select>
     </div>

         <label htmlFor="date">Date:</label>
         <div className="form-group">
        <DatePicker selected={this.state.date} onChange={this.handleChange}/>
        </div>
            <div className="form-group">
     <input type="submit" value="Update expense" className="btn btn-primary"/>
     </div>
    </form>
    </div>
        )
    }
}

export default editExpense;