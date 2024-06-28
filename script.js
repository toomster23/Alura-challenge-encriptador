// Botones
let btnEncriptar = document.querySelector("#btn-encriptar");
let btnCopiar = document.querySelector("#btn-copy");
let btnDesencriptar = document.querySelector("#btn-desencriptar");
let mensajeResultado = document.querySelector("#msg");

btnEncriptar.addEventListener("click",function ()  {
    let text = document.querySelector("#input-texto").value;
    let isValidText = validarTexto(text);
    if(!isValidText){
        alert("Introduce un texto valido!");
        return;
    }
    let encryptedText = encrypt(text);
    mensajeResultado.value = encryptedText;
})


btnCopiar.addEventListener("click",function(){    
    // Copiar texto en seccion de mensaje
    navigator.clipboard.writeText(mensajeResultado.value);
});


btnDesencriptar.addEventListener("click", function(){
    // Obtener texto introducido por el usuario
    let text= document.querySelector("#input-texto").value;
    
    // Desencriptar el texto
    let decryptedText = decrypt(text);

    // Mostrarselo al usuario como resultado
    mensajeResultado.value = decryptedText;
})


// Funcion para validar el texto introducido
function validarTexto(texto) {
    if(texto === "") return false; // Texto vacio

    // Expresión regular para validar solo letras minúsculas y sin caracteres especiales
    var regex = /^[a-z]+$/;

    // Verificar si el texto cumple con la expresión regular
    if (regex.test(texto)) {
        return true; // El texto es válido
    } else {
        return false; // El texto contiene caracteres no permitidos
    }
}

// Funcion de encriptado
function encrypt(texto) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        // Desplazar el código ASCII en 1 (ejemplo de cifrado simple)
        let encryptedCharCode = charCode + 1;
        resultado += String.fromCharCode(encryptedCharCode);
    }
    return resultado;
}


// Funcion de desencriptado
function decrypt(textoCifrado) {
    let resultado = '';
    for (let i = 0; i < textoCifrado.length; i++) {
        let encryptedCharCode = textoCifrado.charCodeAt(i);
        // Deshacer el desplazamiento para obtener el texto original
        let charCode = encryptedCharCode - 1;
        resultado += String.fromCharCode(charCode);
    }
    return resultado;
}











