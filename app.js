const express=require('express')
const path=require('path')
const app=express()
const db=require('./database/connect.js')
const expense=require('./models/expensemodel.js')
const bodyParser = require('body-parser')
const router = require('./routes/route.js')
db()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/main.html')
})
app.use(express.static('public'))
app.use('/',router)
app.listen(8000,()=>{
    console.log("Conneted on server")
})