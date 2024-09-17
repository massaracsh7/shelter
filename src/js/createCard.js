import pets from "../js/pets.json";
import { showModal } from "./showModal";  // Убедитесь, что путь к файлу верный

export function createCard(index) {
  const pet = pets[index];
  const li = document.createElement('li');
  li.className = 'our-friends__item';
  li.dataset.id = index;
  li.innerHTML = `
    <img src="${pet.img}" alt="${pet.name}" class="our-friends__img">
    <p class="our-friends__name">${pet.name}</p>
    <button class="our-friends__btn button button--clear">Learn more</button>
  `;

  li.addEventListener('click', () => {
    showModal(index);
  });

  return li;
}

