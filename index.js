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

    console.log(req.body);

    const check_name = req.body.check_name;
    const previous_state = req.body.previous_state;
    const current_state = req.body.current_state;
    // if(previous_state!==current_state)
    // {
        let img_src = '';
        if(current_state==='DOWN')
        {
            img_src = '🔴';
        }
        if(current_state==='UP')
        {
            img_src = '🟢';
        }
        const tg_msg = `[${current_state} ${img_src}] ${check_name}`;
        request(encodeURI(`https://api.telegram.org/bot5971105930:AAERdNIZQvhD8d1rji4maMNyZBllU1yCjwg/sendMessage?chat_id=-1001849542707&text=${tg_msg}&parse_mode=html`), function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the google web page.
            }
        });
    // }

    // let msgtest = `🟢`;
    // console.log(`https://api.telegram.org/bot5971105930:AAERdNIZQvhD8d1rji4maMNyZBllU1yCjwg/sendMessage?chat_id=-1001849542707&text=${msgtest}&parse_mode=html`);

    // request(encodeURI(`https://api.telegram.org/bot5971105930:AAERdNIZQvhD8d1rji4maMNyZBllU1yCjwg/sendMessage?chat_id=-1001849542707&text=${msgtest}&parse_mode=html`), function (error, response, body) {
    //     if (!error && response.statusCode === 200) {
    //         console.log(body) // Print the google web page.
    //     }
    // });



    // axios.get('https://api.telegram.org/bot5971105930:AAERdNIZQvhD8d1rji4maMNyZBllU1yCjwg/sendMessage?chat_id=932569440&text=from-nodejs');



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
