let firstnumber = prompt("first number");
let secondtnumber = prompt("second number");
let thirdnumber = prompt("third number");
let average =
  (parseInt(firstnumber) + parseInt(secondtnumber) + parseInt(thirdnumber)) / 3;

if (average >= 50) {
  document.body.innerHTML = `congreatulation success ${average}`;
} else {
  document.body.innerHTML = `hard luck fail ${average}`;
}
