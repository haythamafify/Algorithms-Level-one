// let firstnumber = prompt("first number");
// let secondtnumber = prompt("second number");
// let thirsNumber = prompt("third number");

swapnumberDestructing(50, 60);

// swap with temp
function swapnumberDestructing(num1, num2) {
  [num1, num2] = [num2, num1];
  console.log(`The value of a after swapping: ${num1}`);
  console.log(`The value of b after swapping: ${num2}`);
}

console.log("==================");

console.log(swapnumberWithTemp(10, 20));
// swap with temp
function swapnumberWithTemp(num1, num2) {
  let temp = num1;

  num1 = num2;
  num2 = temp;
  console.log(num1);
  console.log(num2);
}
