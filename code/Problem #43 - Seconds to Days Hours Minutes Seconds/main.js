console.log(convertSecondsToTime(193535));
console.log(convertSecondsToTimemode(193535));
console.log(convertSecondsToTimemode(369121517));

function convertSecondsToTime(seconds) {
  const days = Math.floor(seconds / (60 * 60 * 24));
  const hours = Math.floor((seconds - days * (60 * 60 * 24)) / (60 * 60));

  const minutes = Math.floor(
    (seconds - days * 60 * 60 * 24 - hours * 60 * 60) / 60
  );
  const second = Math.floor(
    seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60
  );

  return `${days} ${hours}:${minutes}:${second}`;
}

function convertSecondsToTimemode(seconds) {
  const days = Math.floor(seconds / (60 * 60 * 24));
  const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((seconds % 3600) / 60);
  const second = Math.floor(seconds % 60);
  return `${days} ${hours}:${minutes}:${second}`;
}
function convertSecondsToTimevars(seconds) {
  secondsPerDay = 24 * 60 * 60;
  secondsPerHour = 60 * 60;
  secondsPerminute = 60;
  const days = Math.floor(seconds / secondsPerDay);
  const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((seconds % 3600) / 60);
  const second = Math.floor(seconds % 60);
  return `${days} ${hours}:${minutes}:${second}`;
}
