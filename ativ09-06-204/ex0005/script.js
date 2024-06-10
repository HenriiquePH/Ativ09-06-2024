function verificar() {
    var pessoas = [
        { nome: document.getElementById('nome1').value, ano: parseInt(document.getElementById('nasc1').value) },
        { nome: document.getElementById('nome2').value, ano: parseInt(document.getElementById('nasc2').value) },
        { nome: document.getElementById('nome3').value, ano: parseInt(document.getElementById('nasc3').value) }
    ];
    pessoas.sort((a, b) => a.ano - b.ano);
    var anoAtual = new Date().getFullYear();
    var resultado = `
        Pessoa mais velha: ${pessoas[0].nome} - ${anoAtual - pessoas[0].ano} anos<br>
        Segunda pessoa: ${pessoas[1].nome} - ${anoAtual - pessoas[1].ano} anos<br>
        Terceira pessoa: ${pessoas[2].nome} - ${anoAtual - pessoas[2].ano} anos
    `;
    document.getElementById('resultado').innerHTML = resultado;
}