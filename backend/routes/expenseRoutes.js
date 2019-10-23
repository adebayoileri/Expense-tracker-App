const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Expense = require('../models/expense.model');

//Get all expenses
router.get('/',(req,res)=>{
    Expense.find().then(expenses => res.json(expenses)).catch(err=> res.status(400).json(`Error:${err}`));
});

//Create an expense
router.post('/create',(req,res)=>{
    const {description, payment,category,amount }= req.body;
    const date = Date.parse(req.body.date);
    const newExpense = new Expense({
        _id: new mongoose.Types.ObjectId(),
        description,
        category,
        payment,
        amount,
        date
    });
    newExpense.save()
    .then(()=> res.status(201).json({
        message:'Expense added',
        expenseAdded: newExpense
    }))
    .catch(err => res.status(500).json(err));
});

//Updated expense
router.put('/expense/update/:id',(req,res)=>{
    Expense.findById(req.params.id)
    .then(expense =>{
        expense.description = req.body.description;
        expense.category = req.body.category;
        expense.payment = req.body.payment;
        expense.amount = req.body.amount;
        expense.date = Date.parse(req.body.date);
        expense.save()
        .then(()=> res.status(201).json({
            message:'Expense Updated',
            UpdatedExpense:expense
        }))
        .catch(err => res.status(404).json('Error'+ err))
    })
    .catch(err => res.status(500).json(err));
});

//Get expense by ID
// router.get('/expense/:id',(req,res)=>{
//     Expense.findById(req.params.id)
//     .then(expense=> res.status(200).json(expense))
//     .catch(err => res.status(404).json(err))
// });

//Delete expense by id
router.delete('/expense/:id',(req,res)=>{
    Expense.findByIdAndDelete(req.params.id)
    .then(()=> res.status(200).json('Expense Deleted'))
    .catch(err => res.status(404).json(err))
});

module.exports = router;