const usernumber = parseInt(prompt("Enter The Number "));
let isPrime = true;
if (usernumber == 1) {
  console.log("one is neither prime nor composite numebr");
}
else if (usernumber > 1) {
  for (let index = 2; index < usernumber; index++) {
    if (usernumber % index == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`the number ${usernumber} isprime number `);
  } else {
    console.log(`the number ${usernumber} is not prime number `);
  }
} else {
  console.log(`the number ${usernumber} is not prime number `);
}
