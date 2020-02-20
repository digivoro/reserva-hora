document.addEventListener("DOMContentLoaded", function() {
  // Inicializar Modal
  var modales = document.querySelectorAll(".modal");
  var instanciasModales = M.Modal.init(modales);
  // Inicializar Select
  var selectores = document.querySelectorAll("select");
  var instanciasSelectores = M.FormSelect.init(selectores);
});

document.getElementById("btn-reservar").addEventListener("click", reserva);

function validarDatos() {
  return true;
}
document.querySelector("#rut").addEventListener("input", function() {
  let regexRut = /^(\d{1,2}\.\d{3}\.\d{3}-[0-9kK]{1})|(\d{7,8}-[0-9kK]{1})$/;
  let rut = this.value;
  console.log("Testing:", rut);
  if (regexRut.test(rut)) {
    console.log("True");
  } else {
    console.log("False");
  }
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!
// BUSCAR REGEX NOMBRE!!!!!!!
document.querySelector("#nombres").addEventListener("input", function() {
  let regexNombre = /[a-z]/;

  console.log("Testing:", this.value);
  if (regexNombre.test(this.value)) {
    console.log("True");
  } else {
    console.log("False");
  }
});

document.querySelector("#email").addEventListener("input", function() {
  let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  console.log("Testing:", this.value);
  if (regexEmail.test(this.value)) {
    console.log("True");
  } else {
    console.log("False");
  }
});

function abrirModal() {
  let instance = M.Modal.getInstance(document.querySelector("#modal"));
  instance.open();
}

function reserva() {
  if (validarDatos()) {
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let especialidad = document.getElementById("especialidad").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let email = document.getElementById("email").value;
    let texto = `Estimado(a) ${nombres} ${apellidos}, su hora para ${especialidad} ha sido reservada para el
    día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${email} con el detalle de su cita.
    Gracias por preferirnos.`;
    document.getElementById("texto-modal").innerHTML = texto;
  } else {
  }
  abrirModal();
}
