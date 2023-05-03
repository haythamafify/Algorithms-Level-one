console.log(grade(10));

function grade(degree) {
  if (degree >= 90 && degree <= 100) {
    return "A";
  } else if (degree >= 80 && degree < 90) {
    return "B";
  } else if (degree >= 70 && degree < 80) {
    return "C";
  } else if (degree >= 60 && degree < 70) {
    return "D";
  } else if (degree >= 50 && degree < 60) {
    return "E";
  } else {
    return "F";
  }
}
