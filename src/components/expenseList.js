import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export default function expenseList() {
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
                    </tr>
            </thead>
                <tbody>

                </tbody>
            </table>
            <Link to="/create"><button type="button" className="btn btn-dark">Create new expense +</button></Link>
        </div>
        </React.Fragment>
    )
}
