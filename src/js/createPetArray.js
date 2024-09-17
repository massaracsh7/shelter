import createBigArray from "../js/createBigArray.js";

export default function createPetArray(countPages, cardsOnPage) {
  let bigArray = createBigArray().flat();
  let arr2 = [];
  while (arr2.length < countPages) {
    let arr = [];
    let newNumber;
    while (arr.length < cardsOnPage) {
      do {
        newNumber = bigArray.splice(0, 1);
      } while (arr.includes(newNumber))
      arr.push(parseInt(newNumber.join()));
    }
    arr2.push(arr);
  }
  return arr2;
}