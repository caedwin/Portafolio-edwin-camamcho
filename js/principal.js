
/* <!**** FUNCION CALCULAR EDAD ****> */
    function calculateAge(birthday) {
        var birthday_arr = birthday.split("/");
        var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
        var ageDifMs = Date.now() - birthday_date.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    var age = calculateAge("18/05/1977");
    document.getElementById('edad').innerHTML = age;

/* <!**** INICIAR REPRODUCCION DE VIDEO **** > */

/* <!**** demo juego encriptador **** > */
    function iniciar_encriptador(){
        let boton = document.getElementById('encriptador__demo');
        boton.addEventListener("click", demo_encriptador, false);
    }
    function demo_encriptador(){
        let video = document.getElementById('encriptador__video');
        video.play();
        botonSonido_encriptador.style.visibility = 'visible';
    }
    window.addEventListener('load', iniciar_encriptador, false); 

/* <!**** demo juego del ahorcado **** > */

    function iniciar_ahorcado(){
        let boton = document.getElementById('juego-Ahorcado__demo');
        boton.addEventListener("click", demo_ahorcado, false);
    }
    function demo_ahorcado(){
        let video = document.getElementById('ahorcado__video');
        video.play();
        botonSonido_juegoAhorcado.style.visibility = 'visible';
    }
    window.addEventListener('load', iniciar_ahorcado, false); 

/* <!**** demo barberia alura ****> */

    function iniciar_barberiaAlura(){
        let boton = document.getElementById('barberiaAlura__demo');
        boton.addEventListener("click", demo_barberiaAlura, false);
    }
    function demo_barberiaAlura(){
        let video = document.getElementById('barberiaAlura__video');
        video.play();
        botonSonido_barberiaAlura.style.visibility = 'visible';
    }
    window.addEventListener('load', iniciar_barberiaAlura, false); 

/* <!**** demo buona vita nutrión - Control de Citas **** >  */

    function iniciar_buonaVita(){
        let boton = document.getElementById('buona-vita__demo');
        boton.addEventListener("click", demo_buonaVita, false);
    }
    function demo_buonaVita(){
        let video = document.getElementById('buona-vita__video');
        video.play();
        botonSonido_buonaVita.style.visibility = 'visible';
    }
    window.addEventListener('load', iniciar_buonaVita, false); 

/* <!**** demo fruta-fruto ****> */

    function iniciar_frutaFruto(){
        let boton = document.getElementById('fruta-fruto__demo');
        boton.addEventListener("click", demo_frutaFruto, false);
    }
    function demo_frutaFruto(){
        let video = document.getElementById('fruta-fruto__video');
        video.play();
        botonSonido_frutaFruto.style.visibility = 'visible';
    }
    window.addEventListener('load', iniciar_frutaFruto, false); 

/* <!**** demo alura store **** > */

    function iniciar_aluraStore(){
        let boton = document.getElementById('alura-store__demo');
        boton.addEventListener("click", demo_aluraStore, false);
    }
    function demo_aluraStore(){
        let video = document.getElementById('alura-store__video');
        video.play();
        botonSonido_aluraStore.style.visibility = 'visible';
    }
    window.addEventListener('load', iniciar_aluraStore, false); 

/* <!**** demo mi alura **** > */

    function iniciar_miAlura(){
        let boton = document.getElementById('miAlura__demo');
        boton.addEventListener("click", demo_miAlura, false);
    }
    function demo_miAlura(){
        let video = document.getElementById('miAlura__video');
        video.play();
        botonSonido_miAlura.style.visibility = 'visible';
    }
    window.addEventListener('load', iniciar_miAlura, false); 

/* <!**** demo apeperia ****>  */

    function iniciar_apepeira(){
        let boton = document.getElementById('apepeira__demo');
        boton.addEventListener("click", demo_apepeira, false); 
    }
    
    function demo_apepeira(){
        let video = document.getElementById('apepeira__video');
        video.play();
        space = true;
        
        botonSonido_apereira.style.visibility = 'visible';
    }
    window.addEventListener('load', iniciar_apepeira, false);

/* <!**** PAUSAR SONIDO DEL VIDEO ***** > */

/* <!**** pausar demo juego encriptador**** >  */
let botonSonido_encriptador = document.getElementById('encriptador__apagar-audio');
function apagar_encriptador(){
    let boton = document.getElementById('encriptador__apagar-audio');
    boton.addEventListener("click", demo_encriptador_apagar, false);
    botonSonido_encriptador.style.visibility = 'hidden';   
}
function demo_encriptador_apagar(){
    let video = document.getElementById('encriptador__video');
    video.pause();  
}
window.addEventListener('load', apagar_encriptador, false);

/* <!**** pausar demo juego del ahorcado**** >  */
let botonSonido_juegoAhorcado = document.getElementById('juego-Ahorcado__apagar-audio');
function apagar_ahorcado(){
    let boton = document.getElementById('juego-Ahorcado__apagar-audio');
    boton.addEventListener("click", demo_ahorcado_apagar, false);
    botonSonido_juegoAhorcado.style.visibility = 'hidden';
    botonSonido_encriptador.style.visibility = 'none';
}
function demo_ahorcado_apagar(){
    let video = document.getElementById('ahorcado__video');
    video.pause();
}
window.addEventListener('load', apagar_ahorcado, false); 

/* <!**** pausar demo barberia alura ****> */

let botonSonido_barberiaAlura = document.getElementById('barberiaAlura__apagar-audio');
function apagar_barberiaAlura(){
    let boton = document.getElementById('barberiaAlura__apagar-audio');
    boton.addEventListener("click", demo_barberiaAlura_apagar, false);
    botonSonido_barberiaAlura.style.visibility = 'hidden';
}
function demo_barberiaAlura_apagar(){
    let video = document.getElementById('barberiaAlura__video');
    video.pause();
}
window.addEventListener('load', apagar_barberiaAlura, false); 

/* <!**** pausar demo buona vita nutrión - Control de Citas ****>  */

let botonSonido_buonaVita = document.getElementById('buona-vita__apagar-audio');
function apagar_buonaVita(){
    let boton = document.getElementById('buona-vita__apagar-audio');
    boton.addEventListener("click", demo_buonaVita_apagar, false);
    botonSonido_buonaVita.style.visibility = 'hidden';
}
function demo_buonaVita_apagar(){
    let video = document.getElementById('buona-vita__video');
    video.pause();
}
window.addEventListener('load', apagar_buonaVita, false);

/* <!**** pausar demo fruta-fruto ****> */

let botonSonido_frutaFruto = document.getElementById('frutaFruto__apagar-audio');
function apagar_frutaFruto(){
    let boton = document.getElementById('frutaFruto__apagar-audio');
    boton.addEventListener("click", demo_frutaFruto_apagar, false);
    botonSonido_frutaFruto.style.visibility = 'hidden';
}
function demo_frutaFruto_apagar(){
    let video = document.getElementById('fruta-fruto__video');
    video.pause();
}
window.addEventListener('load', apagar_frutaFruto, false);

/* <!**** pausar demo alura store ****> */

let botonSonido_aluraStore = document.getElementById('aluraStore__apagar-audio');
function apagar_aluraStore(){
    let boton = document.getElementById('aluraStore__apagar-audio');
    boton.addEventListener("click", demo_aluraStore_apagar, false);
    botonSonido_aluraStore.style.visibility = 'hidden';
}
function demo_aluraStore_apagar(){
    let video = document.getElementById('alura-store__video');
    video.pause();
}
window.addEventListener('load', apagar_aluraStore, false); 

/* <!**** pusar demo mi alura ****> */

let botonSonido_miAlura = document.getElementById('miAlura__apagar-audio');
function apagar_miAlura(){
    let boton = document.getElementById('miAlura__apagar-audio');
    boton.addEventListener("click", demo_miAlura_apagar, false);
    botonSonido_miAlura.style.visibility = 'hidden';
}
function demo_miAlura_apagar(){
    let video = document.getElementById('miAlura__video');
    video.pause();
}
window.addEventListener('load', apagar_miAlura, false); 

/* <!**** pausar demo apeperia ****> */

let botonSonido_apereira = document.getElementById('apepeira__apagar-audio');
function apagar_apepeira(){
    let boton = document.getElementById('apepeira__apagar-audio');
    boton.addEventListener("click", demo_apepeira_apagar, false);
    botonSonido_apereira.style.visibility = 'hidden';
}
function demo_apepeira_apagar(){
    let video = document.getElementById('apepeira__video');
    video.pause();
    space = false;  
}
window.addEventListener('load', apagar_apepeira, false);
