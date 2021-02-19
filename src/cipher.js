
const cipher = { //creo mi objeto cipher


  encode: (numero, texto)=> {  //metodo encode

    let textoCifradoFinal = "";

    for(let i=0; i<texto.length; i++){
    
  
      let valorLetra = texto.charCodeAt(i); //obtengo valor ascii

      if(valorLetra >= 65 && valorLetra <=90){ //mayúsculas
      
        textoCifradoFinal = textoCifradoFinal + String.fromCharCode((valorLetra - 65 + parseInt(numero)) %26 + 65); //obtengo letra cifrada

      }else if(valorLetra >= 97 && valorLetra <= 122){//minúsculas
      
        textoCifradoFinal = textoCifradoFinal + String.fromCharCode((valorLetra - 97 + parseInt(numero))%26+97);
      
      }else{ //otros
      
        textoCifradoFinal = textoCifradoFinal + texto[i];
      }
      
    }return textoCifradoFinal;

  },
 

  decode: (numero, texto) => { //metodo decode

    let textoDescifradoFinal = "";

    for(let i=0; i<texto.length; i++){ 
    
  

      let valorLetra = texto.charCodeAt(i);
     
      if(valorLetra >= 65 && valorLetra <=90){
      
        textoDescifradoFinal = textoDescifradoFinal + String.fromCharCode((valorLetra - 90 - parseInt(numero)) %26 + 90); 

      }else if(valorLetra >= 97 && valorLetra <= 122){
      
        textoDescifradoFinal = textoDescifradoFinal + String.fromCharCode((valorLetra - 122 - parseInt(numero)) %26 + 122);
      
      }else{
      
        textoDescifradoFinal = textoDescifradoFinal + texto[i];
      }
      
      }return textoDescifradoFinal;
  
}


  
}

export default cipher;

