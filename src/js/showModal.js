import pets from "../js/pets.json";

export function showModal() {
  const btnClose = document.querySelector(".modal__btn");
  const modal = document.querySelector(".modal");
  const cards = document.querySelectorAll(".our-friends__item");
  const box = document.querySelector(".modal__box");
  const inner = document.querySelector(".modal__inner");
  const descr = document.querySelector(".modal__description");
  const type = document.querySelector(".modal__type");
  const breed = document.querySelector(".modal__breed");
  const name = document.querySelector(".modal__name");
  const list = document.querySelector(".modal__list");
  const body = document.querySelector(".body");
  const html = document.querySelector("html");
  //const headerPets = document.querySelector(".header--pets");

  cards.forEach(item => {
    item.addEventListener("click", () => {
      let index = item.dataset.id;
      box.innerHTML = `<img src="../images/modal/${pets[index]["name"]}.png" alt="" class="modal__img">`;
      descr.textContent = pets[index]["description"];
      type.textContent = `${pets[index]["type"]} - `;
      breed.textContent = pets[index]["breed"];
      name.textContent = pets[index]["name"];
      list.innerHTML = `<li class="modal__item"><span class="modal__info-title">Age:</span><span class="modal__info">${pets[index]["age"]}</span></li><li class="modal__item"><span class = "modal__info-title">Inoculations:</span><span class="modal__info">${pets[index]["inoculations"]}</span></li><li class="modal__item"><span class="modal__info-title">Diseases:</span><span class="modal__info">${pets[index]["diseases"]}</span></li><li class="modal__item"><span class="modal__info-title">Parasites:</span><span class="modal__info">${pets[index]["parasites"]}</span></li>`;
      modal.classList.add('modal--active');
      body.classList.add("overflow-hidden");
      html.style.overflowX = 'unset';
      //headerPets.style.overflowX = 'hidden';
    })
  })
  btnClose.addEventListener("click", () => {
    modal.classList.remove('modal--active');
    body.classList.remove("overflow-hidden");
    html.style.overflowX = 'hidden';
    //headerPets.style.overflowX = 'unset';
  })

  modal.addEventListener("click", function (e) {
    if (!(e.target.closest('.modal__wrapper'))) {
      modal.classList.remove('modal--active');
      body.classList.remove("overflow-hidden");
      html.style.overflowX = 'hidden';
      //headerPets.style.overflowX = 'unset';
    }
  })
}
