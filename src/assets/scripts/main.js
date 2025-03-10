/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

const button = document.getElementById('toggleButton');
const image = document.getElementById('image');
const preparation = document.getElementById('preparation');

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

button.addEventListener('click', () => { 
  const image = document.getElementById('image');
  const preparation = document.getElementById('preparation');
  if (image.classList.contains('ver')) {
    image.classList.replace('ver', 'ocultar');
    preparation.classList.replace('ocultar', 'ver');   
    button.innerHTML = 'Volver' ;
  } else {
    image.classList.replace('ocultar', 'ver');
    preparation.classList.replace('ver', 'ocultar'); 
    button.innerHTML = 'Mostrar Preparación' ;
  }
});
