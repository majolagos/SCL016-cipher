
let textoCifradoFinal = "";



const cipher = { //creo mi objeto cipher


  encode: (numero, texto)=> { 

      
    for(let i=0; i<texto.length; i++){ //metodo encode
    
      console.log(texto[i]);

      let valorLetra = texto.charCodeAt(i);
      console.log(valorLetra);

      if(valorLetra >= 65 && valorLetra <=90){
      
        textoCifradoFinal = textoCifradoFinal + String.fromCharCode((valorLetra - 65 + parseInt(numero)) %26 + 65); 

      }else if(valorLetra >= 97 && valorLetra <= 122){
      
        textoCifradoFinal = textoCifradoFinal + String.fromCharCode((valorLetra - 97 + parseInt(numero))%26+97);
      
      }else{
      
        textoCifradoFinal = textoCifradoFinal + texto[i];
      }
      
      }return textoCifradoFinal;
  



  },
 
  decode: (numero, texto) => { 

    for(let i=0; i<texto.length; i++){ //metodo decode
    
      console.log(texto[i]);

      let valorLetra = texto.charCodeAt(i);
      console.log(valorLetra);

      if(valorLetra >= 65 && valorLetra <=90){
      
        textoCifradoFinal = textoCifradoFinal + String.fromCharCode((valorLetra - 65 - parseInt(numero)) %26 + 65); 

      }else if(valorLetra >= 97 && valorLetra <= 122){
      
        textoCifradoFinal = textoCifradoFinal + String.fromCharCode((valorLetra - 97 - parseInt(numero))%26+97);
      
      }else{
      
        textoCifradoFinal = textoCifradoFinal + texto[i];
      }
      
      }return textoCifradoFinal;
  
  
  }
}




export default cipher;

