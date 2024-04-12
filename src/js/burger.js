export function addBurgerHandler() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header__navigation");
  const header = document.querySelector('.header');
  const body = document.querySelector('body'); 
  const wrapper = document.querySelector(".header__wrapper");

  const toggleMenu = () => {
    burger.classList.toggle('burger--open');
    header.classList.toggle('header--mobile');
    menu.classList.toggle("header__navigation--active");
    wrapper.classList.toggle("header__wrapper--active");
    body.classList.toggle("overflow-hidden");
  };

  burger.addEventListener("click", (e) => {
    e.stopPropagation(); 
    toggleMenu();
  });

  menu.addEventListener("click", (e) => {
    if (e.target.closest('.menu__item')) {
      toggleMenu();
    }
  });

  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && burger.classList.contains('burger--open')) {
      toggleMenu();
    }
  });

  return () => {
    burger.removeEventListener("click", toggleMenu);
    header.removeEventListener("click", toggleMenu);
    document.removeEventListener('click', toggleMenu);
  };
}
