// Inicializar modal
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

document.getElementById("btn-reservar").addEventListener("click", reserva);

function validarDatos() {
  return true;
}

function abrirModal() {
  let instance = M.Modal.getInstance(document.querySelector("#modal"));
  instance.open();
}

function reserva() {
  if (validarDatos()) {
    // Estimado(a) [nombre y apellido del paciente], su hora para [especialidad] ha sido reservada para el
    // día [fecha] a las [hora]. Además, se le envió un mensaje a su correo [email] con el detalle de su cita.
    // Gracias por preferirnos.
  } else {
  }
  abrirModal();
}
