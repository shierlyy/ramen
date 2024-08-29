const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".nav-list");

if(hamburger){
    hamburger.addEventListener("click", () =>{
        navlist.classList.toggle("open");
    });
}

// promo
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex+=n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide");
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length
    }
    for(i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// validate contact form
//     const form = document.getElementById("name");
//     const email = document.getElementById("email");
//     const phone = document.getElementById("phone");

//     form.addEventListener('submit', (e)=> {
//         e.preventDefault();
//         val();
//     })

// function val(){
//     const name = name.value.trim();
//     const email = email.value.trim();
//     const phone = phone.value.trim();

//     if(name === ''){
//         setErrorFor(name, 'Full Name cannot be blank')
//     }
// }