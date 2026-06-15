console.log("Conectado...");

// Numero random de el 1 al 100;
let randomInt = Math.floor(Math.random() * 100);

// Definiendo las elecciones de la PC
function getRandomInt() {
     if(randomInt >= 10 && randomInt < 50) {
        return "Piedra";
     } else if(randomInt >= 50 && randomInt < 75) {
        return "Papel";
     } else if(randomInt >= 75) {
        return "Tijeras";
     } else {
        return "";
     }
}
function getComputerChoice() {
    let respuestaPc = getRandomInt();
    return respuestaPc;
}
let eleccionPC = getComputerChoice();


// Definiendo las elecciones de la persona
function getHumanChoice() {
    let respuesta = prompt("Pieda papel o tijeras!", "Piedra");
    return respuesta;
}
let eleccionHumano = getHumanChoice();


// Comparando ambas elecciones para definir el ganador
function comparacion() {
    if(eleccionHumano === eleccionPC) {
        return "Empate";
    } else if(eleccionHumano === "Piedra" && eleccionPC === "Tijeras") {
        return "Punto para el humano!";
    } else if(eleccionHumano === "Tijeras" && eleccionPC === "Papel") {
        return "Punto para el humano!"
    } else if(eleccionHumano === "Papel" && eleccionPC === "Piedra") {
        return "Punto para el humano!";
    } else {
        return "Punto para la PC!";
    }
}

console.log(comparacion());
