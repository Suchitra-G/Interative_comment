const express = require('express');
const { readFile , writeFile} = require('fs'); 
const { join } = require('path');
const { getCommentsController } = require('../controller/comments.controller');
const CommentRouter= express.Router();

CommentRouter.get('/', getCommentsController)

CommentRouter.post('/replies',(req,res) => {
    console.log(
        "hello "
    )
    // res.end("success")
    console.log(req.body)
    req.on('data' , (data) => {
        const {parentId,...comment} = JSON.parse(data);
        readFile(join(__dirname,'..','model','data.json'),'utf-8',(err,data) => {
            if(data) {
                const allComments = JSON.parse(data);
                allComments.comments.find( comment => comment.id === parentId).replies.push({...comment,id : allComments.comments.find( comment => comment.id === parentId).replies.length});
                res.end(JSON.stringify(allComments));
                writeFile(
                    join(__dirname,'..','model','data.json'),JSON.stringify(allComments),'utf-8',(err) => {
                        if(err) {
                            res.status(400).end(JSON.stringify({msg : "Sorry, something went worng"}))
                        } else {
                            console.log(allComments);
                            // res.writeHead(200,{ "content-type" : "application/json"});
                            // res.sendFile(join(__dirname,'..','model','data.json'));
                        }
                    }
                ) 
            } else {
                res.status(400).end(JSON.stringify({ msg : "Sorry, something went worng" }))
            }
        })
    })
})

CommentRouter.patch('/',() => {})

CommentRouter.delete('/',() => {
    console.log("delete comment")
})

module.exports = CommentRouter;