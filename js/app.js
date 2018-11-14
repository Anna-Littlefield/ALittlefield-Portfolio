
function classToggle() {
  const navs = document.querySelectorAll('.NavbarItems')
  
  navs.forEach(nav => nav.classList.toggle('NavbarToggleShow'));
}
document.querySelector('.NavbarLink-toggle')
  .addEventListener('click', classToggle);


  