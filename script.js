function onScanSuccess(decodedText, decodedResult) {
  document.getElementById('resultado').innerText = `Código escaneado: ${decodedText}`;
  html5QrCode.stop();
}

function onScanError(errorMessage) {
  console.log(errorMessage);
}

const html5QrCode = new Html5Qrcode("reader");

Html5Qrcode.getCameras().then(devices => {
  if (devices && devices.length) {
    html5QrCode.start(
      devices[0].id,
      {
        fps: 10,
        qrbox: 250
      },
      onScanSuccess,
      onScanError
    );
  }
}).catch(err => {
  console.error("Error accediendo a la cámara", err);
});
