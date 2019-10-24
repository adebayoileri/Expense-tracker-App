import React ,{ Component }from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Expense =(props)=>{
    return(
            <tr>
            <td>{props.expense.description }</td>
            <td>{ props.expense.category }</td>
            <td>₦{ props.expense.amount }</td>
            <td>{ props.expense.payment }</td>
            <td>{ props.expense.date.substring(0,10) }</td>
            <td><button style={{cursor:"pointer"}} className="btn btn-danger" onClick={()=>props.deleteExpense(props.expense._id)}>Delete</button> <button style={{cursor:"pointer"}}  className="btn btn-primary" onClick={()=>props.editExpense(props.expense._id)}>Edit</button></td>
            </tr>
        )
}
class expenseList extends Component{
    constructor(props){
        super(props);

        this.state={
            expenses:[
                {
                    _id:32,
                    description:"Iya befe beans",
                    category:"Food",
                    payment: "Card",
                    amount:300,
                    date:"2019-31-09"
                }
            ]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4300/api/v1/expenses')
        .then(res => this.setState({expenses: res.data}))
        .catch(err => console.log(err));
    }
    expenseTable(){
        return this.state.expenses.map(currentexpense =>{
            return <Expense expense={currentexpense} key={currentexpense._id} editExpense={this.editExpense}deleteExpense={this.deleteExpense}/>
        })
    }
    deleteExpense=(id)=>{
        axios.delete('http://localhost:4300/api/v1/expenses/expense/'+id)
        .then(res => res.data)
        .catch(err => console.log(err));
        this.setState({
           expenses: this.state.expenses.filter(expense=>(
                expense._id !== id
          ))
        })
    }
    editExpense=(id)=>{
        axios.put('http://localhost:4300/api/v1/expenses/expense/update/'+id)
        .then(res => res.data)
        .catch(err=> console.log(err));
        window.location.replace('/create');
    }
    render(){
    return (
        <React.Fragment>
            <div className="container">
            <h1 className="text-center mt-40">List Of All Expenses</h1>
            <table className="table">
            <thead className="thead-light">
                    <tr>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Payment-Method</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
            </thead>
                <tbody>
                {this.expenseTable()}
                </tbody>
            </table>
            <Link to="/create"><button type="button" className="btn btn-dark">Create new expense +</button></Link>
        </div>
        </React.Fragment>
    )
    }
}

export default expenseList;
