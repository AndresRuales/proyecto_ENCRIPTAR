/*PARA CAPTURAR LO DEL usuario del textarea*/
const word = document.querySelector(".inputTexto")
const mensajeEncriptado = document.querySelector(".mensajeEncriptado")
const etiqueta1= document.querySelector(".ningun")
const etiqueta2= document.querySelector(".ingresa")



function btnEncriptar(){
    const textoEncriptado = encriptar(word.value);
    mensajeEncriptado.value = textoEncriptado;
    word.value="";
    mensajeEncriptado.style.backgroundImage="none"
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(word.value);
    mensajeEncriptado.value = textoEncriptado;
    word.value="";
    mensajeEncriptado.style.backgroundImage="none"
}

function btnCopiar(){
    const textoCopiado = document.getElementById("mensajeEncriptado");
    const texto = textoCopiado.value;
    navigator.clipboard.writeText(texto);
    mensajeEncriptado.style.backgroundImage="none"


}

function eliminarEtiquetasP(){
  etiqueta1.remove();
  etiqueta2.remove();
}


/*Diccionario*/

const diccionario = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  };
 
/*Funcion para encriptar*/
function encriptar(word) {
    let palabraAencriptar = '';
    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLowerCase();
      palabraAencriptar += diccionario[letter] || letter;
    }
    return palabraAencriptar;
  }
  

/*Funcion para Desencriptar*/
function desencriptar(word) {
    let palabraDesencriptada = '';
    for (let i = 0; i < word.length;i++) {
      let minuscula=word[i].toLowerCase();
      if(minuscula == "a"){
        let palabra = "";
        for(let j =i; j< word.length; j++) {
          palabra +=  word[j].toLowerCase();
          if(palabra == "ai"){
            palabraDesencriptada+= "a";
            i=j;
            break;
          }
        }
      }
      else if (minuscula == "e"){
        let palabra = "";
        for(let j =i; j< word.length; j++) {
          palabra +=  word[j].toLowerCase();
          if(palabra == "enter"){
            palabraDesencriptada+= "e";
            i=j;
            break;
          }
        }
      }
      else if (minuscula == "i"){
        let palabra = "";
        for(let j =i; j< word.length; j++) {
          palabra +=  word[j].toLowerCase();
          if(palabra == "imes"){
            palabraDesencriptada+= "i";
            i=j;
            break;
          }
        }
        
      }
      else if (minuscula == "o"){
        let palabra = "";
        for(let j =i; j< word.length; j++) {
          palabra +=  word[j].toLowerCase();
          if(palabra == "ober"){
            palabraDesencriptada+= "o";
            i=j;
            break;
          }
        }
      }
      else if (minuscula == "u"){
        let palabra = "";
        for(let j =i; j< word.length; j++) {
          palabra +=  word[j].toLowerCase();
          if(palabra == "ufat"){
            palabraDesencriptada+= "u";
            i=j;
            break;
          }
        }
      }
      else{
        palabraDesencriptada+=minuscula
      }
    }
    return palabraDesencriptada;
  }

