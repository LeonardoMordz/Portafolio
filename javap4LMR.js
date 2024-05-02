function genera_rfc() {
    let nombre = document.getElementById('nombre').value;
    let apellidoPaterno = document.getElementById('ap').value;
    let apellidoMaterno = document.getElementById('am').value;
    let anio = document.getElementById('anio').value;
    let mes = document.getElementById('mes').value;
    let dia = document.getElementById('dia').value;

    if (anio.length === 4) {
        anio = anio.slice(2); 
    }

    let rfc = apellidoPaterno.slice(0, 2) + apellidoMaterno.slice(0, 1) + nombre.slice(0, 1);
    rfc = rfc + anio + mes + dia;
    rfc = rfc.toUpperCase(); 
    document.getElementById('resultado').value = rfc;
}

