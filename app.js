const express = require('express')

// controllers 
const transactionsController = require('./controllers/transactionsController')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())


// Routes
app.get('/', ( req,res )=>{
    res.send('Welcome to the Back End!')
})

app.use('/transactions', transactionsController)


module.exports = app;