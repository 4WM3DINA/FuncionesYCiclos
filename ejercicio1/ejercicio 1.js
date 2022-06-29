// Ejercicio 1 - Validar formulario con expresiones regulares.
let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  limpiarErrores();

  let textNombre = document.querySelector("#nombre").value;
  let textAsunto = document.querySelector("#asunto").value;
  textMensaje = document.querySelector("#mensaje").value;

  let resultado = validar(textNombre, textAsunto, textMensaje);
  if (resultado == true) {
    exito();
  }
});

function limpiarErrores() {
  document.querySelector(".resultado").innerHTML = "";
  document.querySelector(".error-nombre").innerHTML = "";
  document.querySelector(".error-asunto").innerHTML = "";
  document.querySelector(".error-mensaje").innerHTML = "";
}

function exito() {
  document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito";
}

function validar(nombre, asunto, mensaje) {
  let pasamoslaValidacion = true;
  let validacionNombre = /[a-zA-Z]/gim;

  if (validacionNombre.test(nombre) == false) {
    document.querySelector(".error-nombre").innerHTML =
      "El nombre es requerido";
    pasamoslaValidacion = false;
  }

  let validacionAsunto = /[a-zA-Z]/gim;
  if (validacionAsunto.test(asunto) == false) {
    document.querySelector(".error-asunto").innerHTML =
      "El asunto es requerido";
    pasamoslaValidacion = false;
  }

  let validacionMensaje = /[a-zA-Z]/gim;
  if (validacionMensaje.test(mensaje) == false) {
    document.querySelector(".error-mensaje").innerHTML =
      "El mensaje es requerido";
    pasamoslaValidacion = false;
  }
  return pasamoslaValidacion;
}
