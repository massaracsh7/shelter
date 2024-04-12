import { createNumArray } from "../js/createNumArray.js";
import { createSliderList } from "../js/createSliderList.js";
import { createPrevArray } from "../js/createPrevArray.js";

export function createSlider() {
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const carousel = document.querySelector(".slider__container");
  const listActive = document.querySelector(".list-active");
  const listLeft = document.querySelector(".list-left");
  const listRight = document.querySelector(".list-right");

  let arr = createNumArray();
  let screenWidth = document.documentElement.offsetWidth;
  let currentIndex = determineIndexRange(screenWidth);

  let current = arr.slice(0, currentIndex);
  let prev = createPrevArray(current);

  updateListDisplays(listActive, current);
  updateListDisplays(listLeft, prev);
  updateListDisplays(listRight, prev);

  function determineIndexRange(screenWidth) {
    if (screenWidth >= 1280) return 3;
    if (screenWidth >= 768) return 2;
    return 1;
  }

  function updateListDisplays(list, indices) {
    createSliderList(list, indices);
  }

  function move(direction) {
    const isLeft = direction === 'left';
    carousel.classList.add(`transition-${direction}`);
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);

    carousel.addEventListener("animationend", function handler(event) {
      carousel.classList.remove(`transition-${direction}`);
      listActive.innerHTML = isLeft ? listLeft.innerHTML : listRight.innerHTML;

      let temp = current;
      current = prev;
      prev = createPrevArray(current);

      updateListDisplays(isLeft ? listRight : listLeft, temp);

      btnLeft.addEventListener("click", moveLeft);
      btnRight.addEventListener("click", moveRight);

      carousel.removeEventListener("animationend", handler);
    }, { once: true });
  }

  const moveLeft = () => move('left');
  const moveRight = () => move('right');

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);
}
