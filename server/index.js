const express = require('express');
const color = require('colors');

const app = express();


app.use('/',((req,res) => {
    res.send('HELLO');
}))


app.listen(8000,() =>{console.log("Server is listenening on PORT 8000")});

