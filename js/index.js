// Your code goes here


//1. 1st adventure image will scale up when you mouse over
const adventureImg = document.querySelector('.img-content');

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
});

//3. change nav color when clicked

const navRed = document.querySelectorAll('.nav-link')[0];
  navRed.addEventListener('click', () => {
    navRed.style.color = 'red';
  });
  const navBlue = document.querySelectorAll('.nav-link')[1];
  navBlue.addEventListener('click', () => {
    navBlue.style.color = 'blue';
  });
  const navGreen = document.querySelectorAll('.nav-link')[2];
  navGreen.addEventListener('click', () => {
    navGreen.style.color = 'green';
  });
  const navOrange = document.querySelectorAll('.nav-link')[3];
  navOrange.addEventListener('click', () => {
    navOrange.style.color = 'orange';
  });

//4.

const selectHeader = document.querySelectorAll(".btn");
selectHeader.forEach(button => {
button.addEventListener('mousedown', () => {
    button.style.backgroundColor = "black";
    button.style.color = "white";
  });
})

//5.

