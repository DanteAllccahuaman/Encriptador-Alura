const texto = document.querySelector(".textarea");
const encriptar = document.querySelector(".encriptar");
const descencriptar = document.querySelector(".desencriptar");
const mensaje = document.getElementById("mensaje");
const mensaje2 = document.getElementById("mensaje2");
const mostrarMensaje = document.getElementById("mostrarMensaje");
const imagen = document.getElementById("imagen");
const textoMostrar = document.getElementById("texto");
const buttonCopiar = document.querySelector(".buttonCopiar");

encriptar.addEventListener("click",encriptarButton);
descencriptar.addEventListener("click", desencriptarButton);
encriptar.addEventListener("click", ocultarMensaje);
descencriptar.addEventListener("click", ocultarMensaje2);
buttonCopiar.addEventListener("click", copiarTexto);

function ocultarMensaje(){ 
    mensaje.classList.add("ocultar");
    mensaje2.classList.add("ocultar");
    imagen.classList.add("ocultar");
    mostrarMensaje.classList.add("mostrar");
    textoMostrar.value = encriptarButton();
}

function ocultarMensaje2(){
    mensaje.classList.add("ocultar");
    mensaje2.classList.add("ocultar");
    imagen.classList.add("ocultar");
    mostrarMensaje.classList.add("mostrar");
    textoMostrar.value = desencriptarButton();
}


function encriptarButton(){
    let textofinal = texto.value;
    let textoArreglo = textofinal.split("");
    let nuevaPalabra =[];
    for(let palabra of textoArreglo){
        palabra = palabra.replaceAll('e','enter');
        palabra = palabra.replaceAll('i','imes');
        palabra = palabra.replaceAll('a','ai');
        palabra = palabra.replaceAll('o','ober');
        palabra = palabra.replaceAll('u','ufat');
        nuevaPalabra.push(palabra);
    }
    const resultado = nuevaPalabra.join('');
    return resultado;
    
}

function desencriptarButton(){
    let textofinalB = texto.value;
    let textoArregloB = textofinalB.split(" ");
    let nuevaPalabraB =[];
    for(let palabraB of textoArregloB){
        palabraB = palabraB.replaceAll('enter','e');
        palabraB = palabraB.replaceAll('imes','i');
        palabraB = palabraB.replaceAll('ai','a');
        palabraB = palabraB.replaceAll('ober','o');
        palabraB = palabraB.replaceAll('ufat','u');
        nuevaPalabraB.push(palabraB);
    }
    const resultadoB = nuevaPalabraB.join(' ');
    return resultadoB;
}

async function copiarTexto() {
    let copiarTexto = textoMostrar.value;
    await navigator.clipboard.writeText(copiarTexto);
    alert("Mensaje copiado")
}