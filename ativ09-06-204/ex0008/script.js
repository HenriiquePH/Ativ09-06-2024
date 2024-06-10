function verificar() {
    var numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }
    var resultado = numero % 2 === 0 ? "Par" : "Ímpar";
    document.getElementById('resultado').innerHTML = `O número é ${resultado}.`;
}