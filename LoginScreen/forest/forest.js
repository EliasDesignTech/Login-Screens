const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const regsiterLink = document.querySelector('.register-link');
const btnScreen = document.querySelector('.btnScreen');
const btnClose = document.querySelector('.close');

regsiterLink.addEventListener('click', () => {
    container.classList.add('active');
});
loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});
btnScreen.addEventListener('click', () => {
    container.classList.add('on');
});
btnClose.addEventListener('click', () => {
    container.classList.remove('on');
});