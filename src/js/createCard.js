import pets from "../js/pets.json";

export function createCard(index) {
  const pet = pets[index];
  const li = document.createElement('li');
  li.className = 'our-friends__item';
  li.innerHTML = `
    <img src="${pet.img}" alt="${pet.name}" class="our-friends__img">
    <p class="our-friends__name">${pet.name}</p>
    <button class="our-friends__btn button button--clear">Learn more</button>
  `;
  li.dataset.id = index;
  return li;
}
