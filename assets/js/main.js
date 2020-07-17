// console.log('Sample JavaScript HW#1');

const { series } = require("gulp");


// myNum = 10;
// console.log(myNum);




// var myStr;
// myStr = 'строка';
// console.log(myStr);



// var myBool;
// myBool = true;
// console.log(myBool);


// var myArr;
// myArr = [1, 2, 3, 4, 5];
// console.log(myArr);

// var myObj;
// myObj = {first: 'First Name', last: 'Last Name'}
// console.log(myObj);


// var decimal2;
// decimal2 = myNum.toFixed(2);
// console.log(decimal2);




// var i = 0;
// console.log(i);
// console.log(++i);
// console.log(i++);
// console.log(i--);
// console.log(--i);




// var myTest = 20;
// console.log(myTest);

// myTest += myNum;
// console.log(myTest);

// myTest -= myNum;
// console.log(myTest);

// myTest *= 10;
// console.log(myTest);

// myTest /= 5;
// console.log(myTest);

// myTest %= 3;
// console.log(myTest);


// var myPi = Math.PI;
// console.log(myPi);

// var myRound = Math.round(89.279);
// console.log(myRound);

// var myRandom = Math.random() * 10; 
// console.log(myRandom);

// var myPow = Math.pow(3, 5);
// console.log(myPow);




// var strObj = {str: 'Мама мыла раму, рама мыла маму'};

// strObj.length = strObj.str.length;
// console.log('strObj = ', strObj);




// var isRamaPos = strObj.str.indexOf( 'рама');
// console.log(isRamaPos);
 


// var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму');
// console.log(strReplace);


// console.log(strReplace.toUpperCase());
// console.log('hello world!'.toLowerCase());


// ----------------------------------------------------------------------------------------------


// var userObj = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 40,
//   fullName() {
//       return `${userObj.firstName} ${userObj.lastName}`;
//     }
// };

// console.log(userObj);
// console.log(userObj.fullName());

// function defUpperStr(str) {
// return (str || 'Default text').toUpperCase();
// }

// console.log(defUpperStr('My text')); 
// console.log(defUpperStr()); 

// function evenFn(n) {
// var arr = [];

// for (var i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);

// return arr;
// }

// console.log(evenFn(10)); // [2, 4, 6, 8, 10]


// function weekFn(n) {
//   var str = '';

//   switch (n) {
//     case 1:
//       str = 'Понедельник';
//       break;
//     case 2:
//       str = 'Вторник';
//       break;
//     case 3:
//       str = 'Среда';
//       break;
//     case 4:
//       str = 'Четверг';
//       break;
//     case 5:
//       str = 'Пятница';
//       break;
//     case 6:
//       str = 'Суббота';
//       break;
//     case 7:
//       str = 'Воскресенье';
//       break;
//     default:
//       str = null;
//   }

//   return str;
// }

// function ageClassification(num) {
//   return num > 0
//     ? num > 24
//       ? num > 44
//         ? num > 65
//           ? num > 75
//             ? num > 90
//               ? num > 122
//                 ? null
//                 : 'долгожители'
//               : 'старческий возраст'
//             : 'пожилой возраст'
//           : 'средний возраст'
//         : 'молодой возраст'
//       : 'детский возраст'
//     : null;
// }

// console.log('-1 :', ageClassification(-1)); 
// console.log('5 :', ageClassification(5)); 
// console.log('34 :', ageClassification(34)); 
// console.log('50 :', ageClassification(50)); 
// console.log('65.1 :', ageClassification(65.1)); 
// console.log('80 :', ageClassification(80));
// console.log('110 :', ageClassification(110)); 
// console.log('130 :', ageClassification(130));

// function oddFn(n) {
//   let arr = [];
//   let i = 0;

//   while (i++ < n) if (i % 2 !== 0) arr.push(i);

//   return arr;
// }

// function mainFunc(a, b, cb) {
//   if (cb && typeof cb === 'function') return cb(a, b);

//   return false;
// }


// function cbRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function cbPow(num, pow) {
//   return Math.pow(num, pow);
// }

// function cbAdd(a, b) {
//   return a + b;
// }


