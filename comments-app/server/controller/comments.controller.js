const { readFileSync} = require('fs');
const { join } = require('path');

const getCommentsController = async (req,res) => {
    try {
        const data = readFileSync(join(__dirname,'..','model','data.json'),'utf-8');
        res.status(200).end(data);
    } catch (err) {
        res.status(500).end({ message : "data not found"});
    }
}

module.exports = {
    getCommentsController
}