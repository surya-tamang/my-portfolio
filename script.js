
// -------------chat box-----------------

// let chatBoxButton = document.querySelector('#button');

// chatBoxButton.addEventListener('click',()=>{
//     document.querySelector('.msg').style.display = "block";
// })



/* ********************\ for hamburgers /******************* */

let menuBar = document.querySelector('nav');
let showButton = document.querySelector('.show');
let closeButton = document.querySelector('.close');
let list = document.querySelectorAll('li');



showButton.addEventListener('click', () => {
  showButton.style.display = 'none';
  closeButton.style.display = 'block';
  menuBar.style.display = 'block';
})

closeButton.addEventListener('click', () => {
  showButton.style.display = 'block';
  closeButton.style.display = 'none';
  menuBar.style.display = 'none';
})

/* ********************\ for typing animation /******************* */

var typed = new Typed('#type', {
  strings: ["I am Surya Tamang"],
  typeSpeed: 260,
});



/* ********************\ Fun title  /******************* */

let docTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "Where you goin? !!"
})
window.addEventListener("focus", () => {
  document.title = docTitle;
})



/* ********************\ for email validation /******************* */

let email = document.querySelector('#email');
let submitBtn = document.querySelector('#submitButton');

let validData = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submitBtn.addEventListener('click', () => {

  if (!email.value.match(validData)) {
    document.querySelector('#errorMsg').innerHTML = "Invalid email !"
    document.querySelector('#errorMsg').classList.add('red');
  }
  else {
    document.querySelector('#errorMsg').innerHTML = "Message sent successfully !"
    document.querySelector('#errorMsg').classList.add('blue');
  }
});