/* Validacion del nombre 50 caracteres */
document.getElementById('nombreapellido').addEventListener('keyup', function(){

    
    let texto = document.getElementById('nombreapellido');
    let caracteresTexto = texto.value;
    let maximoCaracteres = 50;
    let contador = maximoCaracteres - caracteresTexto.length;
    console.log(contador)
    if (contador => 0 && texto.focus){
        let valor = document.getElementById('contadorNombre');
        let valorError= document.getElementById('msg-error');
        valor.innerHTML = 'le restan ' +contador+ ' caracteres de 50';
    }else{
        valor.style.visibility = 'hidden';
    }
    
    if (contador < 0){
        valor.style.visibility='hidden';
        valorError.style.visibility = 'visible';
        valorError.innerHTML = 'Ha exedido la cantidad maximma de caracteres ' +contador;
        return;
    }
    
});

/* Validacion de texto de 350 caracteres */
document.getElementById('mensajeTexto').addEventListener('keyup', function(){

    
        let texto = document.getElementById('mensajeTexto');
        let caracteresTexto = texto.value;
        let maximoCaracteres = 300;
        let contador = maximoCaracteres - caracteresTexto.length;
        
    
        if (contador => 0 && valor !=""){
            let valor = document.getElementById('numeroLetras');
            valor.innerHTML = 'Le restan ' +contador+ ' carácteres de '+maximoCaracteres;
        }else{
            valor.innerHTML.style.visibility = 'hidden'
        }

        
    

});




   
      
    






