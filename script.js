// ==================== VARIABLES ====================

const form = document.getElementById("formRegistro");
const mensaje = document.getElementById("mensaje");
const btnLimpiar = document.getElementById("btnLimpiar");


// ==================== MENSAJES ====================

function mostrarMensaje(texto, tipo) {

  mensaje.innerHTML = texto;

  mensaje.className = "alert alert-" + tipo;

}


// ==================== VALIDAR FORMULARIO ====================

function validarFormulario() {

  const errores = [];

  const nombre = form.nombre.value.trim();
  const correo = form.correo.value.trim();
  const telefono = form.telefono.value.trim();
  const edad = Number(form.edad.value);


  if (nombre.length < 3) {

    errores.push(
      "El nombre debe tener al menos 3 letras."
    );

  }


  if (
    !correo.includes("@") ||
    !correo.includes(".")
  ) {

    errores.push(
      "Escribe un correo válido."
    );

  }


  if (
    telefono.length !== 9 ||
    isNaN(telefono) ||
    telefono[0] !== "9"
  ) {

    errores.push(
      "El teléfono debe tener 9 números y empezar con 9."
    );

  }


  if (edad < 16 || edad > 90) {

    errores.push(
      "La edad debe estar entre 16 y 60 años."
    );

  }


  if (form.programa.value === "") {

    errores.push(
      "Selecciona un programa."
    );

  }


  if (form.turno.value === "") {

    errores.push(
      "Elige un turno."
    );

  }


  if (!form.terminos.checked) {

    errores.push(
      "Debes aceptar los términos y condiciones."
    );

  }


  return errores;

}


// ==================== ENVIAR FORMULARIO ====================

form.addEventListener(
  "submit",
  function (e) {

    e.preventDefault();

    const errores = validarFormulario();


    if (errores.length > 0) {

      let lista =
        "<strong>Corrige lo siguiente:</strong><ul class='mb-0'>";


      for (
        let i = 0;
        i < errores.length;
        i++
      ) {

        lista +=
          "<li>" + errores[i] + "</li>";

      }


      lista += "</ul>";


      mostrarMensaje(
        lista,
        "danger"
      );

    } else {

      const datos = {

        nombre:
          form.nombre.value.trim(),

        correo:
          form.correo.value.trim(),

        programa:
          form.programa.value,

        turno:
          form.turno.value

      };


      console.log(
        "POST simulado:",
        datos
      );


      mostrarMensaje(
        "¡Registro enviado con éxito! Gracias, " +
        datos.nombre +
        ".",
        "success"
      );


      form.reset();

    }

  }
);


// ==================== LIMPIAR ====================

btnLimpiar.addEventListener(
  "click",
  function () {

    form.reset();

    mensaje.innerHTML = "";

    mensaje.className = "";

  }
);


// ==================== AÑO AUTOMÁTICO ====================

document.getElementById("anio").textContent =
  new Date().getFullYear();