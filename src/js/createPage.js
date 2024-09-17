import { createCard } from "../js/createCard.js";

export default function createPage(arr) {
  const petPage = document.querySelector('.our-friends__list--pets');
  petPage.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    const li = createCard(index);
    petPage.append(li);
  }
  return petPage;
}
