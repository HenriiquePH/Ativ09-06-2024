function calcular() {
    var alunos = parseInt(document.getElementById('alunos').value);
    var turmas = parseInt(document.getElementById('turmas').value);
    if (isNaN(alunos) || isNaN(turmas) || alunos < 1 || turmas < 1) {
        alert("Por favor, insira valores válidos.");
        return;
    }
    var alunosPorTurma = Math.floor(alunos / turmas);
    var semTurma = alunos % turmas;
    var resultado = `
        Cada turma terá ${alunosPorTurma} alunos.<br>
        Alunos sem turma: ${semTurma}
    `;
    document.getElementById('resultado').innerHTML = resultado;
}