console.log(NumberOfHours(365));
function NumberOfHours(hour) {
  let days = hour / 24;
  let weeks = days / 7;

  return `NumberOf Weeks : ${weeks} NumberOf days : ${days}`;
}
