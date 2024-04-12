import { createCard } from "../js/createCard.js";
//import showModal from "../js/showModal.js";

export function createSliderList(list, arr) {
  list.innerHTML = '';

  const screenWidth = document.documentElement.offsetWidth;
  const max = screenWidth >= 1280 ? 3 : screenWidth >= 768 ? 2 : 1;

  for (let i = 0; i < max; i++) {
    list.append(createCard(arr[i]));
  }
  //showModal();
}
