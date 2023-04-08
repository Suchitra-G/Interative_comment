const express =  require('express');
const {join} = require('path');
const cors = require('cors');
const CommentRouter = require('./router/comment.router');

const app = express();
app.use(express.json());
app.use(cors({
    origin : "http://localhost:3000"
}))
app.use((req,res,next) => {
    console.log(req.method , req.url);
    next();
})
app.use('/comments',CommentRouter);
app.get("/images/avatars/:id", (req,res) => {
    res.status(200).sendFile(join(__dirname,'public',req.url));
})

module.exports = app;