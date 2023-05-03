console.log(commession(ss));

function commession(amount) {
  if (typeof amount !== "number") {
    throw new Error("The amount variable must be a number.");
  }
  if (amount == 1000000) {
    return amount * (1 / 100);
  } else if (amount >= 500000 && amount <= 1000000) {
    return amount * (2 / 100);
  } else if (amount >= 100000 && amount <= 500000) {
    return amount * (3 / 100);
  } else if (amount >= 50000 && amount <= 100000) {
    return amount * (5 / 100);
  } else {
    return 0;
  }
}
