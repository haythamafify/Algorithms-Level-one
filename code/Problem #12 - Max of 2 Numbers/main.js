 let firstnumber = prompt("first number");
let secondtnumber = prompt("second number");
console.log(maxnumber(firstnumber,secondtnumber));
function maxnumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
