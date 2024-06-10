function verificar() {
    var vendido = parseFloat(document.getElementById('vendido').value);
    var meta = parseFloat(document.getElementById('meta').value);
    var metaMinima = parseFloat(document.getElementById('metaMinima').value);
    if (isNaN(vendido) || isNaN(meta) || isNaN(metaMinima) || vendido < 0 || meta < 0 || metaMinima < 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }
    var resultado;
    if (vendido >= meta) {
        resultado = "Atingiu a meta.";
    } else if (vendido >= metaMinima) {
        resultado = "Atingiu a meta mínima.";
    } else {
        resultado = "Não atingiu nenhuma das metas.";
    }
    var percentualMeta = (vendido / meta * 100).toFixed(2);
    var percentualMetaMinima = (vendido / metaMinima * 100).toFixed(2);
    resultado += `
        <br>Percentual de atingimento da meta: ${percentualMeta}%
        <br>Percentual de atingimento da meta mínima: ${percentualMetaMinima}%
    `;
    document.getElementById('resultado').innerHTML = resultado;
}