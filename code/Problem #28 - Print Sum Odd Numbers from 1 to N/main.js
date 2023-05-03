let oddnum = 0;
let evennum = 0;

for (let index = 0; index <= 10; index++) {
  if (index % 2 == 0) {
    console.log("even number " + index);
    evennum += index;
    console.log("Total of even Nums is" + evennum);
  } else if (index % 2 != 0) {
    console.log("odd num " + index);
    oddnum += index;
    console.log("Total of Odd Nums is" + oddnum);
  }
}
