function verificar() {
    var nota = parseFloat(document.getElementById('nota').value);
    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Por favor, insira uma nota válida entre 0 e 10.");
        return;
    }
    var resultado;
    if (nota >= 6) {
        resultado = "Aprovado";
    } else if (nota >= 4) {
        resultado = "Precisa fazer prova substitutiva";
    } else {
        resultado = "Reprovado";
    }
    document.getElementById('resultado').innerHTML = resultado;
}