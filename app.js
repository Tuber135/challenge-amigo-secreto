// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSorteo = [];

function agregarListado() {
    let listado = document.getElementById("listaAmigos");
    listado.innerHTML = "";
    for (let i = 0; i < amigosSorteo.length; i++) {
        let li = document.createElement("li");
        li.innerText = amigosSorteo[i];
        listado.appendChild(li);
    }
}

function agregarAmigo() {
    let nombre = String(document.getElementById("amigo").value);
    if (nombre !== "") {
        amigosSorteo.push(nombre);
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, inserte un nombre.");
    }
    console.log(amigosSorteo);
    agregarListado();
}

function sortearAmigo() {
    if (amigosSorteo.length != 0) {
        let numeroRandom = Math.floor(Math.random() * amigosSorteo.length);
        let amigoSeleccionado = amigosSorteo[numeroRandom];
        let mostrarResultado = document.getElementById("resultado");
        mostrarResultado.innerText = "El amigo seleccionado es: " + amigoSeleccionado;
    }
}