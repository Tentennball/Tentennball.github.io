const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "namelist";

function btnClick(event){
    event.preventDefault();
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    submitLogin(username);
}
function submitLogin(username){
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}!`;
    logoutBtn.addEventListener("click", reLogin);
    loginInput.value="";
}
function reLogin(){
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    newLogin();
}

const savedLocalStr = localStorage.getItem(USERNAME_KEY);

if(savedLocalStr === null){
    newLogin();

    }
else{
     submitLogin(savedLocalStr);

    }

function newLogin(){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",btnClick);

}