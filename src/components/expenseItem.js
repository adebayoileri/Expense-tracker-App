import React from 'react'

export default function expenseItem() {
    return (
        <tr>
        <td>{this.props.expense.description}</td>
        <td>{this.props.expense.category}</td>
        <td>{this.props.expense.amount}</td>
        <td>{this.props.expense.payment}</td>
        <td>{this.props.expense.date.substring(0,10)}</td>
    </tr>
    )
}
