const express = require('express')
const transactions = express.Router()

const transactionsArray = require('../models/transactions')


// create a function to run initially when someone goes to frontEnd and add into array. 

transactions.get('/', (req, res) => {
    res.json(transactionsArray)
})
//
transactions.get('/:transIndex', (req,res) => { 
    const { transIndex } = req.params
    if( transactionsArray[transIndex] ){
        res.status(200).json(transactionsArray[transIndex])
    } else {
        res.status(404).json({error: "Transaction Not Found! "})
    }
})
//
transactions.post('/', (req,res) => { 
    transactionsArray.push({...req.body})
    res.status(201).json(transactionsArray[transactionsArray.length -1])
})
//
transactions.delete('/:transIndex',(req,res)=>{
    const { transIndex } = req.params;

    if ( transactionsArray[transIndex] ) {
        transactionsArray.splice(transIndex, 1)
        res.json({message: "Transaction successfully Removed 💚 "})
    } else {
        res.json({error: "Transaction Not Found, Please try again ❌ "})
    }
})
//
transactions.put('/:transIndex', (req,res) => {
    const { transIndex } = req.params

    transactionsArray[transIndex] = req.body;

    res.status(200).json(transactionsArray[transIndex])

})


module.exports = transactions