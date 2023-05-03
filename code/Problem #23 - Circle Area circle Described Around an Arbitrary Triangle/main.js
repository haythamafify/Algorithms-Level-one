areaArea(5, 6, 7);
function areaArea(a, b, c) {
  let p = (a + b + c) / 2;
  const pi = 3.14;
  let formula = (a * b * c) / (4 * Math.sqrt(p * (p - a) * (p - b) * (p - c)));
  result = pi * formula * formula;
  document.body.innerHTML = ` ${result}`;
}
