let btnComprobar = document.getElementById("btnComprobar");
let divRes = document.getElementById("divRes");

btnComprobar.addEventListener("click", comprobarRespuestas);

function comprobarRespuestas(){
    divRes.innerHTML = "<p>Estas son tus respuestas</p>"
    let ResList = document.getElementsByName("list");
    if (ResList[0].checked) {
        divRes.innerHTML += "<p>Gracias</p>"   
    }
    else if(ResList[1].checked) {
        divRes.innerHTML += "<p>Estas seguro?</p>"
    }
    else {
        divRes.innerHTML += "<p>Venga animate</p>"
    }
    let resSen = document.getElementsByName("sen");
    if (resSen[0].checked && !resSen[1].checked && !resSen[2].checked) {
        divRes.innerHTML += "<p>Respuesta correcta</p>"
    }
    else {
        divRes.innerHTML += "<p>Respuesta incorrecta</p>"
    }
}