let ataqueJugador // Es una variable global
let ataqueAleatorioEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

const mascotas = [
    { id: 'Neon', src: './assets/Neon.webp' },
    { id: 'Killjoy', src: './assets/Killjoy.png' },
    { id: 'Raze', src: './assets/Raze.webp' },
    { id: 'Reyna', src: './assets/Reyna.webp' },
    { id: 'Sage', src: './assets/Sage.webp' },
    { id: 'Viper', src: './assets/Viper.png' }
]

function iniciarJuego() {
    document.getElementById('seleccionar-ataque').style.display = 'none'
    document.getElementById('boton-reiniciar').style.display = 'none'
    document.getElementById("boton-mascotas").addEventListener("click", seleccionarMascotaJugador)
    document.getElementById('boton-fuego').addEventListener('click', () => ataque('Fuego'))
    document.getElementById('boton-agua').addEventListener('click', () => ataque('Agua'))
    document.getElementById('boton-tierra').addEventListener('click', () => ataque('Tierra'))
    document.getElementById('boton-reiniciar').addEventListener('click', reiniciarJuego)
    
    deshabilitarAtaques()
}

function seleccionarMascotaJugador() {
    const seleccionada = mascotas.find(m => document.getElementById(m.id).checked)
    
    if (!seleccionada) {
        alert("No seleccionaste ninguna mascota")
        return
    }
    actualizarMascota('mascota-jugador', seleccionada)
    seleccionarMascotaEnemigo()
     
    document.getElementById('seleccionar-ataque').style.display = 'flex'
    document.getElementById('seleccionar-mascota').style.display = 'none'
    habilitarAtaques()
}

function seleccionarMascotaEnemigo() {
    const aleatorio = numeroAleatorio(0, mascotas.length - 1)
    const seleccionada = mascotas[aleatorio]
    actualizarMascota('mascota-enemigo', seleccionada)
}

function actualizarMascota(tipo, mascota) {
    document.getElementById(tipo).innerHTML = mascota.id
    document.getElementById(`imagen-${tipo}`).src = mascota.src
    document.getElementById(`nombre-${tipo}`).innerHTML = mascota.id
}

function ataque(tipo) {
    ataqueJugador = tipo
    ataqueEnemigo()
}

function ataqueEnemigo() {
    const ataques = ['Fuego', 'Agua', 'Tierra']
    ataqueAleatorioEnemigo = ataques[numeroAleatorio(0, 2)]
    combate()
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function combate() {
    const spanVidasJugador = document.getElementById('vidas-jugador')
    const spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueJugador === ataqueAleatorioEnemigo) {
        crearMensaje("¡EMPATE! 🤼")
    } else if ((ataqueJugador === 'Agua' && ataqueAleatorioEnemigo === 'Fuego') || 
               (ataqueJugador === 'Tierra' && ataqueAleatorioEnemigo === 'Agua') || 
               (ataqueJugador === 'Fuego' && ataqueAleatorioEnemigo === 'Tierra')) {
        crearMensaje("¡GANASTE! 🥳")
        spanVidasEnemigo.innerHTML = --vidasEnemigo
    } else {
        crearMensaje("PERDISTE... 😢")
        spanVidasJugador.innerHTML = --vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo === 0 || vidasJugador === 0) {
        deshabilitarAtaques()
        document.getElementById('boton-reiniciar').style.display = 'flex'
        crearMensajeFinal(vidasEnemigo === 0 ? "Ganaste el combate" : "Perdiste el combate")
    }
}

function crearMensaje(resultado) {
    const sectionMensajes = document.getElementById("resultado")
    const ataquesDelJugador = document.getElementById("ataques-del-jugador")
    const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    sectionMensajes.innerHTML = resultado
    ataquesDelJugador.innerHTML += `<p>${ataqueJugador}</p>`
    ataquesDelEnemigo.innerHTML += `<p>${ataqueAleatorioEnemigo}</p>`
}

function crearMensajeFinal(resultadoFinal) {
    document.getElementById('resultado').innerHTML = resultadoFinal
}

function habilitarAtaques() {
    ['fuego', 'agua', 'tierra'].forEach(tipo => document.getElementById(`boton-${tipo}`).disabled = false)
}

function deshabilitarAtaques() {
    ['fuego', 'agua', 'tierra'].forEach(tipo => document.getElementById(`boton-${tipo}`).disabled = true)
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)
