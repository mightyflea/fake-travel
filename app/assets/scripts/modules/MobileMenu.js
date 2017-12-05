import $ from 'jquery'; //npm modules are already in path?

class MobileMenu {
	constructor(){
		// bad
		// $('.site-header__menu-icon').click(function(){
		// 	console.log('menu clicked');
		// })
		this.siteHeader = $('.site-header');
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleMenu.bind(this));
	}

	toggleMenu(){
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
		this.siteHeader.toggleClass('site-header--is-expanded');
		this.menuIcon.toggleClass('site-header__menu-icon--close-x')
	}
}

export default MobileMenu;
