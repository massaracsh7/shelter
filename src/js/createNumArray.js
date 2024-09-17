import pets from "../js/pets.json"

export function createNumArray() {
  const arr = [];
  const maxNum = pets.length;
  while (arr.length < maxNum) {
    let newNumber = Math.floor(Math.random() * 8);
    if (!arr.includes(newNumber)) {
      arr.push(newNumber);
    }
  }
  return arr;
}
