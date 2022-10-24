const leftMenuLinks = document.querySelectorAll('.left-nav-list__link');
const linkLeftMenuActive = 'left-nav-list__link--active';

leftMenuLinks[1].classList.add(linkLeftMenuActive);

leftMenuLinks.forEach(link => {
  link.addEventListener('focusin', () => {
    leftMenuLinks.forEach(link => {
      link.classList.remove(linkLeftMenuActive);
    });
    link.classList.add(linkLeftMenuActive);
  })
});



const linksNavItem = document.querySelectorAll('.nav__list-item');
const linkNavActive = 'nav__list-item--active';

linksNavItem.forEach(link => {
  link.addEventListener('focusin', () => {
    linksNavItem.forEach(link => {
      link.classList.remove(linkNavActive);
    });
    link.classList.add(linkNavActive);
  })
})