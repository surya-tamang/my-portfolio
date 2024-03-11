
// -------------chat box-----------------

let chatBoxButton = document.querySelector('#button');

chatBoxButton.addEventListener('click',()=>{
    document.querySelector('.msg').style.display = "block";
})



// show and close the menu bars 

let menuBar = document.querySelector('nav');
let showButton = document.querySelector('.show');
let closeButton = document.querySelector('.close');
let list = document.querySelectorAll('li');



showButton.addEventListener('click', ()=>{
    showButton.style.display = 'none';
    closeButton.style.display = 'block';
    menuBar.style.display = 'block';
})

closeButton.addEventListener('click', ()=>{
    showButton.style.display = 'block';
    closeButton.style.display = 'none';
    menuBar.style.display = 'none';
})

// for (let i = 0; i<list.length; i++){
//     list[i].addEventListener('click',()=>{
//         menuBar.style.display = 'none';
//         closeButton.style.display = 'none';
//         showButton.style.display = 'block';
//     })
// }

//for typing animation

var typed = new Typed('#type', {
    strings:["Surya Tamang"],
    typeSpeed: 260,
    loop:true
  });


