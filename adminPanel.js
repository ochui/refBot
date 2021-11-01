const config = require('./config')
const data = require('./data')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const urlencode = require('urlencode')
const { text } = config

module.exports = {

    panel: function (ctx) {
        console.log('https://t.me/share/url?url=' + urlencode(text.invite + ctx.from.id))
        ctx.reply(
            text.hello + ctx.from.id,
            Extra
            .markup(Markup.inlineKeyboard([
            [Markup.urlButton('📨 Share link', 't.me/share/url?url=' + urlencode(text.invite + ctx.from.id))],
            [Markup.callbackButton('💵 Wallet', 'balance'), Markup.callbackButton('📱 Paypal', 'paypal')],
            [Markup.callbackButton('📜 Regulation', 'law')],

            [Markup.urlButton('🌟 Send a Feedback & Bug report', data.feedbackBot)],
            [Markup.callbackButton('📤 Send Message', 'sendAll')]
            ]))
            .markdown()
            .webPreview(true)
        )
    },
}


