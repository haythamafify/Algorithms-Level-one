// let firstnumber = prompt("first number");
// let secondtnumber = prompt("second number");

// rectangleArea(firstnumber, secondtnumber);

areaArea(20, 10);
function areaArea(a, b) {
  const pi = 3.14;
  result = ((pi * b * b) / 4) * ((2 * a - b) / (2 * a + b));
  document.body.innerHTML = ` ${result}`;
}
