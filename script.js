// FORMULARIO DE SUMA
document.getElementById("formSuma").addEventListener("submit", function(event) {
    event.preventDefault();

    let numero1 = Number(document.getElementById("suma1").value);
    let numero2 = Number(document.getElementById("suma2").value);

    document.getElementById("resultadoSuma").textContent = numero1 + numero2;
});

// FORMULARIO DE RESTA
document.getElementById("formResta").addEventListener("submit", function(event) {
    event.preventDefault();

    let numero1 = Number(document.getElementById("resta1").value);
    let numero2 = Number(document.getElementById("resta2").value);

    document.getElementById("resultadoResta").textContent = numero1 - numero2;
});

// FORMULARIO DE MULTIPLICACIÓN
document.getElementById("formMultiplicacion").addEventListener("submit", function(event) {
    event.preventDefault();

    let numero1 = Number(document.getElementById("multiplicacion1").value);
    let numero2 = Number(document.getElementById("multiplicacion2").value);

    document.getElementById("resultadoMultiplicacion").textContent = numero1 * numero2;
});

// FORMULARIO DE DIVISIÓN
document.getElementById("formDivision").addEventListener("submit", function(event) {
    event.preventDefault();

    let numero1 = Number(document.getElementById("division1").value);
    let numero2 = Number(document.getElementById("division2").value);

    if (numero2 === 0) {
        document.getElementById("resultadoDivision").textContent = "No se puede dividir entre 0";
        return;
    }

    document.getElementById("resultadoDivision").textContent = numero1 / numero2;
});
