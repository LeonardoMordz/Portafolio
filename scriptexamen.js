// Función para ver si una frase es un palíndromo
function esPalindromo(cadena) {
    // Convertimos la cadena a minúsculas y quitamos espacios
    let cadenaLimpia = cadena.toLowerCase().replace(/ /g, "");
    // Revertimos la cadena
    let cadenaReversa = cadenaLimpia.split("").reverse().join("");
    // Comparamos la cadena original sin espacios con la revertida
    return cadenaLimpia === cadenaReversa;
}

// Función que se ejecuta al pulsar el botón
function verificarPalindromo() {
    // Obtenemos la cadena del cuadro de texto
    let cadena = document.getElementById("cadena").value;
    // Obtenemos el elemento donde mostraremos el resultado
    let resultadoElemento = document.getElementById("resultado");
    
    // Si la cadena está vacía, mostramos un mensaje
    if (cadena.trim() === "") {
        resultadoElemento.innerText = "Por favor, ingrese una cadena.";
        return;
    }
    
    // Verificamos si la cadena es un palíndromo
    let esPalindromoResultado = esPalindromo(cadena);
    // Mostramos el resultado
    if (esPalindromoResultado) {
        resultadoElemento.innerText = `La frase "${cadena}" es un palíndromo`;
    } else {
        resultadoElemento.innerText = `La frase "${cadena}" no es un palíndromo`;
    }
}

