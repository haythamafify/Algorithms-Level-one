let promptAge = prompt(
  "Enter Your Birth Date",
  "1 / 8 / 1990",
  "month Day Year"
);

ageValidate(calculateAge(promptAge));
function calculateAge(dob) {
  let dateNow = new Date();
  let dateOfbirth = new Date(dob);
  let datDiff = dateNow - dateOfbirth;
  let year = datDiff / 1000 / 60 / 60 / 24 / 365;
  return parseInt(year);
}

function ageValidate(a) {
  let result;

  if (a >= 18 && a <= 45) {
    result = document.body.innerHTML = `"Your Age ${a} Is Valid"`;
  } else {
    setTimeout(() => {
      promptAge = prompt(
        "Enter Your Birth Date",
        "1 / 8 / 1990",
        "month Day Year"
      );
    }, 2000);
    result = document.body.innerHTML = `"Your Age ${a} Is Not Valid"`;
    result = "";
  }
}
