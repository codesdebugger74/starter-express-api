const express = require('express');
const fs = require('fs');
// const axios = require('axios');
var request = require('request');
let TelegramBot = require('node-telegram-bot-api');

const app = express();
app.use(express.json());
const token = '5971105930:AAERdNIZQvhD8d1rji4maMNyZBllU1yCjwg';
let bot = new TelegramBot(token, { polling: true });

app.all('/', (req, res) => {
    console.log("Just got a request!");

    // console.log(req.body);
    
    // axios.get('https://api.telegram.org/bot5971105930:AAERdNIZQvhD8d1rji4maMNyZBllU1yCjwg/sendMessage?chat_id=932569440&text=from-nodejs');

    request('https://api.telegram.org/bot5971105930:AAERdNIZQvhD8d1rji4maMNyZBllU1yCjwg/sendMessage?chat_id=932569440&text=from-nodejs', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body) // Print the google web page.
     }
})

    // fs.appendFile('./logs/test.txt', JSON.stringify(req.body), err => {
    //     if (err) {
    //         console.error(err);
    //     }
    //     // file written successfully
    // });

    // axios.get('https://exclusive.luckycloverprizes.com/test/test.php?adv1={adv1}&t={transaction_id}');


    res.send('Yo you did this!');
});


// Matches "/echo [whatever]"
// bot.onText(/\/echo(.+)/, (msg, match) => {
//     let chatId = msg.chat.id;
 
//     console.log(msg)
//     let resp = match[1];

//     bot.sendMessage(chatId, resp);
// });

// bot.on('message', (msg, match) => {
//     let chatId = msg.chat.id;
 
//     console.log(msg)
//     let resp = match[1];

//     bot.sendMessage(chatId, 'Received your message');
// });

app.listen(process.env.PORT || 3000)
