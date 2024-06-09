function iniciarjuego(){
    let botonMascotaJugador= document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let intputLandostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML= 'Capipepo'
    }else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML= 'Ratigueya'
    }else if (intputLandostelvis.checked) {
        spanMascotaJugador.innerHTML='Landostelvis'
    }else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML= 'Tucapalma'
    }else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML='Pydos'
    } else {
        alert("No seleccionaste ninguna mascota")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio= numeroAleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if(ataqueAleatorio==1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if(ataqueAleatorio==2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else if(ataqueAleatorio==3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }else if(ataqueAleatorio==4){
        spanMascotaEnemigo.innerHTML='Landostelvis'
    }else if(ataqueAleatorio==5){
        spanMascotaEnemigo.innerHTML= 'Tucapalma'
    }else{
        spanMascotaEnemigo.innerHTML='Pydos'
    }

}
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarjuego)