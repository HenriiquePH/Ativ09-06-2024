function comparar() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }
    var resultado;
    if (num1 > num2) {
        resultado = "O primeiro número é maior.";
    } else if (num1 < num2) {
        resultado = "O primeiro número é menor.";
    } else {
        resultado = "Os números são iguais.";
    }
    document.getElementById('resultado').innerHTML = resultado;
}