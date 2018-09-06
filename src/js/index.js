const goToTop = document.querySelector('.page-footer__go-to-top');

goToTop.addEventListener('click', () => {
	document.documentElement.scrollTop = 0
});
