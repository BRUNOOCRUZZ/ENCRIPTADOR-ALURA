let message = document.getElementById('boxText');
let output = document.getElementById('out');
let img = document.getElementById('image');
let title = document.getElementById('title');
let container = document.getElementById('flexContent');
let copy = document.getElementById('btnCopy');
let copyContainer = document.getElementById('copyContent');
let noTxt = document.getElementById('noText');
let encript = {
  criptograf: ["enter", "imes", "ai", "ober", "ufat"],
  letr: ["e", "i", "a", "o", "u"],
};

console.log(img.value, output.value);

function btnCrip() {
  let text = normalize(getTxt(message));
  exe(text, encriptar(text));
}
function exe(text, textTransform) {
  if (text.trim() != "") {
    exValue(output, textTransform);
    message.value = "";

    addClass(img, "hidden");
    addClass(title, "hidden");
    addClass(output, "outText");
    addClass(container, "changeflex");
    removeClass(output, "hidden");
    removeClass(copy, "hidden");
    addClass(copyContainer, "btn-copy");
    addClass(noTxt, "hidden");
  } else {
    removeClass(copyContainer, "btn-copy");
    removeClass(output, "outText");
    removeClass(title, "hidden");
    removeClass(img, "hidden");
    removeClass(container, "changeflex");
    removeClass(noTxt, "hidden");

    addClass(output, "hidden");
    addClass(copy, "hidden");
  }
}

function btnDescrip() {
  let text = normalize(getTxt(message));
  exe(text, desencriptar(text));
}

function copyToClipBoard() {
  let c = output.innerHTML;
  navigator.clipboard.writeText(c);
  exValue(output, "");
  // play()
}

// function play(){
//   let audio = new Audio('src/sound/copy.mp3');
//   audio.play();
// }

function exValue(out, msg) {
  out.innerText = msg;
}
function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function getTxt(obj) {
  return obj.value;
}

function normalize(msg) {
  let m = msg.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return m.toLowerCase();
}

function encriptar(msg) {
  let text = "";
  for (i = 0; i < msg.length; i++) {
    if (encript.letr.includes(msg[i])) {
      text += msg[i].replace(
        msg[i],
        encript.criptograf[encript.letr.indexOf(msg[i])]
      );
    } else {
      text += msg[i];
    }
  }
  return text;
}

function desencriptar(msg) {
  let text = msg;

  for (i = 0; i < encript.criptograf.length; i++) {
    text = text.split(encript.criptograf[i]).join(encript.letr[i]);
  }
  return text;
}
