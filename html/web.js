function accio() {
    alert("Has contractat FBH!");
  }
  
  var btn = document.querySelector('.btn');
  btn.addEventListener('click', accio);
  
  // Agregar la funci�n para activar el evento del bot�n con la tecla Enter
  btn.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      accio();
    }
  });
  //Esto es especialmente importante para las personas que utilizan dispositivos de asistencia como lectores de pantalla o teclados en lugar de un mouse.