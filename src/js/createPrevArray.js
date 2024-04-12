import { createNumArray } from '../js/createNumArray.js';

export function createPrevArray(current) {
  const screenWidth = document.documentElement.offsetWidth;
  const max = screenWidth >= 1280 ? 3 : screenWidth >= 768 ? 2 : 1;
  const arr2 = [];
  const arr = createNumArray();

  while (arr2.length < max) {
    let newNumber = arr.shift();
    if (!current.includes(newNumber) && !arr2.includes(newNumber)) {
      arr2.push(newNumber);
    }
  }
  return arr2;
}
