// console.log('Sample JavaScript HW#1');


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








let counter = (function () {
  let count = 0;

  return function (num) {
    count = num === undefined ? count : num;

    return count++;
  };
}());

console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());


let counting = (function () {
  let count = 0;

  return {
    value(num) {
      if (num !== undefined) count = num;

      return count;
    },
    decrement() {
      count--;
    },
    increment() {
      count++;
    }
  };
}());

console.log(counting.value()); // 0
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value()); // 3
counting.decrement();
counting.decrement();
console.log(counting.value()); // 1
console.log(counting.value(100)); // 100
counting.decrement();
console.log(counting.value()); // 99
console.log(counting.value(200)); // 200
counting.increment();
console.log(counting.value()); // 201


let myPrint = (a, b, res) => `${a}^${b}=${res}`;
let myPow = (a, b, callback) => {
  let pow = (x, n) => {
    if (n !== 1) return x *= pow(x, n - 1);

    return x;
  };

  return callback(a, b, pow(a, b));
};

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8


function fullInfo() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

let yearNow = new Date().getFullYear();
let car = {
  engine: 2000,
  model: 'Lacetti',
  name: 'Chevrolet',
  year: 2010,
  info: fullInfo,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};
let car2 = {
  engine: 5000,
  model: 'FX50 AWD',
  name: 'Infinite',
  year: 2019,
  info: fullInfo,
  get used() {
    return yearNow - this.year ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};

console.log(car.info()); 
car.used = 'new';
console.log(car.info()); 
car.used = 'used';
console.log(car.info()); 
console.log(car2.info()); 
car.used = 'used';
console.log(car2.info()); 

let list = [12, 23, 100, 34, 56, 9, 233];
let myMax = (arg) => Math.max.apply(Math, arg); 

console.log(myMax(list));


function myMul(a, b) {
  return a * b;
}


let myDouble = myMul.bind(null, 2); 

console.log(myDouble(3)); 
console.log(myDouble(4)); 
console.log(myDouble(5)); 


let myTriple = myMul.bind(null, 3); 

console.log(myTriple(3)); 
console.log(myTriple(4)); 
console.log(myTriple(5)); 


let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
let notUniqStrings = [
  'Bob',
  'Kate',
  'Jhon',
  'Tom',
  'Jhon',
  'Kate',
  'Tom',
  'Bob',
  'Jhon',
  'Tom'
];

let myUniq = (arr) => {
  let set = new Set();

  arr.forEach((val) => {
    set.add(val);
  });

  return set;
};

console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));
// [1, 1, 2, 3, 3, 2, 3, 4, 5, 3, 2, 4, 5]









