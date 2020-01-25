class Menu{
  constructor(menu){
    this.menu = menu;
  }
  menuOpen(){
    this.menu.classList.toggle('header-menu_is-opened');
  }
  menuClose(event){
    if (!event.target.classList.contains('header__menu')) {
      this.menu.classList.toggle('header-menu_is-opened', false);
    }
  }
}

const menu = new Menu(document.querySelector('.header-menu'))

document.querySelector('.header__menu').addEventListener('click', function(){
  menu.menuOpen();
});

document.addEventListener('click', function(event){
  menu.menuClose(event);
});
