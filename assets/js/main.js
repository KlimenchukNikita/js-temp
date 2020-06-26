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


var userObj = {
  firstName: 'John',
  lastName: 'Smith',
  age: 40,
  fullName() {
      return `${userObj.firstName} ${userObj.lastName}`;
    }
};

console.log(userObj);
console.log(userObj.fullName());

function defUpperStr(str) {
return (str || 'Default text').toUpperCase();
}

console.log(defUpperStr('My text')); 
console.log(defUpperStr()); 

function evenFn(n) {
var arr = [];

for (var i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);

return arr;
}

console.log(evenFn(10)); // [2, 4, 6, 8, 10]


function weekFn(n) {
  var str = '';

  switch (n) {
    case 1:
      str = 'Понедельник';
      break;
    case 2:
      str = 'Вторник';
      break;
    case 3:
      str = 'Среда';
      break;
    case 4:
      str = 'Четверг';
      break;
    case 5:
      str = 'Пятница';
      break;
    case 6:
      str = 'Суббота';
      break;
    case 7:
      str = 'Воскресенье';
      break;
    default:
      str = null;
  }

  return str;
}

function ageClassification(num) {
  return num > 0
    ? num > 24
      ? num > 44
        ? num > 65
          ? num > 75
            ? num > 90
              ? num > 122
                ? null
                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}

console.log('-1 :', ageClassification(-1)); 
console.log('5 :', ageClassification(5)); 
console.log('34 :', ageClassification(34)); 
console.log('50 :', ageClassification(50)); 
console.log('65.1 :', ageClassification(65.1)); 
console.log('80 :', ageClassification(80));
console.log('110 :', ageClassification(110)); 
console.log('130 :', ageClassification(130)); 









