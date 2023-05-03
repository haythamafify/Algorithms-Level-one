console.log(calculateNumberOfSecond(2, 5, 45, 35));
function calculateNumberOfSecond(days, hours, minutes, seconds) {
  const secondInDays = 24 * 60 * 60;
  const hourInDays = 60 * 60;
  const minuteInDays = 60;

  total =
    days * secondInDays + hourInDays * hours + minutes * minuteInDays + seconds;

  return `The task duration is ${total} seconds.`;
}
