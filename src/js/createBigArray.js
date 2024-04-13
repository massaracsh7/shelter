import { createNumArray } from "../js/createNumArray.js";

export default function createBigArray() {
  let arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(createNumArray())
  }
  return arr;
}
