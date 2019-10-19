import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class createexpense extends Component {
    state ={
        description:'',
        category:'',
        amount:'',
        date:new Date()
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
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
    <form>
    <div className="form-group">
    <label for="description">Description(Spent On)</label>
    <input type="text" className="form-control" id="description" placeholder="Description"/>
    </div>
    <div className="form-group">
    <label for="amount">Category</label>
    <input type="number" className="form-control" id="amount" placeholder="Amount spent"/>
    </div>
    <div class="form-group">
      <label for="payment-method">Payment Method</label>
      <select id="payment-method" class="form-control">
        <option selected>Cash</option>
        <option>Card</option>
        <option>Crypto</option>
      </select>
    </div>
    <div className="form-group">
    <label for="category">Category</label>
    <select class="form-control" id="category">
      <option selected>Transport</option>
      <option>Food</option>
      <option>Needs</option>
      <option>Miscellaneous/Wants</option>
    </select>
     </div>
     <button type="submit" class="btn btn-primary">Add expense</button>
    </form>
    </div>
        )
    }
}

export default createexpense;
