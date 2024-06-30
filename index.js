const connectToMongo=require('./db')
const express=require('express')
const cors = require("cors");
connectToMongo();

const app=express()
app.use(cors())
const port=process.env.PORT||5000

app.use(express.json())
app.use('/api/auth',require('./routes/auth.js'))
app.get('/',(req,res)=>
{
    res.send('hello world')
})

app.listen(port,()=>
{
    console.log(`example app litening ${port}`)
})