// console.log(mainFunc(2, 5, cbRandom)); 
// console.log(mainFunc(2, 5, cbPow));
// console.log(mainFunc(2, 5, cbAdd)); 
// console.log(mainFunc(2, 5, 'not a func')); 




// -----------------------------------------------------------------------------------------------------








// let counter = (function () {
//   let count = 0;

//   return function (num) {
//     count = num === undefined ? count : num;

//     return count++;
//   };
// }());

// console.log(counter());
// console.log(counter());
// console.log(counter(100));
// console.log(counter());
// console.log(counter());
// console.log(counter(500));
// console.log(counter());
// console.log(counter());
// console.log(counter(0));
// console.log(counter());
// console.log(counter());


// let counting = (function () {
//   let count = 0;

//   return {
//     value(num) {
//       if (num !== undefined) count = num;

//       return count;
//     },
//     decrement() {
//       count--;
//     },
//     increment() {
//       count++;
//     }
//   };
// }());

// console.log(counting.value()); // 0
// counting.increment();
// counting.increment();
// counting.increment();
// console.log(counting.value()); // 3
// counting.decrement();
// counting.decrement();
// console.log(counting.value()); // 1
// console.log(counting.value(100)); // 100
// counting.decrement();
// console.log(counting.value()); // 99
// console.log(counting.value(200)); // 200
// counting.increment();
// console.log(counting.value()); // 201


// let myPrint = (a, b, res) => `${a}^${b}=${res}`;
// let myPow = (a, b, callback) => {
//   let pow = (x, n) => {
//     if (n !== 1) return x *= pow(x, n - 1);

//     return x;
//   };

//   return callback(a, b, pow(a, b));
// };

// console.log(myPow(3, 4, myPrint)); // 3^4=81
// console.log(myPow(2, 3, myPrint)); // 2^3=8


// function fullInfo() {
//   return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
// }

// let yearNow = new Date().getFullYear();
// let car = {
//   engine: 2000,
//   model: 'Lacetti',
//   name: 'Chevrolet',
//   year: 2010,
//   info: fullInfo,
//   get used() {
//     return this.year !== yearNow ? 'used' : 'new';
//   },
//   set used(value) {
//     if (value === 'new' && this.year < yearNow) this.year = yearNow;
//   }
// };
// let car2 = {
//   engine: 5000,
//   model: 'FX50 AWD',
//   name: 'Infinite',
//   year: 2019,
//   info: fullInfo,
//   get used() {
//     return yearNow - this.year ? 'used' : 'new';
//   },
//   set used(value) {
//     if (value === 'new' && this.year < yearNow) this.year = yearNow;
//   }
// };

// console.log(car.info()); 
// car.used = 'new';
// console.log(car.info()); 
// car.used = 'used';
// console.log(car.info()); 
// console.log(car2.info()); 
// car.used = 'used';
// console.log(car2.info()); 

// let list = [12, 23, 100, 34, 56, 9, 233];
// let myMax = (arg) => Math.max.apply(Math, arg); 

// console.log(myMax(list));


// function myMul(a, b) {
//   return a * b;
// }


// let myDouble = myMul.bind(null, 2); 

// console.log(myDouble(3)); 
// console.log(myDouble(4)); 
// console.log(myDouble(5)); 


// let myTriple = myMul.bind(null, 3); 

// console.log(myTriple(3)); 
// console.log(myTriple(4)); 
// console.log(myTriple(5)); 


// let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
// let notUniqStrings = [
//   'Bob',
//   'Kate',
//   'Jhon',
//   'Tom',
//   'Jhon',
//   'Kate',
//   'Tom',
//   'Bob',
//   'Jhon',
//   'Tom'
// ];

// let myUniq = (arr) => {
//   let set = new Set();

//   arr.forEach((val) => {
//     set.add(val);
//   });

//   return set;
// };

// console.log(myUniq(notUniqNums));
// console.log(myUniq(notUniqStrings));
// [1, 1, 2, 3, 3, 2, 3, 4, 5, 3, 2, 4, 5]

// ---------------------------------------------------------------------------------------------------------------

