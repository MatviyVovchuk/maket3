document.querySelector('.menu-burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.menu-nav-ul').classList.toggle('open');
})