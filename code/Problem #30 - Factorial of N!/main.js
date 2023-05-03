// let factorial = 6;
// let result = 1;
// for (let index = factorial; index >= 1; index--) {
//   console.log("index " + index);
//   result *= index;
//   console.log("result " + result);
// }

console.log(factorial(6));
function factorial(n) {
  if (n < 0) {
    return undefined;
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
