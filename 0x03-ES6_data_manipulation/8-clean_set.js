export default function cleanSet(set, startString) {
  const newString = [];
  set.forEach((string) => {
    if (startString && string.startsWith(startString)) {
      newString.push(string.slice(startString.length));
    }
  });
  return newString.join('-');
}
