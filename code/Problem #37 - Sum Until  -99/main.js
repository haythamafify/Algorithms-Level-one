
var sum = 0;

// Keep reading numbers from user
while (true) {
  // Get the number from user
  var number = prompt("Enter a number: ");

  // If the number is -99, break the loop
  if (number == -99) {
    break;
  }

  // Add the number to the sum
  sum += number;
}

// Print the sum
console.log("The sum is", sum);
