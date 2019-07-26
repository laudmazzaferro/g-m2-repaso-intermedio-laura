'use strict';

const updateBtn = document.querySelector('.app__update');
const selectMood = document.querySelector('.app__mood');
const face = document.querySelector('.app__face');
const app = document.querySelector('.app');

//creando un numero aleatorio de 0 a 100
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function updateMood(){
    //cuando haga click en el formulario cambie el h1 al valor del formulario
    face.innerHTML =selectMood.value;
    // * Genera un numero random de 100 como maximo
    // guardo en una constante el valor random
    const randomNum = getRandomInt(100);
    //mostrar numero random aleatorio
    console.log(randomNum);
    // *si es un número par colocará el color de fondo del amarillo correcto (#ffcc00) y si es impar, usaremos el naranja fuego chileno (#ff9900).
    if (randomNum%2 === 0){
        app.classList.remove('app--alt');
        console.log('Es pagar');
    }else{
        app.classList.add('app--alt');

        console.log('Es impar');
    }
}
// para automaticamente cambiar la carita cuando seleccionamos en el formularion sin tener que darle click al boton 
//function changeFace(){
 //   face.innerHTML =selectMood.value;
//}
//selectMood .addEventListener('change',changeFace);
updateBtn.addEventListener('click',updateMood);