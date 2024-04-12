import { createCard } from "../js/createCard.js";
//import showModal from "../js/showModal.js";

export function createSliderList(list, arr) {
  list.innerHTML = '';
  const screenWidth = document.documentElement.offsetWidth;
  let itemsCount;

  if (screenWidth >= 1280) {
    itemsCount = 3; 
  } else if (screenWidth >= 768) {
    itemsCount = 2;
  } else {
    itemsCount = 1;
  }

  arr.slice(0, itemsCount).forEach(item => {
    list.append(createCard(item));
  });

  //showModal(); // Можно раскомментировать, если нужно показать модальное окно
}
