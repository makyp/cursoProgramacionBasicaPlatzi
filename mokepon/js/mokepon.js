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
    if(inputHipodoge.checked){
        alert("Seleccionaste a Hipodoge")
    }else if (inputCapipepo.checked) {
        alert("Seleccionaste a Capipepo")
    }else if (inputRatigueya.checked) {
        alert("Seleccionaste a Ratigueya")
    }else if (intputLandostelvis.checked) {
        alert("Seleccionaste a Landostelvis")
    }else if (inputTucapalma.checked) {
        alert("Seleccionaste a Tucapalma")
    }else if (inputPydos.checked) {
        alert("Seleccionaste a Pydos")
    } else {
        alert("No seleccionaste ninguna mascota")
    }
}

window.addEventListener('load', iniciarjuego)