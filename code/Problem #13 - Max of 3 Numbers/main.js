// let firstnumber = prompt("first number");
// let secondtnumber = prompt("second number");
// let thirsNumber = prompt("third number");
console.log(maxnumber(10, 20, 30));
console.log(maxnumber(40, 20, 10));
console.log(maxnumber(10, 50, 30));
console.log(maxnumber(10, 50, 90));
console.log(maxnumber(100, 50, 90));
console.log(maxnumber(100, 150, 90));
console.log(maxnumber(100, 150, 500));

// console.log(maxnumber(firstnumber, secondtnumber,thirsNumber));
function maxnumber(num1, num2, num3) {
  if (num1 > num2 && num1>num3 ) {
    return num1;
  } else if (num2 > num1 & num2>num3) {
    return num2;
  } else {
    return num3;
  }
}
