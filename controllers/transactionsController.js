const express = require('express')
const { faker } = require('@faker-js/faker')
const transactions = express.Router()

const transactionsArray = require('../models/transactions')

//helper Function
// const generateRandomListOfTransactions = (num) =>{

//     for(let i= 0; i < num;i++) {
//         const person = {


//         }
//     }

// }

// create a function to run initially when someone goes to frontEnd and add into array. 
const randomName = faker.person.fullName()
    // console.log(randomName);

transactions.get('/', (req, res) => {
    res.json(transactionsArray)
})

transactions.get('/:transIndex', (req,res) => { 
    const { transIndex } = req.params
    if( transactionsArray[transIndex] ){
        res.status(200).json(transactionsArray[transIndex])
    } else {
        res.status(404).json({error: "Transaction Not Found! "})

    }

})

transactions.post('/', (req,res) => { 
    transactionsArray.push({...req.body, engine: faker.person.firstName()})
    res.status(201).json(transactionsArray[transactionsArray.length -1])
})

transactions.delete('/:transIndex',(req,res)=>{
    const { transIndex } = req.params;

    if ( transactionsArray[transIndex] ) {
        transactionsArray.splice(transIndex, 1)
        res.json({message: "Transaction successfully Removed 💚 "})
    } else {
        res.json({error: "Transaction Not Found, Please try again ❌ "})
    }
})

transactions.put('/:transIndex', (req,res) => {
    const { transIndex } = req.params

    transactionsArray[transIndex] = req.body;

    res.status(200).json(transactionsArray[transIndex])

})












module.exports = transactions