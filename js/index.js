'use strict'

const abrirRegistro = document.querySelector(".btn-abrir-registro");
const cerrarRegistro = document.querySelector(".btn-cerrar-registro");
const registro = document.querySelector("#registro");

const abrirInicioSesion = document.querySelector(".btn-abrir-inicioSesion");
const cerrarInicioSesion = document.querySelector(".btn-cerrar-inicioSesion");
const inicioSesion = document.querySelector("#inicioSesion");

const abrirInicioSesionEnlace = document.querySelector(".btn-abrir-inicioSesionEnlace");
const abrirRegistroEnlace = document.querySelector(".btn-abrir-registroEnlace");

const contrasenaDialog = document.querySelector("#contrasenaDialog");
const abrirContrasena = document.querySelector(".btn-abrir-contrasena");
const cerrarContrasena = document.querySelector(".btn-cerrar-contrasena");

const nombreApellidosDialog = document.querySelector("#nombreApellidosDialog");
const abrirNombreApellidos = document.querySelector(".btn-abrir-nombreApellidos");
const cerrarNombreApellidos = document.querySelector(".btn-cerrar-nombreApellidos");

const fechaNacimientoDialog = document.querySelector("#fechaNacimientoDialog");
const abrirFechaNacimiento = document.querySelector(".btn-abrir-fechaNacimiento");
const cerrarFechaNacimiento = document.querySelector(".btn-cerrar-fechaNacimiento");

const nuevoSaldoDialog = document.querySelector("#nuevoSaldoDialog");
const abrirNuevoSaldo = document.querySelector(".btn-abrir-nuevoSaldo");
const cerrarNuevoSaldo = document.querySelector(".btn-cerrar-nuevoSaldo");

const editarDatosDialog = document.querySelector("#editarDatosDialog");
const abrirEditarDato = document.querySelectorAll(".btn-abrir-editarDatos");
const cerrarEditarDato = document.querySelector(".btn-cerrar-editarDatos");

const añadirDatosDialog = document.querySelector("#añadirDatosDialog");
const abrirAñadirDatos = document.querySelector(".btn-abrir-añadirDatos");
const cerrarAñadirDatos = document.querySelector(".btn-cerrar-añadirDatos");

const aceptarCookies = document.querySelector(".aceptar-cookies");

let carousel = document.querySelector("#carousel");
let images = [
  "imagenes/carruselUno.png",
  "imagenes/carruselDos.png",
  "imagenes/carruselTres.png",
  "imagenes/carruselCuatro.png",
  "imagenes/carruselCinco.png",
];

let currentIndex = 0;
let intervalId;

aceptarCookies.addEventListener("click", function () {
  document.querySelector(".banner-cookies").style.display = "none";
  let date = new Date(Date.now() + 86400e3);
  date = date.toUTCString();
  document.cookie = "usuario=miCookie; expires=" + date + "; path=/; secure";
});

if(abrirContrasena != null || cerrarContrasena != null) {
  abrirContrasena.addEventListener("click", ()=> {
	contrasenaDialog.show();
  })

  cerrarContrasena.addEventListener("click", ()=> {
    contrasenaDialog.close();
  })
}

if(abrirNombreApellidos != null || cerrarNombreApellidos != null) {
  abrirNombreApellidos.addEventListener("click", ()=> {
    nombreApellidosDialog.show();
  })

  cerrarNombreApellidos.addEventListener("click", ()=> {
    nombreApellidosDialog.close();
  })
}

if(abrirFechaNacimiento != null || cerrarFechaNacimiento != null) {
  abrirFechaNacimiento.addEventListener("click", ()=> {
    fechaNacimientoDialog.show();
  })

  cerrarFechaNacimiento.addEventListener("click", ()=> {
    fechaNacimientoDialog.close();
  })
}

if(abrirNuevoSaldo != null || cerrarNuevoSaldo != null) {
  abrirNuevoSaldo.addEventListener("click", ()=> {
    nuevoSaldoDialog.show();
  })

  cerrarNuevoSaldo.addEventListener("click", ()=> {
    nuevoSaldoDialog.close();
  })
}

if (abrirEditarDato.length > 0 || cerrarEditarDato != null) {
  abrirEditarDato.forEach((boton) => {
    boton.addEventListener("click", () => {
      editarDatosDialog.show();
    });
  });

  cerrarEditarDato.addEventListener("click", () => {
    editarDatosDialog.close();
  });
}

if(abrirAñadirDatos != null || cerrarAñadirDatos != null) {
  abrirAñadirDatos.addEventListener("click", ()=> {
    añadirDatosDialog.show();
  })

  cerrarAñadirDatos.addEventListener("click", ()=> {
    añadirDatosDialog.close();
  })
}

if(abrirRegistro != null || cerrarRegistro != null) {
  abrirRegistro.addEventListener("click", ()=> {
    registro.show();
    inicioSesion.close();
  })

  cerrarRegistro.addEventListener("click", ()=> {
    registro.close();
  })
}

if(abrirInicioSesion != null || cerrarInicioSesion != null) {
  abrirInicioSesion.addEventListener("click", ()=> {
    inicioSesion.show();
    registro.close();
  })

  cerrarInicioSesion.addEventListener("click", ()=> {
    inicioSesion.close();
  })
}

if(abrirInicioSesionEnlace != null || abrirRegistroEnlace != null) {
  abrirInicioSesionEnlace.addEventListener("click", ()=> {
    inicioSesion.show();
    registro.close();
  })

  abrirRegistroEnlace.addEventListener("click", ()=> {
    registro.show();
    inicioSesion.close();
  })
}

function showImage() {
  carousel.innerHTML = `
        <img src="${images[currentIndex]}" alt="Imagen Carrusel">
      `;
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage();
  updateIndicators();
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage();
  updateIndicators();
}

function startCarousel() {
  showImage();
  intervalId = setInterval(nextImage, 4000);
}

function updateIndicators() {
  let indicators = document.querySelectorAll(".carousel-indicators button");
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

startCarousel();

document.getElementById('prevButton').addEventListener('click', function () {
  clearInterval(intervalId);
  prevImage();
  intervalId = setInterval(nextImage, 4000);
});

document.getElementById('nextButton').addEventListener('click', function () {
  clearInterval(intervalId);
  nextImage();
  intervalId = setInterval(nextImage, 4000);
});

let indicatorsContainer = document.querySelector(".carousel-indicators");
images.forEach((image, index) => {
  let indicator = document.createElement("button");
  indicator.addEventListener("click", function () {
    clearInterval(intervalId);
    currentIndex = index;
    showImage();
    updateIndicators();
    intervalId = setInterval(nextImage, 4000);
  });
  indicatorsContainer.appendChild(indicator);
});