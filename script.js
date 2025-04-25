function onScanSuccess(decodedText, decodedResult) {
  document.getElementById('resultado').innerText = `Código escaneado: ${decodedText}`;
  html5QrCode.stop(); // Detener escaneo después de un resultado
}

function onScanError(errorMessage) {
  // Puedes mostrar errores o simplemente ignorarlos
  console.log("Error de escaneo:", errorMessage);
}

const html5QrCode = new Html5Qrcode("reader");

Html5Qrcode.getCameras().then(devices => {
  if (devices && devices.length) {
    html5QrCode.start(
      devices[0].id,
      {
        fps: 10,    // Frames por segundo
        qrbox: 250  // Área de escaneo
      },
      onScanSuccess,
      onScanError
    );
  }
}).catch(err => {
  console.error("No se pudo acceder a la cámara:", err);
});
