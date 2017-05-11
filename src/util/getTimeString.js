export default function getTimeString(timeInSec) {
  const seconds = timeInSec % 60;
  const minutes = Math.floor(timeInSec / 60);
  return `${minutes}:${seconds}`;
}