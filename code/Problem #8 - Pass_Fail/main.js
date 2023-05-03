let mark = prompt("Enter Mark");
let result;
if (mark >= 50) {
  result = ` congratulation `;
} else {
  result = ` fail `;
}

document.body.innerHTML = result;
