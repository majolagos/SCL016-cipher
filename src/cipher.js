
let textoCifradoFinal = "";



const cipher = { //creo mi objeto cipher



  encode: (numero, texto)=> { 

    
  // try {
    
    // if(texto != "" || texto != null){

    
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
    // }

  // } catch (e) {
  //   console.log(e instanceof TypeError)  // true
  //   console.log(e.message)               // "Hello"
  //   console.log(e.name)                  // "TypeError"
  //   console.log(e.fileName)              // "someFile.js"
  //   console.log(e.lineNumber)            // 10
  //   console.log(e.columnNumber)          // 0
  //   console.log(e.stack)                 // "@Scratchpad/2:2:9\n"
  // }

  },
 

 

  decode: (numero, texto) => { 


    // try{

    // if(texto != "" || texto != null){

    for(let i=0; i<texto.length; i++){ //metodo decode
    
  

      let valorLetra = texto.charCodeAt(i);
     
      if(valorLetra >= 65 && valorLetra <=90){
      
        textoCifradoFinal = textoCifradoFinal + String.fromCharCode((valorLetra - 90 - parseInt(numero)) %26 + 90); 

      }else if(valorLetra >= 97 && valorLetra <= 122){
      
        textoCifradoFinal = textoCifradoFinal + String.fromCharCode((valorLetra - 122 - parseInt(numero)) %26 + 122);
      
      }else{
      
        textoCifradoFinal = textoCifradoFinal + texto[i];
      }
      
      }return textoCifradoFinal;
  
  
  // }
// } catch (e) {
//   console.log(e instanceof TypeError)  // true
//   console.log(e.message)               // "Hello"
//   console.log(e.name)                  // "TypeError"
//   console.log(e.fileName)              // "someFile.js"
//   console.log(e.lineNumber)            // 10
//   console.log(e.columnNumber)          // 0
//   console.log(e.stack)                 // "@Scratchpad/2:2:9\n"
// }


}


  
}

export default cipher;

