const inputText = document.querySelector('boxText');
const msg = document.querySelector('out')

// let stringEncriptada;

const btnEncriptar = () =>{
  const textEncriptado = encriptar(inputText.value);
  mensagem.value = textEncriptado;
}


const encriptar = (stringEncriptada) => {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (i=0; i<matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

  return stringEncriptada;
}


const btnDesencriptada= () =>{
  const textEncriptado = encriptar(inputText.value);
  mensagem.value = textEncriptado;
}

const desencriptar = (stringDesencriptada) => {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (i=0; i<matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }

  return stringDesencriptada;
}