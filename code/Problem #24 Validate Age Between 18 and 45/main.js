let promptAge = prompt("Enter Your Birth Date", "1 / 8 / 1990");

ageValidate(calculateAge(promptAge));
function calculateAge(dob) {
  let dateNow = new Date();
  let dateOfbirth = new Date(dob);
  let datDiff = dateNow - dateOfbirth;
  let year = datDiff / 1000 / 60 / 60 / 24 / 365;
  return parseInt(year);
}

function ageValidate(a) {
  if (a >= 18 && a <= 45) {
    result = document.body.innerHTML = `"Your Age ${a} Is Valid"`;
  } else {
    result = document.body.innerHTML = `"Your Age ${a} Is Not Valid"`;
  }
}
