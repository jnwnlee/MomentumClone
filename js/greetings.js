const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = 'username';

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
}

function handleLinkClick(event){
    event.preventDefault();
    alert("you clicked the url");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsername}`
}