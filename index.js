const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.all('/', (req, res) => {
    console.log("Just got a request!");

    console.log(req.body);

    fs.appendFile('./logs/test.txt', JSON.stringify(req.body), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });

    res.send('Yo you did this!');
})
app.listen(process.env.PORT || 3000)
