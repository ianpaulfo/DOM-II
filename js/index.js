// Your code goes here


//1. 1st adventure image will scale up when you mouse over
const adventureImg = document.querySelector('.img-content');
console.log('advenstureImg', adventureImg);

adventureImg.addEventListener("mouseenter", () => {
  adventureImg.style.transform="scale(1.2)";
  adventureImg.style.transition="all 0.3s";
})

adventureImg.addEventListener("mouseleave", () => {
  adventureImg.style.transform = "scale(1)";
  adventureImg.style.transition="all 0.3s";
})

//2. double click to change header image
const jumpImg = document.querySelector('.intro img');
   
jumpImg.addEventListener('dblclick', () => {
    jumpImg.src = "img/doran-erickson-gdAuwo-qj5k-unsplash.jpg";
})

//3.
// cont redTxt = document.querySelectorAll('.nav');

// redTxt.addEventListener("mouseover", () => {
//     redTxt.style.backgroundColor = "red";
// })