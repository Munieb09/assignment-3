let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with book model

let book = require('../models/book');

//read operation
//get rout for book list

router.get('/',(req,res,next)=>{
    book.find((err,booklist)=>{
        if(error)
        {
            return console.error(err);
        }
        else
        {
            res.render('book',{
                title:'book list',
                booklist: booklist})
        }
    });
});

module.exports = router;

