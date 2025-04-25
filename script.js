// script.js

// Función principal para iniciar el escaneo
function iniciarEscaneo() {
  const scanner = new Html5Qrcode("reader"); // "reader" es el id del div donde se muestra el video

  // Configuración de la cámara
  const config = {
    fps: 10, // Cuadros por segundo
    qrbox: 250 // Tamaño del recuadro de escaneo
  };

  // Iniciar la cámara trasera
  scanner.start(
    { facingMode: "environment" }, // Usa cámara trasera (modo 'environment')
    config,
    (codigoQR) => { // Función cuando se detecta un código
      console.log(`Código detectado: ${codigoQR}`);
      document.getElementById('resultado').innerText = `Código detectado: ${codigoQR}`;

      // Detener el escaneo después de leer el código
      scanner.stop().then(() => {
        console.log("Escaneo detenido exitosamente.");
      }).catch((error) => {
        console.error("Error al detener el escaneo: ", error);
      });
    },
    (error) => { // Función en caso de error durante el escaneo
      console.warn(`Error escaneando: ${error}`);
    }
  )
  .catch((err) => { // En caso de error al iniciar la cámara
    console.error("No se pudo iniciar el escáner: ", err);
    document.getElementById('resultado').innerText = `Error iniciando la cámara: ${err}`;
  });
}

// Llamar la función al cargar la página
window.addEventListener('load', iniciarEscaneo);
