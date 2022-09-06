// ARCHIVO1.JS
//let palabras = ['CASA','PERRO','GATO','ELEFANTE'];
// guardamos el array en localStorage con stringify

//Los datos se reiniciaran al actualizar el navegador
//localStorage.setItem('palabras', JSON.stringify(palabras))

//Los datos creadors se guardaran al actualizar el navegador
//if(localStorage.getItem("palabras") === null) {
	//localStorage.setItem('palabras', JSON.stringify(palabras))
//}

// ARCHIVO2.JS
function agregarPalabra(){
    let dato = document.getElementById('texto').value.toUpperCase();
    // Obtenemos el array localStorage de palabrss y lo convertimos en objeto con parse
    let palabrasLocal = JSON.parse(localStorage.getItem("palabras"));
    // Agregamos el nuevo al array
    palabrasLocal.push(dato);
    // Lo pasamos por stringify para que se guarde como array
    let palabrasLocalNew = JSON.stringify(palabrasLocal);
    // Mostramos un alert para ver que todo este bien
   // alert(palabrasLocalNew);
    swal("Guardado :D", palabrasLocalNew, "success");
    // Guardamos el nuevo array
    localStorage.setItem('palabras', palabrasLocalNew);
   
}