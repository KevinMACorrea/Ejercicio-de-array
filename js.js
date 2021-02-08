var nombre = '';
var contraseña = '';
var numeros = '0123456789';
var especiales = '!"#%$&()*+,-/.:;=@[\]^_-`{|}~ºª';

do{
    nombre = prompt('Introduce su nombre de usuario: ');
    contraseña = prompt('Introduzca su contraseña: ');
    var arrayNombre = Array.from(nombre);
    var arrayContraseña = Array.from(contraseña);
}while(comprobacionNombreMinusculas == true || comprobacionNombreNumero == true  && comprobacionContraseñaMayuscula &&
        comprobacionContraseñaMinuscula && comprobacionContraseñaNumero && comprobacionContraseñaEspecial);




function comprobacionNombreMinusculas(arrayNombre) {
    
    for (i = 0; i <= arrayNombre.length; i++){
        if (arrayNombre[i] == arrayNombre[i].toLowerCase) {
            return true;
        }
    }
    return false;
}

function comprobacionNombreNumero(arrayNombre){
    
    for (i = 0; i <= arrayNombre.length; i++){
        if (numeros.indexOf(arrayNombre[i]) != -1) {
            return true;
        }
    }
    return false;
}

function comprobacionContraseñaMayuscula(arrayContraseña){
    
    for (i = 0; i <= arrayContraseña.length; i++){
        if (arrayContraseña[i] == arrayContraseña[i].toUpperCase) {
            return true;
        }
    }
    return false;
}

function comprobacionContraseñaMinuscula(arrayContraseña){
    
    for (i = 0; i <= arrayContraseña.length; i++){
        if (arrayContraseña[i] == arrayContraseña[i].toLowerCase) {
            return true;
        }
    }
    return false;
}

function comprobacionContraseñaNumero(arrayContraseña){
    
    for (i = 0; i <= arrayContraseña.length; i++){
        if (numeros.indexOf(arrayContraseña[i]) != -1) {
            return true;
        }
    }
    return false;
}

function comprobacionContraseñaEspecial(arrayContraseña){
    
    for (i = 0; i <= arrayContraseña.length; i++){
        if (especiales.indexOf(arrayContraseña[i]) != -1) {
            return true;
        }
    }
    return false;
}