function calcular() {
    var cotacao = parseFloat(document.getElementById('cotacao').value);
    if (isNaN(cotacao)) {
        alert("Por favor, insira um valor válido.");
        return;
    }
    var resultado = `
        Se a cotação subir 1%: ${(cotacao * 1.01).toFixed(2)}<br>
        Se a cotação subir 2%: ${(cotacao * 1.02).toFixed(2)}<br>
        Se a cotação subir 5%: ${(cotacao * 1.05).toFixed(2)}<br>
        Se a cotação subir 10%: ${(cotacao * 1.10).toFixed(2)}
    `;
    document.getElementById('resultado').innerHTML = resultado;
}