function calcular() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }
    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var multiplicacao = num1 * num2;
    var divisao = num1 / num2;
    var resultado = `
        Soma: ${soma}<br>
        Subtração: ${subtracao}<br>
        Multiplicação: ${multiplicacao}<br>
        Divisão: ${divisao}
    `;
    document.getElementById('resultado').innerHTML = resultado;
}