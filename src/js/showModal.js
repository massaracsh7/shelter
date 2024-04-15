import pets from "../js/pets.json";

export function initModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal__wrapper">
      <div class="modal__box">
        <img class="modal__img">
      </div>
      <div class="modal__inner">
        <h3 class="modal__name"></h3>
        <span class="modal__type"></span>
        <span class="modal__breed"></span>
        <p class="modal__description"></p>
        <ul class="modal__list"></ul>
      </div>
      <button class="modal__btn" aria-label="close"></button>
    </div>
  `;
  document.body.appendChild(modal);

  const btnClose = modal.querySelector('.modal__btn');

  btnClose.addEventListener("click", () => closeModal());
  modal.addEventListener("click", function (e) {
    if (!(e.target.closest('.modal__wrapper'))) {
      closeModal();
    }
  });

}

export function showModal(index) {
  initModal();
  const pet = pets[index];
  const modal = document.querySelector('.modal');
  const image = modal.querySelector('.modal__img');
  const name = modal.querySelector('.modal__name');
  const type = modal.querySelector('.modal__type');
  const breed = modal.querySelector('.modal__breed');
  const descr = modal.querySelector('.modal__description');
  const list = modal.querySelector('.modal__list');

  image.src = `../images/modal/${pet["name"]}.png`;
  name.textContent = pet["name"];
  type.textContent = `${pet["type"]} - `;
  breed.textContent = pet["breed"];
  descr.textContent = pet["description"];
  list.innerHTML = `
    <li class="modal__item"><span class="modal__info-title">Age:</span><span class="modal__info">${pet["age"]}</span></li>
    <li class="modal__item"><span class="modal__info-title">Inoculations:</span><span class="modal__info">${pet["inoculations"].join(", ")}</span></li>
    <li class="modal__item"><span class="modal__info-title">Diseases:</span><span class="modal__info">${pet["diseases"].join(", ")}</span></li>
    <li class="modal__item"><span class="modal__info-title">Parasites:</span><span class="modal__info">${pet["parasites"].join(", ")}</span></li>
  `;
  modal.classList.add('modal--active');
  document.body.classList.add("overflow-hidden");
}

function closeModal() {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.remove();
  }
  document.body.classList.remove("overflow-hidden");
}
