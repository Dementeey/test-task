const goToTop = document.querySelector('.page-footer__go-to-top');
const burger = document.querySelector('.burger__wrap');

const burgerShow = () => {
  const burger = document.querySelector('.burger');
  const pageNav = document.querySelector('.page-nav');

  if (burger.classList.contains('burger--active') || pageNav.classList.contains('page-nav--show')) {
    burger.classList.remove('burger--active');
    pageNav.classList.remove('page-nav--show');
    return;
  }

  burger.classList.add('burger--active');
  pageNav.classList.add('page-nav--show');
  return;
}

goToTop.addEventListener('click', () => document.documentElement.scrollTop = 0);
burger.addEventListener('click', burgerShow);

