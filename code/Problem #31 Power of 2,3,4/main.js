console.log(power(3, 4));

function power(n, m) {
  let r = 0;
  for (let index = 0; index < m; index++) {
    r += n * n;
    
  }
  return r;
}
