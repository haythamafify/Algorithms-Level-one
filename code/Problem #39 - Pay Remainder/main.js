let totalCash = 50;
let totalBill = 30;
let reminder = 20;
console.log(reminderBack(totalCash, totalBill));
function reminderBack(totalCash, totalBill) {
  let reminder = totalCash - totalBill;
  if (reminder < 0) {
  }
  return `The Cash Paid ${totalCash} The reminder ${reminder}`;
}
