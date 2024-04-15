import createPage from "../js/createPage.js";
import createPetArray from "../js/createPetArray.js";

export function pagination() {

  const prev = document.querySelector('.prev');
  const start = document.querySelector('.start');
  const current = document.querySelector('.current');
  const next = document.querySelector('.next');
  const end = document.querySelector('.end');

  let screenWidth = document.documentElement.offsetWidth;
  let num = current.textContent;

  let countPages;
  let cardsOnPage;

  if (screenWidth >= 1280) {
    countPages = 6;
    cardsOnPage = 8;
  } else if (screenWidth >= 768) {
    countPages = 8;
    cardsOnPage = 6;
  } else {
    countPages = 16;
    cardsOnPage = 3;
  }

  let petArray = createPetArray(countPages, cardsOnPage);

  createPage(petArray[0]);

  next.addEventListener('click', () => {
    current.textContent = ++num;
    createPage(petArray[num - 1]);
    prev.disabled = false;
    end.disabled = false;
    start.disabled = false;
    if (num === countPages) {
      next.disabled = true;
      end.disabled = true;
    }
  });

  end.addEventListener('click', () => {
    current.textContent = countPages;
    createPage(petArray[countPages - 1]);
    prev.disabled = false;
    start.disabled = false;
    next.disabled = true;
    end.disabled = true;
    num = countPages;
  });

  prev.addEventListener('click', () => {
    current.textContent = --num;
    createPage(petArray[num - 1]);
    next.disabled = false;
    end.disabled = false;
    if (num === 1) {
      prev.disabled = true;
      start.disabled = true;
    }
  });

  start.addEventListener('click', () => {
    current.textContent = 1;
    createPage(petArray[1 - 1]);
    prev.disabled = true;
    start.disabled = true;
    next.disabled = false;
    end.disabled = false;
    num = 1;
  });


}
