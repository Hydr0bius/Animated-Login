const signUp = document.querySelector('.signUpBtn-link');
const signIn = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.wrapper');

signUp.addEventListener('click', () =>{
    wrapper.classList.toggle('active');
});
signIn.addEventListener('click', () =>{
    wrapper.classList.toggle('active');
});