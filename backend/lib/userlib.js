const course= require('../model/usermodel');
const mongoose=require('mongoose');
const express=require('express');
//getting all elements from the tabel by passing tablename and callback function
 module.exports.getitems= function(table,cb)
 {
     //retreiving all the elemenrs from the table which are not deleted
table.find({isDeleted : false}, function(err,data)
{
    cb(err,data);
})
}
//here we are creating an item in the table of database by passing details to add and table name and callback function
 module.exports.createitem=function(itemdetails, table,cb)
 {
     var ele=new table(itemdetails);
     //here we are  saving the elements in to the table and calls a function to know if at all any error occurs
     ele.save(function(err)
     {
         if(err)console.log("error in adding element"+err);
         else cb(err,ele);
     })
 }
 //here we are deleting an element from the data base by passing the id and table name and a call back function
 module.exports.deleteitem=function(itemid,table,cb)
 {
    table.findById(itemid,function(err,obj)
    {
        if(err)cb(err,null)
// here as we are not deleting the data permanentlly we are making the isdeleted true and saving it       
        else {
            console.log(obj);
            obj.isDeleted=true;
            obj.save(function(err)
            {
                cb(err,obj);
            })
        }
    })
 }
//here we are updating an item by passing the query and the data tobe updated table name and callback function

 module.exports.updateitemfeild=function(query,newdata,table,cb)
 {
     table.updateOne(query,newdata,function(err,obj)
     {
         if(err)cb(err,null);
         cb(err,obj);
     })
 }