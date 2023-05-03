dayOfWeeek();

function dayOfWeeek() {
  let day = prompt("Enter Day Number (1-7)");
  if (day < 1 || day > 7) {
    alert("wrong number must Enter Day Number (1-7) ");
  }
  switch (day) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      alert("Monday");
      break;

    case 3:
      alert("Tuesday");
      break;
    case 4:
      alert("Wednesday");
      break;
    case 5:
      alert("Thursday");
      break;
    case 6:
      alert("Friday");
      break;
    case 7:
      alert("Saturday");
      break;
  }
}
