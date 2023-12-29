/* Запросите у пользователя трехзначное число и выведите его задом наперед. 
Для решения задачи вам понадобится оператор % (остаток от деления). */
// var user = 123;
// var userValueOne = user % 10; // 3
// var userValueTwo = user % 100; // 23
// var userValueThree = (userValueTwo - userValueOne) / 10; // 2
// var userValueFoure = (user - userValueTwo) / 100;

// // console.log(userValueOne);
// // console.log(userValueTwo);
// // console.log(userValueThree);
// // console.log(userValueFoure);

// var retMirrorValue = (a, b, c) => {
//   return `${a}${b}${c}`;
// };

// console.log(retMirrorValue(userValueOne, userValueThree, userValueFoure));
// var str = [["ukraine"], ["bulgarian"], ["bessarabia"]];
// for (let i = 0; i < str.length; i++) {
//   console.log(...str[i]);
// }
// console.log(...str);
// console.log(1 + 10 - 5 + "10" - "5");
// console.log(new Set([1, 2, 3, 1, 2]));

/* 1. Написать функцию, которая принимает 2 строки и сравнивает их длину. 
Функция возвращает 1, если в первой строке больше символов, чем во второй; 
-1 – если во второй больше символов, 
чем в первой; или 0 – если строки одинаковой длины. */
// function inputTrue(a, b) {
//   if (a.length > b.length) {
//     return `1`;
//   } else if (a.length === b.length) {
//     return "0";
//   } else {
//     return `-1`;
//   }
// }

// console.log(inputTrue("Kyiv", "nik"));
// console.log(inputTrue("Africa", "Africa"));
// console.log(inputTrue("lox", "chupapy"));
/*
challenge 1
*/

// const matrix = [
//   [`1`, 2, 3],
//   [4, `5`, 6],
//   [7, 8, `9`],
// ];

// var flattenedMatrix = [];

// for (let i = 0; i < matrix.length; i++) {
//   console.log(...matrix[i]);
//   for (let j = 0; j < matrix[i].length; j++) {
//     flattenedMatrix.push(matrix[i][j]);
//   }
// }

// console.log(...flattenedMatrix);
// console.log(flattenedMatrix);

// chalenge 2

// var info = { [Symbol("a")]: "b" };
// console.log(info);

/*
    test
    */

/* var absoluteInfo = [
  {
    ship: {
      name: "Dunav-12",
      maxTonnage: 1000,
      typeShip: "Самоходка",
      configTruck: [
        {
          person: { name: "Вася", lastName: "Дыркин" },
          truck: { carNum: "AB1111BA", trailerNum: "BA2222AB" },
          cargoInfo: { cargo: "СОЯ", netto: 25500 },
          loadingTime: { start: `08:00`, finish: `08:15` },
        },
        {
          person: { name: "Толян", lastName: "Апчихбва" },
          truck: { carNum: "AB4321BA", trailerNum: "BA3333AB" },
          cargoInfo: { cargo: "СОЯ", netto: 27310 },
          loadingTime: { start: `08:17`, finish: `08:32` },
        },
      ],
    },
  },
]; */
var shipArr = [
  {
    ship: {
      name: "RBK-33",
      maxTonnage: 3200,
      type: "Самоходка",
    },
  },
];

var truckArr = [
  {
    person: { name: "Картошка", lastName: "Сало" },
    truck: { carNum: "AB6677BA", trailerNum: "BA6543AB" },
    cargoInfo: { cargo: "СОЯ", netto: 26700 },
    loadingTime: { start: `00:00`, finish: `00:15` },
  },
  {
    person: { name: "Гена", lastName: "Крокодил" },
    truck: { carNum: "AB7656BA", trailerNum: "BA3335AB" },
    cargoInfo: { cargo: "СОЯ", netto: 23580 },
    loadingTime: { start: `00:00`, finish: `00:15` },
  },
  {
    person: { name: "Вася", lastName: "Дыркин" },
    truck: { carNum: "AB1111BA", trailerNum: "BA2222AB" },
    cargoInfo: { cargo: "СОЯ", netto: 25500 },
    loadingTime: { start: `08:00`, finish: `08:15` },
  },
  {
    person: { name: "Вася", lastName: "Дыркин" },
    truck: { carNum: "AB1111BA", trailerNum: "BA2222AB" },
    cargoInfo: { cargo: "СОЯ", netto: 25500 },
    loadingTime: { start: `08:00`, finish: `08:15` },
  },
  {
    person: { name: "Вася", lastName: "Дыркин" },
    truck: { carNum: "AB1111BA", trailerNum: "BA2222AB" },
    cargoInfo: { cargo: "СОЯ", netto: 25500 },
    loadingTime: { start: `08:00`, finish: `08:15` },
  },
  {
    person: { name: "Вася", lastName: "Дыркин" },
    truck: { carNum: "AB1111BA", trailerNum: "BA2222AB" },
    cargoInfo: { cargo: "СОЯ", netto: 25500 },
    loadingTime: { start: `08:00`, finish: `08:15` },
  },
  {
    person: { name: "Вася", lastName: "Дыркин" },
    truck: { carNum: "AB1111BA", trailerNum: "BA2222AB" },
    cargoInfo: { cargo: "СОЯ", netto: 25500 },
    loadingTime: { start: `08:00`, finish: `08:15` },
  },
];

var shipArrStr = [];
var truckArrStr = [];
for (let i = 0; i < shipArr.length; i++) {
  shipArrStr.push(`
  ${shipArr[i].ship.name}(${shipArr[i].ship.type}) -> ${shipArr[i].ship.maxTonnage}t`);
}
for (let i = 0; i < truckArr.length; i++) {
  truckArrStr.push(`
    ${truckArr[i].truck.carNum}/${truckArr[i].truck.trailerNum} | ${truckArr[i].loadingTime.start} - ${truckArr[i].loadingTime.finish} | ${truckArr[i].cargoInfo.netto}`);
}

var totalNetto = truckArr.reduce((s, i) => (s = s + i.cargoInfo.netto), 0);
/* развернутая версия
 let result = truckArr.reduce(function callback(accumulator, currentValue) {
  console.log("accumulator равен:", accumulator);
  console.log("currentValue равен:", currentValue);
  return (accumulator = accumulator + currentValue.cargoInfo.netto);
}, 0); */

function informationCharching(objectShip, objectTruck, sumValue) {
  return `
  Судно: ${objectShip}; 

  Авто: ${objectTruck};
                         
                          Общий вес: ${sumValue.toLocaleString()}t;
  `;
}
console.log(informationCharching(shipArrStr, truckArrStr, totalNetto));
