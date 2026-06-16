const piedra = document.querySelector(".piedra")
const papel = document.querySelector(".papel")
const tijera = document.querySelector(".tijera")
const persona = document.querySelector("#persona");
const pc = document.querySelector("#pc");
const vs = document.querySelector("#vs");
const marcador = document.querySelector("#marcador");

let puntosHumano = "";
let puntosPC = "";
let rondasJugadas = "";

// Definiendo las elecciones de la PC
function getRandomInt() {
    let randomInt = Math.floor(Math.random() * 100); // Numero random de el 1 al 100;
     if(randomInt < 33) {
        return "Piedra!";
     } else if(randomInt < 66) {
        return "Papel!";
     } else if(randomInt > 66) {
        return "Tijeras!";
     } else {
        return "";
     }
}
function getComputerChoice() {
    let respuestaPc = getRandomInt();
    return respuestaPc;
}

// Comparando ambas elecciones para definir el ganador
function comparacion() {
    if(eleccionHumano === eleccionPC) {
        return "Empate";
    } else if(eleccionHumano === "Piedra!" && eleccionPC === "Tijeras!") {
        return "Punto para el humano!";
    } else if(eleccionHumano === "Tijera!" && eleccionPC === "Papel!") {
        return "Punto para el humano!"
    } else if(eleccionHumano === "Papel!" && eleccionPC === "Piedra!") {
        return "Punto para el humano!";
    } else {
        return "Punto para la PC!";
    }
    let resultado = "";
}

// Haciendo que la PC elija al mismo tiempo que la persona
let eleccionPC = "";

// Definiendo elecciones de la persona mediante los botones



let eleccionHumano = "";
    piedra.addEventListener("click", function () {
        if(rondasJugadas < 5) {
        persona.innerHTML = "";
        pc.innerHTML = "";
        vs.innerHTML = "";

        eleccionHumano = "Piedra!";
        parrafoHumano = document.createElement("p");
        parrafoHumano.textContent = eleccionHumano;
        persona.appendChild(parrafoHumano);

        eleccionPC = getComputerChoice();
        parrafoPC = document.createElement("p");
        parrafoPC.textContent = eleccionPC;
        pc.appendChild(parrafoPC);

        resultado = comparacion();
        parrafo = document.createElement("p");
        parrafo.textContent = resultado;
        vs.appendChild(parrafo);

        resultadoRondas = comparacion();
        if(resultadoRondas === "Punto para el humano!") {
            puntosHumano++;
        } else if(resultadoRondas === "Punto para la PC!") {
            puntosPC++;
        } 
        rondasJugadas++;
        marcador.textContent = `Humano: ${puntosHumano} | ${puntosPC} :PC`;

            if(rondasJugadas === 5) {
                const mensajeGanador = document.createElement("p");
                if(puntosHumano > puntosPC) {
                    mensajeGanador.textContent = "GANASTE!!";
                } else if(puntosHumano == puntosPC) {
                    mensajeGanador.textContent = "EMPATE!!";
                } else {
                    mensajeGanador.textContent = "PERDISTE!! Vuelve a intentarlo";
                }

                ganador.appendChild(mensajeGanador);
            }
        }
    });

    papel.addEventListener("click", function () {
        if(rondasJugadas < 5) {
        persona.innerHTML = "";
        pc.innerHTML = "";
        vs.innerHTML = "";

        eleccionHumano = "Papel!"
        parrafoHumano = document.createElement("p");
        parrafoHumano.textContent = eleccionHumano;
        persona.appendChild(parrafoHumano);

        eleccionPC = getComputerChoice();
        parrafoPC = document.createElement("p");
        parrafoPC.textContent = eleccionPC;
        pc.appendChild(parrafoPC);

        resultado = comparacion();
        parrafo = document.createElement("p");
        parrafo.textContent = resultado;
        vs.appendChild(parrafo);

        resultadoRondas = comparacion();
        if(resultadoRondas === "Punto para el humano!") {
            puntosHumano++;
        } else if(resultadoRondas === "Punto para la PC!") {
            puntosPC++;
        } 
        rondasJugadas++;
        marcador.textContent = `Humano: ${puntosHumano} | ${puntosPC} :PC`;

            if(rondasJugadas === 5) {
                const mensajeGanador = document.createElement("p");
                if(puntosHumano > puntosPC) {
                    mensajeGanador.textContent = "GANASTE!!";
                } else if(puntosHumano == puntosPC) {
                    mensajeGanador.textContent = "EMPATE!!";
                } else {
                    mensajeGanador.textContent = "PERDISTE!! Vuelve a intentarlo";
                }

                ganador.appendChild(mensajeGanador);
            }
        }
    });

    tijera.addEventListener("click", function () {
        if(rondasJugadas < 5) {
        persona.innerHTML = "";
        pc.innerHTML = "";
        vs.innerHTML = "";

        eleccionHumano = "Tijera!";
        parrafoHumano = document.createElement("p");
        parrafoHumano.textContent = eleccionHumano;
        persona.appendChild(parrafoHumano);

        eleccionPC = getComputerChoice();
        parrafoPC = document.createElement("p");
        parrafoPC.textContent = eleccionPC;
        pc.appendChild(parrafoPC);

        resultado = comparacion();
        parrafo = document.createElement("p");
        parrafo.textContent = resultado;
        vs.appendChild(parrafo);

        resultadoRondas = comparacion();
        if(resultadoRondas === "Punto para el humano!") {
            puntosHumano++;
        } else if(resultadoRondas === "Punto para la PC!") {
            puntosPC++;
        } 
        rondasJugadas++;
        marcador.textContent = `Humano: ${puntosHumano} | ${puntosPC} :PC`;

        if(rondasJugadas === 5) {
                const mensajeGanador = document.createElement("p");
                if(puntosHumano > puntosPC) {
                    mensajeGanador.textContent = "GANASTE!!";
                } else if(puntosHumano == puntosPC) {
                    mensajeGanador.textContent = "EMPATE!!";
                } else {
                    mensajeGanador.textContent = "PERDISTE!! Vuelve a intentarlo";
                }

                ganador.appendChild(mensajeGanador);
            }
    }
    });





