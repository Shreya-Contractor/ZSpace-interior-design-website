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
window.addEventListener('scroll',shadowHeader)

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}
function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}
setInterval(next,2500);

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll',scrollUp);

const section = document.querySelectorAll('section[id]');

const scrollActive = () =>{
  const scrollDown = window.scrollY;

  section.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link');
    }else{
      sectionClass.classList.remove('active-link');
    }
    
  });
}
window.addEventListener('scroll',scrollActive);

const themeButton = document.getElementById('theme-button');
themeButton.onclick = function(){
  document.body.classList.toggle('dark-theme');
  if(document.body.classList.contains('dark-theme')){
    themeButton.className = "fa-regular fa-sun"; 
  }else{
    themeButton.className = "fa-regular fa-moon";
  }
};

