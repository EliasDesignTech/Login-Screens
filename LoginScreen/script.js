const btn = document.querySelector('.btn');
const info = document.querySelector('.info');

btn.addEventListener('click', () => {
    info.classList.toggle('open');

    if(info.className.endsWith('open')){
        btn.innerHTML = "<i class='bx bx-x-circle'></i>"
    }
    else{
        btn.innerHTML = "<i class='bx bx-menu-alt-left'></i>"
    }
});