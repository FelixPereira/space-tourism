'use strict';

const IconHumburger = document.querySelector('.header-iconHumburger');
const IconCloseMenu = document.querySelector('.header-iconClose');
const BackDrop = document.querySelector('.backdrop');
const headerMenu = document.querySelector('.header-navigation_mobile');


function showMenu() {
  headerMenu.classList.toggle('hidden');
  BackDrop.style.display = 'block';
  IconCloseMenu.style.display = 'block';
  IconHumburger.style.display = 'none';
}

function closeMenu() {
  headerMenu.classList.toggle('hidden');
  BackDrop.style.display = 'none';
  IconCloseMenu.style.display = 'none';
  IconHumburger.style.display = 'block';
}

IconHumburger.addEventListener('click', showMenu);
IconCloseMenu.addEventListener('click', closeMenu);
BackDrop.addEventListener('click', closeMenu);