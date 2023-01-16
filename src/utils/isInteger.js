export default function isInteger(value) {
  if (typeof value != "string") return false;
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}
