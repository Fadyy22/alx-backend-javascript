export default function cleanSet(set, startString) {
  const newString = [];
  if (!(set instanceof Set)) {
    return '';
  }
  set.forEach((string) => {
    if (startString && string.startsWith(startString)) {
      const subString = string.slice(startString.length);
      if (string !== subString) {
        newString.push(subString);
      }
    }
  });
  return newString.join('-');
}
