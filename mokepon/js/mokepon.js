const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById("boton-mascotas")
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const inputNeon = document.getElementById('Neon')
const inputKilljoy = document.getElementById('Killjoy')
const inputRaze = document.getElementById('Raze')
const inputReyna = document.getElementById('Reyna')
const inputSage = document.getElementById('Sage')
const inputViper = document.getElementById('Viper')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const imagenMascotaJugador = document.getElementById('imagen-mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const imagenMascotaEnemigo = document.getElementById('imagen-mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

let ataqueJugador
let ataqueAleatorioEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display = 'none'
    deshabilitarAtaques()
}

function seleccionarMascotaJugador() {
    if (inputNeon.checked) {
        spanMascotaJugador.innerHTML = 'Neon'
        imagenMascotaJugador.src = './assets/Neon.webp'
    } else if (inputKilljoy.checked) {
        spanMascotaJugador.innerHTML = 'Killjoy'
        imagenMascotaJugador.src = './assets/Killjoy.png'
    } else if (inputRaze.checked) {
        spanMascotaJugador.innerHTML = 'Raze'
        imagenMascotaJugador.src = './assets/Raze.webp'
    } else if (inputReyna.checked) {
        spanMascotaJugador.innerHTML = 'Reyna'
        imagenMascotaJugador.src = './assets/Reyna.webp'
    } else if (inputSage.checked) {
        spanMascotaJugador.innerHTML = 'Sage'
        imagenMascotaJugador.src = './assets/Sage.webp'
    } else if (inputViper.checked) {
        spanMascotaJugador.innerHTML = 'Viper'
        imagenMascotaJugador.src = './assets/Viper.png'
    } else {
        alert("No seleccionaste ninguna mascota")
        return
    }
    seleccionarMascotaEnemigo()
    sectionSeleccionarAtaque.style.display = 'flex'
    habilitarAtaques()
    sectionSeleccionarMascota.style.display = 'none'
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = numeroAleatorio(1, 6)
    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Neon'
        imagenMascotaEnemigo.src = './assets/Neon.webp'
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Killjoy'
        imagenMascotaEnemigo.src = './assets/Killjoy.png'
    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Raze'
        imagenMascotaEnemigo.src = './assets/Raze.webp'
    } else if (ataqueAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Reyna'
        imagenMascotaEnemigo.src = './assets/Reyna.webp'
    } else if (ataqueAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Sage'
        imagenMascotaEnemigo.src = './assets/Sage.webp'
    } else {
        spanMascotaEnemigo.innerHTML = 'Viper'
        imagenMascotaEnemigo.src = './assets/Viper.png'
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueEnemigo()
}

function ataqueEnemigo() {
    let ataqueAleatorio = numeroAleatorio(1, 3)
    if (ataqueAleatorio == 1) {
        ataqueAleatorioEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueAleatorioEnemigo = 'Agua'
    } else {
        ataqueAleatorioEnemigo = 'Tierra'
    }
    combate()  
}

function combate() {
    if (ataqueJugador == ataqueAleatorioEnemigo) {
        crearMensaje("¡EMPATE! 🤼")
    } else if ((ataqueJugador == 'Agua' && ataqueAleatorioEnemigo == 'Fuego') || (ataqueJugador == 'Tierra' && ataqueAleatorioEnemigo == 'Agua') || (ataqueJugador == 'Fuego' && ataqueAleatorioEnemigo == 'Tierra')) {
        crearMensaje("¡GANASTE! 🥳")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE... 😢")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0 || vidasJugador == 0) {
        deshabilitarAtaques()
        botonReiniciar.style.display = 'flex'
        if (vidasEnemigo == 0) {
            crearMensajeFinal("Ganaste el combate")
        } else {
            crearMensajeFinal("Perdiste el combate")
        }
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement("p");
    let nuevoAtaqueDelEnemigo = document.createElement("p");
    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueAleatorioEnemigo;
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal;
}

function habilitarAtaques() {
    document.getElementById('boton-fuego').disabled = false
    document.getElementById('boton-agua').disabled = false
    document.getElementById('boton-tierra').disabled = false
}

function deshabilitarAtaques() {
    document.getElementById('boton-fuego').disabled = true
    document.getElementById('boton-agua').disabled = true
    document.getElementById('boton-tierra').disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)