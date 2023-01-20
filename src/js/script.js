/* -------------закончился корм----------------- */

let containerCart = document.querySelectorAll('.main__box'),
    taste = document.querySelectorAll('.main__box-content_discription'),
    ended = document.querySelectorAll('.main__box-subtitle'),
    corner = document.querySelectorAll('.main__box-title_corner'),
    catImage = document.querySelectorAll('.main__box-content_cat'),
    circle = document.querySelectorAll('.main__box-content_circle'),
    title = document.querySelectorAll('.main__box-title_txt'),
    content = document.querySelectorAll('.main__box-content'),
    cart = document.querySelectorAll('.main__box-cart'),
    bay = document.querySelectorAll('.main__box-subtitle_buy'),
    subtitleActive = document.querySelectorAll('.main__box-subtitle_active');

containerCart.forEach((item, i) => {
    if(item.className == 'main__box disable') {
        corner[i].classList.add('disable');
        catImage[i].classList.add('disable');
        circle[i].classList.add('disable');
        ended[i].classList.add('disable');
    }else {
        corner[i].classList.remove('disable');
        catImage[i].classList.remove('disable');
        circle[i].classList.remove('disable');
        ended[i].classList.remove('disable');
    }
});

containerCart.forEach((item, i) => {
    if(item.className == 'main__box disable') {
        let step = taste[i].textContent;
        ended[i].textContent = `Печалька, ${step} закончился.`
    }
});

/* -------------Активное акно----------------- */

function active(n) {
    containerCart[n].classList.add('active');
    corner[n].classList.add('active');
    cart[n].classList.add('active');
    title[n].classList.add('active');
    content[n].classList.add('active');
    circle[n].classList.add('active');
    subtitleActive[n].style.display = 'block';
    ended[n].style.display = 'none';
}
function disable(n) {
    containerCart[n].classList.remove('active');
    corner[n].classList.remove('active');
    cart[n].classList.remove('active');
    title[n].classList.remove('active');
    content[n].classList.remove('active');
    circle[n].classList.remove('active');
    subtitleActive[n].style.display = 'none';
    ended[n].style.display = 'block';
}


function red (n) {
    corner[n].classList.add('red');
    title[n].classList.add('red');
    content[n].classList.add('red');
    circle[n].classList.add('red');
}
function redDisable (n) {
    corner[n].classList.remove('red');
    title[n].classList.remove('red');
    content[n].classList.remove('red');
    circle[n].classList.remove('red');
}


cart.forEach((item, i) => {
    item.addEventListener('click', () => {
        if(containerCart[i].className == 'main__box'){
            active(i);
            red(i);
        }else {
            disable(i);
            redDisable(i);
        }
    });
    item.addEventListener('mouseout', () => {
        redDisable(i);
    } );
});

bay.forEach((item, i) => {
    item.addEventListener('click', () => {
        if(containerCart[i].className == 'main__box'){
            active(i);
        }else {
            disable(i);
        }
    });
});

