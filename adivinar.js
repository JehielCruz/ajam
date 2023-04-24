// Creacion de un numero random usando la funcion random
let numAleatorio = Math.floor(Math.random()*100) + 1;

// Definimos las constantes que le ensenaran al usuario como va
const AdivinandoNumero = document.querySelector('.AdivinandoNumero');
const UltimoResultado = document.querySelector('.UltimoResultado');
const Bajo_o_alto = document.querySelector('.Bajo_o_alto');

// variables que envian los datos
const AdivinaCampo = document.querySelector('.AdivinaCampo');
const AdivinarEnviar = document.querySelector('.AdivinarEnviar');

//Contador
let contador = 1;
let resetBoton;

//Funciones
function chequeoAdivinar(){
    let usuarioIntento = Number(AdivinaCampo.value);
    if (contador ===1) {
        AdivinandoNumero.textContent = 'Intentos anteriores ';
    }
    AdivinandoNumero.textContent += usuarioIntento + ' ';

    if(usuarioIntento === numAleatorio){
        UltimoResultado.textContent = 'Lo adivinaste!!!';
        UltimoResultado.style.backgroundColor ='green';
        Bajo_o_alto.textContent = '';
        setGameOver();
    } else if(contador === 10){
        UltimoResultado.textContent = 'Se acabaron las oportunidades';
        setGameOver();
    }
    else{
        UltimoResultado.textContent = 'Incorrecto';
        UltimoResultado.style.backgroundColor = 'red';
        if(usuarioIntento < numAleatorio){
            Bajo_o_alto.textContent = 'El numero es muy bajo';
        }   else if(usuarioIntento > numAleatorio){
            Bajo_o_alto.textContent = 'El numero es muy grande';
        }
    }
    contador++;
    AdivinaCampo.value = '';
    AdivinaCampo.focus();
}

AdivinarEnviar.addEventListener('click', chequeoAdivinar);

function setGameOver() {
    AdivinaCampo.disabled = true;
    AdivinarEnviar.disabled = true;
    resetBoton = document.createElement('button');
    resetBoton.textContent = 'Iniciar nuevo juego';
    document.body.append(resetBoton);
    resetBoton.addEventListener('click', resetGame);
}

function resetGame() {
    contador = 1;
  
    const form = document.querySelectorAll('.form p');
    for (let i = 0 ; i < form.length ; i++) {
      form[i].textContent = '';
    }
  
    resetBoton.parentNode.removeChild(resetBoton);
  
    AdivinaCampo.disabled = false;
    AdivinarEnviar.disabled = false;
    AdivinaCampo.value = '';
    AdivinaCampo.focus();
  
    UltimoResultado.style.backgroundColor = 'white';
  
    numAleatorio = Math.floor(Math.random() * 100) + 1;
  }

AdivinandoNumero.style.backgroundColor = 'yellow';
AdivinandoNumero.style.fontSize = '200%';
AdivinandoNumero.style.padding = '10px';
AdivinandoNumero.style.boxShadow = '3px 3px 6px black';