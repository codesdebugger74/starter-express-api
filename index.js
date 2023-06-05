const express = require('express');
const fs = require('fs');
const axios = require('axios');
let TelegramBot = require('node-telegram-bot-api');

const app = express();
app.use(express.json());
const token = '5971105930:AAERdNIZQvhD8d1rji4maMNyZBllU1yCjwg';
let bot = new TelegramBot(token, { polling: true });

app.all('/', (req, res) => {
    console.log("Just got a request!");

    console.log(req.body);

    fs.appendFile('./logs/test.txt', JSON.stringify(req.body), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });

    axios.get('https://exclusive.luckycloverprizes.com/test/test.php?adv1={adv1}&t={transaction_id}');

    // Matches "/echo [whatever]"
    bot.onText(/\/echo(.+)/, (msg, match) => {

        // The 'msg' is the received Message from Telegram
        // and 'match' is the result of executing the regexp 
        // above on the text content of the message

        let chatId = msg.chat.id;
        // let chatId = 932569440;

        // The captured "whatever"
        let resp = match[1];

        // send back the matched "whatever" to the chat
        bot.sendMessage(chatId, resp);
    });


    res.send('Yo you did this!');
})

app.listen(process.env.PORT || 3000)
