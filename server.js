// BOILERPLATE FOR  the server layout completed!


const express = require('express')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Listening to PORT: ${PORT}`);
})