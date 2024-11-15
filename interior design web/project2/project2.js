const searchButton = document.getElementById('search-button');
const searchClose = document.getElementById('search__close');
const searchContent = document.getElementById('search-content');

if (searchButton){
    searchButton.addEventListener('click',()=>{
        searchContent.classList.add('show-search');
    });
}

if(searchClose){
    searchClose.addEventListener('click',()=>{
        searchContent.classList.remove('show-search');
   });
}

const loginButton = document.getElementById('login-button');
const loginClose = document.getElementById('login__close');
const loginContent = document.getElementById('login-content');

if (loginButton){
    loginButton.addEventListener('click',()=>{
        loginContent.classList.add('show-login');
    });
};

if(loginClose){
    loginClose.addEventListener('click',()=>{
        loginContent.classList.remove('show-login');
   });
};

const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header');
};
window.addEventListener('scroll',shadowHeader);

const themeButton = document.getElementById('theme-button');
themeButton.onclick = function(){
  document.body.classList.toggle('dark-theme');
  if(document.body.classList.contains('dark-theme')){
    themeButton.className = "fa-regular fa-sun"; 
  }else{
    themeButton.className = "fa-regular fa-moon";
  }
}