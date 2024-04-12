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
  let current = determineCurrent(screenWidth, arr);
  let prev = createPrevArray(current);

  createSliderList(listActive, current);
  createSliderList(listLeft, prev);
  createSliderList(listRight, prev);

  function determineCurrent(screenWidth, arr) {
    if (screenWidth >= 1280) {
      return [arr[0], arr[1], arr[2]];
    } else if (screenWidth >= 768) {
      return [arr[0], arr[1]];
    } else {
      return [arr[0]];
    }
  }

  function updateUI(direction) {
    const targetList = direction === 'left' ? listLeft : listRight;
    listActive.innerHTML = targetList.innerHTML;
    let newCurrent = Array.from(listActive.querySelectorAll(".our-friends__item"), item => parseInt(item.dataset.id));
    createSliderList(direction === 'left' ? listRight : listLeft, current);
    prev = current;
    current = newCurrent;
    createSliderList(direction === 'left' ? listLeft : listRight, createPrevArray(current));
  }

  function move(direction) {
    carousel.classList.add(direction === 'left' ? "transition-left" : "transition-right");
    disableButtons();
    carousel.addEventListener("animationend", handleAnimationEnd);
  }

  function disableButtons() {
    btnLeft.removeEventListener("click", () => move('left'));
    btnRight.removeEventListener("click", () => move('right'));
  }

  function enableButtons() {
    btnLeft.addEventListener("click", () => move('left'));
    btnRight.addEventListener("click", () => move('right'));
  }

  function handleAnimationEnd(event) {
    if (event.animationName.startsWith("move-")) {
      carousel.classList.remove("transition-left", "transition-right");
      updateUI(event.animationName.includes("left") ? 'left' : 'right');
      carousel.removeEventListener("animationend", handleAnimationEnd);
      enableButtons();
    }
  }

  enableButtons();
}

