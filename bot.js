const Telegraf = require("telegraf");
const bot = new Telegraf("6847256040:AAHo2Vpq3tNDc4_pjdlIszmtllfgNRmgtBg");

bot.command("addShip", (ctx) => {
  let message = ctx.message.text;
  console.log(message);
  function removeIndexZero(text) {
    text = text.split(" ");
    text.shift();
    text.reduce();
  }
  console.log(removeIndexZero(message));
});

bot.launch();
