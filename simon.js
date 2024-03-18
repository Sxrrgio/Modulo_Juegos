const colores = ["rojo", "azul", "verde", "amarillo"];
let simon = [];
let jugador = [];
let puntuacion = 0;

function comenzar(){
    simon=[];
    jugador=[];
    puntuacion = 0;
    actualizarPuntuacion();
    colorSecuencia();
    mostrarSecuencia();
}

function colorSecuencia(){
    const colorAleatorio = colores[Math.floor(Math.random()*4)];
    simon.push(colorAleatorio);
}

function mostrarSecuencia(){
    let i=0;
    const intervalo=setInterval(() => {
       resaltarColor(simon[i]);
       i++;
       
       if(i>=simon.length){
        clearInterval(intervalo);
        empezarEntrada();
       }
    }, 500);
}

function resaltarColor(color){
    const colorBoton= document.getElementById(color)
    colorBoton.style.opacity="0.4";

    setTimeout(()=>{
        colorBoton.style.opacity="1";
    },250);
}

function empezarEntrada(){
    const botonesColores=document.querySelectorAll(".color");
    botonesColores.forEach(botonesColor => botonesColor.addEventListener("click", manejarEntrada));
}

function manejarEntrada(event){
    const colorSeleccionado = event.target.id;
    resaltarColor(colorSeleccionado);
    jugador.push(colorSeleccionado);

    if(verificarEntrada()){
        if(jugador.length === simon.length){
            puntuacion++;
            actualizarPuntuacion();
            jugador=[];
            colorSecuencia();
            setTimeout(mostrarSecuencia, 500);
        }
    }
    else{
        terminarJuego();
    }
    
}

function verificarEntrada(){
    for(let i = 0; i<jugador.length; i++){
        if(jugador[i] !== simon[i]){
            return false;
        }
    }
    return true;
}

function terminarJuego(){
    const idiomaSeleccionado = document.getElementById('selectorIdioma').value;
    alert(traducciones[idiomaSeleccionado].puntuacionFinal + ' ' + puntuacion);
    reiniciarJuego();
}
function actualizarPuntuacion(){
    document.getElementById("valorPuntuacion").textContent = puntuacion;
}

function reiniciarJuego(){
    simon = [];
    jugador=[];
    puntuacion=0;
    actualizarPuntuacion();
    finEntrada();
}

function finEntrada(){
    const botonesColores=document.querySelectorAll(".color");
    botonesColores.forEach(botonesColor=>botonesColor.removeEventListener("click", manejarEntrada));
}




var traducciones={
    "es":{
        "puntuacion":"Puntuación:",
        "empezar":"Empezar",
        "puntuacionFinal":"Tu puntuacion final es de:"
       
    },
    "en":{
        "puntuacion":"Scoring:",
        "empezar":"Start",
        "puntuacionFinal":"Your final scoring is:",
    },
    "de":{
        "puntuacion":"Interpunktion:",
        "empezar":"beginnen",
        "puntuacionFinal":"Ihr Endergebnis ist:",
    },
    "fr":{
        "puntuacion":"Ponctuation:",
        "empezar":"Commencer",
        "puntuacionFinal":"Votre score final est :"
    }
}
    document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('selectorIdioma').addEventListener('change', function(){
        var idiomaSeleccionado=this.value;

        document.getElementById('puntuacion').innerHTML = traducciones[idiomaSeleccionado].puntuacion + ': <span id="valorPuntuacion">0</span>';
        document.getElementById('empezar').innerHTML = traducciones[idiomaSeleccionado].empezar;
        
    })
})