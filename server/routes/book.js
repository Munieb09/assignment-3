let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with book model

let book = require('../models/book');
/*crud operation*/
//read operation
//get rout for book list

router.get('/',(req,res,next)=>{
    book.find((err,booklist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(booklist);
            res.render('book/list',{
                title:'books',
                booklist: booklist})
        }
    });
});

/*add operation*/
/*get route to display add page -- create operation*/
router.get('/add',(req,res,next)=> {
    res.render('book/add',{title:'Add book'})
});
/*post operation fr processing the add-page -- create operation*/
router.post('/add',(req,res,next)=>{
    let newBook = book ({
        "name":req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "description":req.body.description,
        "price":req.body.price
    });
    book.create(newBook,(err,book)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book/list');
        }
    });
    
});

/*edit operation*/
/*get route for displaying edit operation -- update operation*/
router.get('/edit/:id',(req,res,next)=>{
    let id= req.params.id;
    book.findById(id,(err,bookToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('book/edit',{title:'Edit Book', book:bookToEdit});
        }
    });
});
/* post route for displaying edit operation -- update operation*/
    router.post('/edit/:id', (req,res,next)=>{
    let id=req.params.id;
    let updateBook= book({
        "_id":id,
        "name":req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "description":req.body.description,
        "price":req.body.price
    })
    book.updateOne({_id:id},updateBook,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book-list');
        }
    });
});
/*delete operation*/
/*get to perform delete operation -- deletion*/
router.get('/delete/:id',(req,res,next)=>{
    let id =req.params.id;
    book.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            res.redirect('/book-list'); 
        } 
    });
});


module.exports = router;

