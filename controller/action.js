const expense=require('../models/expensemodel.js')

const editexpense=async(req,res)=>{

    // const id=req.body.expenseId;
    // const result=expense.findById({_id:id})
    // res.send(result)
    // res.render('edit.ejs',{result:result})

    res.send("<h1>it is under construction page</h1>")

}

const deleteexpense= async(req,res)=>{
        const id=req.body.expenseId;
        try{
            
           await expense.findByIdAndDelete({_id:id})
           res.redirect('/showexpense')
        }
        catch(err)
        {
            console.log(err)
        }
        
}

module.exports={editexpense,deleteexpense}