export function createNumArray() {
  const arr = [];
  while (arr.length < 8) {
    let newNumber = Math.floor(Math.random() * 8);
    if (!arr.includes(newNumber)) {
      arr.push(newNumber);
    }
  }
  return arr;
}
