// var students = [
//   {
//     name: "pham huu loc",
//     age: 18,
//     yearBorn: 20,
//   },
//   {
//     name: "pham  thi thu",
//     age: 18,
//     yearBorn: 20,
//   },
//   {
//     name: "le thi thuy",
//     age: 18,
//     yearBorn: 20,
//   },
// ];
// var totalAge = students.reduce(function (total, currentValue) {
//   return total + currentValue.age;
// }, 0);
// console.log(totalAge);

// create reduce  for js same reduce of js
Array.prototype.reduce2 = function (callBack, result) {
  let i = 0; // tao bien chay
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  //sau khi xd đc i
  for (; i < this.length; i++) {
    result = callBack(result, this[i], i, this);
  }
  return result;
};
const number = [1, 2, 3, 4, 5];

const totalNumber = number.reduce2((sum, currentNumber) => {
  return sum + currentNumber;
}, 10);
console.log(totalNumber);
var numberInteger = [1, 1, 2, 3, 4];

//reduce of js
var sum = numberInteger.reduce(function (total, number) {
  console.log(total, number);
  return total + number;
});
//test
//bt1
//bt2
Array.prototype.reduce2 = function (callBack, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callBack(result, this[i], i, this);
  }
  return result;
};
var test = fum;
