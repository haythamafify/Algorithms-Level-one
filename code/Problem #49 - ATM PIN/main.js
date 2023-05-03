let pincode = prompt("Please enter your ATM PIN code: ");
console.log(atmpin(pincode));
function atmpin(pincode) {
  let userBalance = 7500;
  while (pincode != 1234) {
    pincode = prompt("Please enter your ATM PIN code: ");
    if (pincode == 1234) {
      return `your Blance is ${userBalance}`;
    } else {
      return `wrong pin code `;
    }
  }
  return `your Blance is ${userBalance}`;
}
// function atmpin(pincode) {
//   let userBalance = 7500;
//   if (pincode == 1234) {
//     console.log(`your Blance is ${userBalance}`);
//   } else {
//     console.log(`wrong pin code `);
//   }
//   while (pincode != 1234) {
//     setTimeout(() => {
//       pincode = prompt("Please enter your ATM PIN code: ");
//     }, 2000);

//     if (pincode == 1234) {
//       return `your Blance is ${userBalance}`;
//     } else {
//       return `wrong pin code `;
//     }
//   }
// }
