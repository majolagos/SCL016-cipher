import cipher from './cipher.js';

let texto = "";
let numero;
let btnCerrarModal = document.getElementById("btnCerrarModal");
let btnCifrar = document.getElementById("btnCifrar");
let btnDecifrar = document.getElementById("btnDecifrar");
let btnRegresar = document.getElementById("btnRegresar");




    btnCerrarModal.addEventListener("click", ()=>{ //si hago clic en el boton btnCerrarModal ejecuto la funcion para ocultar el modal con CSS

        document.getElementById("miModal").style.display = "none";

    });

    btnCifrar.addEventListener("click", () =>{ //si hago clic en el boton btnCifrar ejecuto funcion para cifrar texto
     
      texto = document.getElementById("txtTexto").value;
      numero = document.getElementById("slcCanal").value;
        // document.getElementById("H1TextoCifrado").textContent  = "";
       
        if (texto == null || texto == "" || numero == null || numero == ""){

          alert("Oye! te faltó ingresar datos :c");
          
        }else{


            texto = texto.toUpperCase();        
    
            let cifrado =  cipher.encode(numero,texto);    
                  
            document.getElementById("H1TextoCifrado").innerHTML = cifrado;
            document.getElementById("textoRespuesta").innerHTML = "Tu texto cifrado es: ";
            document.getElementById("preguntas").style.display = "none";
            document.getElementById("respuestas").style.display = "unset";

        }
    
    });


    btnDecifrar.addEventListener("click", () =>{ //si hago clic en el boton btnCifrar ejecuto funcion para cifrar texto
      
        texto = document.getElementById("txtTexto").value;
        numero = document.getElementById("slcCanal").value;

        if (texto == null || texto == "" || numero == null || numero == ""){

            alert("Oye! te faltó ingresar datos :c");
        }else{
    
            texto = texto.toUpperCase();  
                  
            let decifrado =  cipher.decode(numero,texto);    
            
            document.getElementById("textoRespuesta").innerHTML = "Tu texto decifrado es: ";
            document.getElementById("H1TextoCifrado").innerHTML = decifrado;     //resp   
            document.getElementById("preguntas").style.display = "none";
            document.getElementById("respuestas").style.display = "block";
        }
    
    });

    btnRegresar.addEventListener("click", () =>{ //VARIABLES A "" Y LIMPIAR HTML


        document.getElementById("preguntas").style.display = "block";
        document.getElementById("respuestas").style.display = "none";
        // document.getElementById("H1TextoCifrado").innerHTML = "";
        document.getElementById("H1TextoCifrado").textContent = "";
      
        document.getElementById("txtTexto").value = "";
        document.getElementById("slcCanal").value = "";
        document.getElementById("textoRespuesta").value = "";
        
        texto = "";
        numero = "";
        
        

    });



