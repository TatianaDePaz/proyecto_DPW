const iconoMenu = document.querySelector('#icono_menu'),
    menu = document.querySelector('#menu');


iconoMenu.addEventListener('click', (e) => {

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');


    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'img/menu.png'){
        e.target.setAttribute('src','img/menu2.png');
    }else{
        e.target.setAttribute('src','img/menu.png');
    }
});