let ataqueJugador // Es una variable global
let ataqueAleatorioEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarjuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let botonMascotaJugador = document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display = 'none'
    deshabilitarAtaques()
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

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = 'Langostelvis'
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma'
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos'
    } else {
        alert("No seleccionaste ninguna mascota")
        return
    }
    seleccionarMascotaEnemigo()
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    habilitarAtaques()
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = numeroAleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (ataqueAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if (ataqueAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else {
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if (ataqueJugador == ataqueAleatorioEnemigo) {
        resultado = "¡EMPATE! 🤼"
    } else if ((ataqueJugador == 'Agua' && ataqueAleatorioEnemigo == 'Fuego') || (ataqueJugador == 'Tierra' && ataqueAleatorioEnemigo == 'Agua') || (ataqueJugador == 'Fuego' && ataqueAleatorioEnemigo == 'Tierra')) {
        resultado = "¡GANASTE! 🥳"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        resultado = "PERDISTE... 😢"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    crearmensaje()
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0 || vidasJugador == 0) {
        deshabilitarAtaques()
        let botonReiniciar = document.getElementById('boton-reiniciar')
        botonReiniciar.style.display = 'block'
        if (vidasEnemigo == 0) {
            crearMensajeFinal("Ganaste el combate")
        } else {
            crearMensajeFinal("Perdiste el combate")
        }
    }
}

function crearmensaje() {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueAleatorioEnemigo + " - " + resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('h3')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
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

window.addEventListener('load', iniciarjuego)
