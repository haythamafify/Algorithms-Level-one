console.log(billValue(100));

function billValue(total) {
  let serviceTax = total * 0.1;

  let salesTax = total * 0.16;

  return total + serviceTax + salesTax;
}
function calculateTotalBill(billValue) {
  // Calculate the service fee.
  var serviceFee = billValue * 0.10;

  // Calculate the sales tax.
  var salesTax = billValue * 0.16;

  // Add the service fee and sales tax to the bill value.
  var totalBill = billValue + serviceFee + salesTax;

  // Print the total bill.
  console.log("The total bill is " + totalBill);
}

// Get the bill value from the user.


// Calculate the total bill.
calculateTotalBill(100);