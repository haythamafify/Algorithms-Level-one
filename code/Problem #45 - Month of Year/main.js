printMonth(2);

function printMonth(monthNumber) {
  // Check if the month number is valid
  if (monthNumber < 1 || monthNumber > 12) {
    console.log("Wrong month");
    return;
  }

  // Get the month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[monthNumber - 1];

  // Print the month name
  console.log(monthName);
}
