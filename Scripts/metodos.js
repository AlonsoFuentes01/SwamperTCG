








function obtenerString(ids, variable, min, max){
    let apuntar = document.getElementById(ids);
    let valor = validarString(apuntar.value, min, max);
    return apuntarInput(apuntar, variable, valor);
}

function obtenerFloat(ids, variable, min, max){
    let apunta = document.getElementById(ids);
    let valor = validarFloat(apunta.value, min, max);
    return apuntarInput(apunta, variable, valor);
}

function obtenerFecha(ids, variable) {
    let apunta = document.getElementById(ids);
    let valor = validarFecha(apunta.value);
    return apuntarInput(apunta, variable, valor);
}

function obtenerCorreo(ids, variable) {
    let apunta = document.getElementById(ids);
    let valor = validarCorreo(apunta.value);
    return apuntarInput(apunta, variable, valor);
}

function apuntarInput(elemento, variable, valor){
    if(valor){
        elemento.classList.remove("border-red");
        return elemento;
    } else {
        alert(variable + " no válido");
        elemento.classList.add("border-red");
        elemento.focus();
        return null;
    }
}

function validarFloat(value, min, max){
    let trimmedValue = value.trim();
    if (trimmedValue === "" || isNaN(trimmedValue)) {
        return false;
    }
    let numero = parseFloat(trimmedValue);
    if (min !== undefined && numero < min){
        return false;
    } 
    if (max !== undefined && numero > max){
        return false;
    } 
    return true;
}

function validarString(text, min, max){
    if (typeof text !== "string") {
        return false;
    }
    let trimmedText = text.trim();
    if(trimmedText.length >= min && trimmedText.length <= max){
        return true;
    } else {
        return false;
    }
}

function validarFecha(value) {
    if (value === "") {
        return false;
    }

    let anioNacimiento = parseInt(value.slice(0, 4));
    let edad = 2026 - anioNacimiento;

    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

function validarCorreo(value) {
    let trimmedValue = value.trim().toLowerCase();

    if (trimmedValue === "") {
        return false;
    }

    if (trimmedValue.endsWith("@duoc.cl") || trimmedValue.endsWith("@gmail.com")) {
        return true;
    } else {
        return false;
    }
}