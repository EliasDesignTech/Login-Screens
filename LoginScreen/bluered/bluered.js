const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const regsiterLink = document.querySelector('.register-link');

regsiterLink.addEventListener('click', () => {
    container.classList.add('active');
});
loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});