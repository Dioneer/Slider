
let userIcon = document.querySelector('.user-header__icon');
userIcon.addEventListener('click', function (e) {
	let userMenu = document.querySelector('.user-header__menu');
	userMenu.classList.toggle('active');
});

//клик в молоко======================================================================================
document.addEventListener('click', function (e) {
	if (!e.target.closest('.user-header')) {
		let userMenu = document.querySelector('.user-header__menu');
		userMenu.classList.remove('active');
	}
});
