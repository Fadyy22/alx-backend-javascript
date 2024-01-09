export default function hasValuesFromArray(set, array) {
  let hasNumber = 0;
  for (const number of array) {
    if (set.has(number))
      hasNumber++;
  }
  return hasNumber === array.length;
}
