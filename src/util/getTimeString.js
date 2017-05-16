//@flow
export default function getTimeString(timeInSec: number): string {
  const seconds: number = timeInSec % 60;
  const minutes: number = Math.floor(timeInSec / 60);
  return `${minutes}:${seconds}`;
}