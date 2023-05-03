let recommendation = prompt("has recommendation", "has");
if (recommendation == "has") {
  console.log("hired");
} else {
  let ageprompt = prompt("Enter Date Of Birth", "1 / 8 / 1990");
  let license = prompt(
    "Why do we have to have a card (driver license) to drive a car?",
    "Yes"
  );
  age(ageprompt);

  if (age(ageprompt) > 21 && license == "Yes") {
    console.log("hired");
  } else {
    console.log("rejected");
  }

  function age(dob) {
    let datenow = new Date();
    let dateOfBirth = new Date(dob);
    let dateDiff = datenow - dateOfBirth;
    let year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    return year;
  }
}
