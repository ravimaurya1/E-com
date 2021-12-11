const express = require('express');

const app = express();

app.use('/',(req,res) => {
    res.send("Hello12");
});


app.listen(8000, () => {console.log("Server is running on PORT 8000")});