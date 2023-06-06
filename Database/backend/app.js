const express = require ('express');
const bodyparser =require('body-parser');
const cors=require('cors');


const app=express()
const port=5000

app.use(bodyparser.json());
app.use(cors());

//listen on port 5000
app.listen(port,()=>console.log(`Listening on port ${port}`))


//Routes
const routeRouter= require('./routes/route')


app.use('/',routeRouter)