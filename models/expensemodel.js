const mongoose=require('mongoose')
const expenseSchema=mongoose.Schema({
    category:String,
    description:String,
    date:{
        type:String,
    },
    price:Number
})


const expense=new mongoose.model('expense',expenseSchema)

module.exports=expense;