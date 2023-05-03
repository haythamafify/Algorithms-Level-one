piggyBankCalculator()

function piggyBankCalculator() {
  // Get the initial amount of money in the piggy bank
  const initialAmount = prompt("What is the initial amount of money in the piggy bank? ");

  // Get the amount of money saved each week
  const weeklySavings = prompt("How much money do you save each week? ");

  // Get the number of weeks
  const numberOfWeeks = prompt("How many weeks do you want to save for? ");

  // Calculate the total amount of money saved
  const totalSavings = initialAmount + (weeklySavings * numberOfWeeks);

  // Display the total amount of money saved
  console.log("You will have saved $", totalSavings, "after", numberOfWeeks, "weeks.");
}
