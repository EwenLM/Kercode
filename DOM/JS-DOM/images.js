// 1. Récupérer les éléments HTML des 2 boutons (left et right)

// 2. Ajouter des écouteurs d'événement à ces 2 boutons

// 3. Ecrire les fonctions de rappel (callback)



previous = document.querySelector(".left");
next = document.querySelector(".right");
previous.addEventListener('click', previousSlide);
next.addEventListener('click', nextSlide);
let slides= document.querySelectorAll('.slide');
let currentIndex=0;

function previousSlide(){
    currentIndex = (currentIndex -1 +slider.length)%slides.length;
    showSlide(currentIndex);
}

function nextSlide(){
    currentIndex = (currentIndex +1 +slider.length)%slides.length;
    showSlide(currentIndex);
}

showSlide(index){
    slides.forEach((slide)=>{
        slide.classList.add("hidden");
    })
    slide[index].classList.remove("hidden")
}