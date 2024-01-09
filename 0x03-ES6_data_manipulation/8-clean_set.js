export default function cleanSet(set, startString) {
  const newString = [];
  if (typeof startString !== 'string') {
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
