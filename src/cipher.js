
const cipher = { //creo mi objeto cipher


  encode: (numero, texto)=> { 

    let textoCifradoFinal = "";

    for(let i=0; i<texto.length; i++){ //metodo encode
    
  
      let valorLetra = texto.charCodeAt(i);

      if(valorLetra >= 65 && valorLetra <=90){ //mayúsculas
      
        textoCifradoFinal = textoCifradoFinal + String.fromCharCode((valorLetra - 65 + parseInt(numero)) %26 + 65); 

      }else if(valorLetra >= 97 && valorLetra <= 122){//minúsculas
      
        textoCifradoFinal = textoCifradoFinal + String.fromCharCode((valorLetra - 97 + parseInt(numero))%26+97);
      
      }else{ //otros
      
        textoCifradoFinal = textoCifradoFinal + texto[i];
      }
      
    }return textoCifradoFinal;

  },
 

  decode: (numero, texto) => { 

    let textoDecifradoFinal = "";

    for(let i=0; i<texto.length; i++){ //metodo decode
    
  

      let valorLetra = texto.charCodeAt(i);
     
      if(valorLetra >= 65 && valorLetra <=90){
      
        textoDecifradoFinal = textoDecifradoFinal + String.fromCharCode((valorLetra - 90 - parseInt(numero)) %26 + 90); 

      }else if(valorLetra >= 97 && valorLetra <= 122){
      
        textoDecifradoFinal = textoDecifradoFinal + String.fromCharCode((valorLetra - 122 - parseInt(numero)) %26 + 122);
      
      }else{
      
        textoDecifradoFinal = textoDecifradoFinal + texto[i];
      }
      
      }return textoDecifradoFinal;
  
}


  
}

export default cipher;

