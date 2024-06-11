let ataqueJugador // Es una variable global
let ataqueAleatorioEnemigo
let resultado

function iniciarjuego(){
    let botonMascotaJugador= document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueEnemigo()
}

function ataqueEnemigo(){
    let ataqueAleatorio = numeroAleatorio(1, 3)
    if (ataqueAleatorio == 1){
        ataqueAleatorioEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueAleatorioEnemigo = 'Agua'
    } else {
        ataqueAleatorioEnemigo = 'Tierra' 
    }
    combate()
    crearmensaje()
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLandostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else if (inputLandostelvis.checked) {
        spanMascotaJugador.innerHTML = 'Landostelvis'
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma'
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos'
    } else {
        alert("No seleccionaste ninguna mascota")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = numeroAleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (ataqueAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (ataqueAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'Landostelvis'
    } else if (ataqueAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else {
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// FUNCIÓN PARA DECIDIR EL GANADOR
function combate() {
    if (ataqueJugador == ataqueAleatorioEnemigo) {  
        resultado = "¡EMPATE! 🤼"
    } else if (ataqueJugador == 'Agua' && ataqueAleatorioEnemigo == 'Fuego') {
        resultado = "¡GANASTE! 🥳"
    } else if (ataqueJugador == 'Tierra' && ataqueAleatorioEnemigo == 'Agua') {
        resultado = "¡GANASTE! 🥳"
    } else if (ataqueJugador == 'Fuego' && ataqueAleatorioEnemigo == 'Tierra') {
        resultado = "¡GANASTE! 🥳"
    } else {
        resultado = "PERDISTE... 😢"
    }
}

function crearmensaje(){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota atacó con " +  ataqueJugador + ", la mascota del enemigo atacó con " + ataqueAleatorioEnemigo + " - " + resultado
    sectionMensajes.appendChild(parrafo)
}

window.addEventListener('load', iniciarjuego)
