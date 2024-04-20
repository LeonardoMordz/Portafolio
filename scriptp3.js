function evalua() {
  const cadena = document.getElementById('cadena').value;
  const resultadoParrafo = document.getElementById('parrafo');

  if (cadena.match(/[A-Z]/) && cadena.match(/[a-z]/)) {
    resultadoParrafo.textContent = 'La cadena contiene tanto mayúsculas como minúsculas.';
  } else if (cadena.match(/[A-Z]/)) {
    resultadoParrafo.textContent = 'La cadena contiene solo mayúsculas.';
  } else if (cadena.match(/[a-z]/)) {
    resultadoParrafo.textContent = 'La cadena contiene solo minúsculas.';
  } else {
    resultadoParrafo.textContent = 'La cadena no contiene ni mayúsculas ni minúsculas.';
  }
}
