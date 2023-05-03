function atmpin(pincode) {
  let userBalance = 7500;
  let tries = 0;
  while (pincode != 1234 && tries < 3) {
    pincode = prompt("Please enter your ATM PIN code: ");
    if (pincode == 1234) {
      return `Your balance is ${userBalance}`;
    } else {
      tries++;
      console.log("Wrong PIN. Please try again.");
    }
  }

  if (tries === 3) {
    console.log("Card is locked!");
  }
}

let pincode = prompt("Please enter your ATM PIN code: ");
console.log(atmpin(pincode));
