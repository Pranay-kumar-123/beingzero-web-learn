const express=require('express');
const mongoose=require('mongoose')
let router=express.Router();
const mongdb=require("../lib/userlib");
const table=require("../model/usermodel");
//here we are writing an api call to get data from database and send response back
router.get("/courses", function(_req,res)
{
    mongdb.getitems(table,function(err,allitems)
    {
        if(err)res.status(404).json({
            error:err
        })
        else {
            res.status(200).json({allitems})
        }

    })
})

router.post("/courses",function(req,res)
{
     let data=req.body;
      data._id=new mongoose.Types.ObjectId();
      mongdb.createitem(data,table,function(err,data)
      {
          if(err)res.status(404).json({
            error:err
          })
          else
          {
              res.status(200).json({data});
          }
      })
})
router.put("/courses/:courseId",function(req,res)
{
    let data=req.body;
    let id=req.params.courseId;
    mongdb.updateitemfeild({_id:id},data,table,function(err,updateditems)
    {
        if(err)
        {
            res.status(404).json({error:err})
        }
        else
        {
            res.status(200).json({updateditems})
        }
    })
})
 
router.delete("/courses/:courseId", function(req,res)
{
    let id=req.params.courseId;
    mongdb.deleteitem(id,table,function(err,deleteditems)
{

    if(err)res.status(404).json({error:err});
    else{
        res.status(200).json({deleteditems});
    }
})
})
module.exports=router;