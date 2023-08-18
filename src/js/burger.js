const burgerBtn = document.querySelector('.header__burger-container');
const menuContainer = document.querySelector('.header__container');

function handleToggleMenu() {
  menuContainer.classList.toggle('header__container_type_active');
  this.classList.toggle('active');
};

burgerBtn.addEventListener('click', handleToggleMenu);

