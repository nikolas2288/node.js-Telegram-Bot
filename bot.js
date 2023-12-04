const Telegraf = require("telegraf");
const bot = new Telegraf("6847256040:AAHo2Vpq3tNDc4_pjdlIszmtllfgNRmgtBg");

let galaxy = {
  ship: {
    nameShip: ``,
    tonnageMax: null,
    draft: null,
  },
  trucks: [
    {
      fullName: ``,
      netto: null,
    },
    {
      fullName: ``,
      netto: null,
    },
    {
      fullName: ``,
      netto: null,
    },
  ],
  truckInfo: {
    fullName: ``,
    netto: null,
  },
};

let printObj = `
Name of ship: ${galaxy.nameShip}
Maximal tonnage: ${galaxy.tonnageMax}
Draft: ${galaxy.draft}
`;

let addList = `${trucks.fullName} ${trucks.netto}`;

bot.command("ship", (ctx) => {
  let message = ``;
  let input = ctx.message.text;
  let inputArray = input.split(" ");
  inputArray.shift(" ");
  //   let inputArray = ["RBK-55", 1000, "2.20"];
  console.log(inputArray);
  if (inputArray.length == 3) {
    galaxy.nameShip = inputArray[0].toString();
    galaxy.tonnageMax = inputArray[1];
    galaxy.draft = inputArray[2];
  } else {
    ctx.reply(`err`);
  }
  console.log(message);
});

bot.command("add", (ctx) => {
  let messageAdd = ``;
  let inputAdd = ctx.message.text;
  let inputArrayAdd = inputAdd.split(" ");
  inputArrayAdd.shift(" ");
  console.log(inputArrayAdd);
  if (inputArrayAdd.length == 2) {
    galaxy.fullName = inputArrayAdd[0].toString();
    galaxy.netto = inputArrayAdd[1];
    galaxy.trucks.push(galaxy.truckInfo);
    let changeArray = () => {
      for (let i = 0; i < array.length; i++) {
        ctx.reply(array[i]);
      }
      changeArray(galaxy.trucks);
      console.log(galaxy.trucks);
      console.log(addList);
    };
  } else {
    ctx.reply(`err`);
  }
  console.log(messageAdd);
});

console.log(galaxy.trucks);
bot.help((ctx) => {
  ctx.reply(printObj);
});

bot.launch();
