const express = require('express')

const transactions = express.Router()

const transactionsArray = require('../models/transactions')

transactions.get('/', (req, res)=> {
    res.json(transactionsArray)
})

transactions.post('/', (req,res)=>{
    transactionsArray.push(req.body)
    res.status(201).json(transactionsArray[transactionsArray.length -1])
})

transactions.delete('/:transIndex',(req,res)=>{
    const { transIndex } = req.params;

    if ( parseInt(transactionsArray[transIndex]) ) {
        transactionsArray.splice(transIndex, 1)
        res.json({message: "Transaction successfully Removed 💚 "})
    } else {
        res.json({error: "Transaction Not Found, Please try again ❌ "})
    }
})

transactions.put('/:transIndex', (req,res)=>{
    const { transIndex } = req.params

    transactionsArray[transIndex] = req.body;

    res.status(200).json(transactionsArray[transIndex])

})












module.exports = transactions