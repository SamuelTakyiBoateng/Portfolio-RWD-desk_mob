// "use strict";
/** ************Selection of Elements*********** */
// Harburger-mobile view only
const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const menuItems = document.querySelectorAll('.menu_Items');

/** ************Functions sections*********** */
function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});