let myLongStr =   'Lorem". ipsum, dolor! sit? amet: nte animi! Dolorem commodi tempore, quos reprehenderit ducimus adipisci cum quia maiores tenetur ex modi quibusdam incidunt. Minima, amet?';


let wordsList = (str, subStr) => {
  let reg = new RegExp('\\.|,|\\?|!|:|;|"', 'gui');
  let arr = str.
    replace(reg, '').
    toLowerCase().
    split(' ').
    filter((arrItem) => arrItem.indexOf(subStr) > -1);
  let res = new Set();

  arr.forEach((arrItem) => {
    res.add(arrItem);
  });

  return res;
};

console.log(wordsList(myLongStr, 'lore')); 
console.log(wordsList(myLongStr, 'no')); 
console.log(wordsList(myLongStr, 'rep'));





let myDate = new Date();
let getLocalDate = (date, isSeconds = false, isISO = false) => {
  const reg = new RegExp(':\\d{2}$', 'gui');
  let res;

  if (!isISO) res = isSeconds
    ? date.toLocaleString()
    : date.toLocaleString().replace(reg, '');
  else {
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds =
      date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds();

    res = isSeconds
      ? `${year}-${month}-${day}, ${hour}:${minutes}:${seconds}`
      : `${year}-${month}-${day}, ${hour}:${minutes}`;
  }

  return res;
};

console.log(getLocalDate(myDate)); 
console.log(getLocalDate(myDate, true)); 
console.log(getLocalDate(myDate, false, true)); 
console.log(getLocalDate(myDate, true, true)); 
console.log(getLocalDate(new Date(123456)));
console.log(getLocalDate(new Date(123456), true)); 
console.log(getLocalDate(new Date(123456), false, true)); 
console.log(getLocalDate(new Date(123456), true, true)); 


let getWeekDay = (d) => {
  const date = new Date(d);
  const days = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
  ];

  return days[date.getDay()];
};

console.log(getWeekDay('2019-01-30')); 
console.log(getWeekDay('2019-07-16')); 
console.log(getWeekDay('2019-07-27')); 

let getLocalDay = (d) => {
  const date = new Date(d);
  let day = date.getDay();

  if (day === 0) day = 7;

  return day;
};

console.log(getLocalDay('2019-07-16')); 
console.log(getLocalDay('2019-07-25')); 
console.log(getLocalDay('2019-07-27'));



let getDateAgo = (d, days) => {
  const date = new Date(d);

  date.setDate(date.getDate() - days);

  

  return date.toLocaleString().replace(/(\d.*),\s+(\d.*)/gu, '$1');
};

console.log(getDateAgo('2019-01-29', 1)); 
console.log(getDateAgo('2019-01-29', 2)); 
console.log(getDateAgo('2019-01-29', 365)); 



let Car = function (engine, model, name, year) {
  this.engine = engine;
  this.model = model;
  this.name = name;
  this.year = year;
};

Object.defineProperties(Car.prototype, {
  used: {
    get() {
      const yearNow = new Date().getFullYear();

      return yearNow - this.year > 1 ? 'used' : 'new';
    },
    set(value) {
      const yearNow = new Date().getFullYear();

      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  }
});

Car.prototype.info = function () {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};

let car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);
let car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);

console.log(car.info()); 
car.used = 'new';
console.log(car.info()); 
console.log(car.info()); 
console.log(car2.info()); 
car.used = 'used';
console.log(car2.info()); 


let testPerformance = (iterations, func) => {
  let time = Date.now();

  if (typeof func === 'function') for (let i = iterations; i--;) func();

  return Date.now() - time;
};


function test1() {
  let str = myLongStr;

  while (str.indexOf('o') !== -1) str = str.replace('o', '');
  while (str.indexOf('a') !== -1) str = str.replace('a', '');
  while (str.indexOf('e') !== -1) str = str.replace('e', '');
  while (str.indexOf('u') !== -1) str = str.replace('u', '');
  while (str.indexOf('i') !== -1) str = str.replace('i', '');
}


function test2() {
  const reg = new RegExp('[oaeui]', 'gui');

  myLongStr.replace(reg, '');
}

console.log(testPerformance(100, test1));
console.log(testPerformance(100, test2));
console.log(testPerformance(100, 12345));














