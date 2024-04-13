import pets from "../js/pets.json";
import { showModal } from "../js/showModal.js";

export default function createPage(arr) {
  const petPage = document.querySelector('.our-friends__list--pets');
  petPage.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    const li = document.createElement('li');
    li.classList.add('our-friends__item');
    li.innerHTML = `<img src="../images/pets/${pets[index]["name"]}.png" alt="${pets[index]["name"]}" class="our-friends__img">
                    <p class="our-friends__name">${pets[index]["name"]}</p>
                    <button class="our-friends__btn button button--clear">Learn more</button>`;
    li.dataset.id = index;
    petPage.append(li);
  }
    showModal();
  return petPage;
}
