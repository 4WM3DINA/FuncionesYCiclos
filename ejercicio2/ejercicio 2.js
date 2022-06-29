// Ejercicio 2. Cambiar el color del cuadro principal al hacer click sobre uno de los colores.

let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let btn4 = document.querySelector("#btn-4");
let btn5 = document.querySelector("#btn-5");
let btn6 = document.querySelector("#btn-6");
let caja = document.querySelector("#caja");

const color = (e) => {
  if (e.target.style.backgroundColor === caja.style.backgroundColor) {
    caja.style.backgroundColor = "#fff";
  } else {
    caja.style.backgroundColor = e.target.style.backgroundColor;
  }
};

btn1.addEventListener("click", color);
btn2.addEventListener("click", color);
btn3.addEventListener("click", color);
btn4.addEventListener("click", color);
btn5.addEventListener("click", color);
btn6.addEventListener("click", color);
