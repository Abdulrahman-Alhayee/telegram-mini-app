const { Telegraf } = require("telegraf");
const { keyboard } = require("telegraf/markup");
const TOKEN = "6634165819:AAHa2RK3hogurVqX8uo9wd5BdutrbfaQW9o";
const bot = new Telegraf(TOKEN);

const web_link="https://telegram-mini-app-psi-ecru.vercel.app/";

bot.start((ctx) => ctx.reply('Welcome'), {
    replay_markup: {
        keyboard:[[{ text: "web app", web_app: {url: web_link}}]],
    },
});
bot.launch();