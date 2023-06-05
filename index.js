const express = require('express');
const fs = require('fs');
const axios = require('axios');
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

    axios.get('https://exclusive.luckycloverprizes.com/test/test.php?adv1={adv1}&t={transaction_id}')
    
    res.send('Yo you did this!');
})
app.listen(process.env.PORT || 3000)
