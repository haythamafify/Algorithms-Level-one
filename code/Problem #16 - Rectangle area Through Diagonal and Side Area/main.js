// let firstnumber = prompt("first number");
// let secondtnumber = prompt("second number");

// rectangleArea(firstnumber, secondtnumber);
rectangleArea(5, 40);
function rectangleArea(a, d) {
  result = a * Math.sqrt(d * d - a * a);
  console.log(` ${result}`);
}
