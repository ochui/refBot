var dotenv = require("dotenv");
const express = require('express');

dotenv.config();

const bot = require('./bot').bot;

const app = express();

const domain = process.env.URL;
const secretPath = process.env.BOT_TOKEN;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post(`/${secretPath}`, (req, res) => {
    console.log(req.body)
    return bot.handleUpdate(req.body, res)
});

app.listen(process.env.PORT || 3000, async () => {

    await bot.telegram.setWebhook(`https://${domain.replace(/^https?\:\/\//i, "")}/${secretPath}`);

    console.log('IVR Client running at at PORT', process.env.PORT || 3000);
});
