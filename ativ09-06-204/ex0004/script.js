function calcular() {
    var sabores = [
        document.getElementById('sabor1').value,
        document.getElementById('sabor2').value,
        document.getElementById('sabor3').value,
        document.getElementById('sabor4').value
    ];
    var refrigerantes = parseInt(document.getElementById('refrigerantes').value);
    if (isNaN(refrigerantes) || refrigerantes < 0) {
        alert("Por favor, insira uma quantidade válida de refrigerantes.");
        return;
    }
    var total = (sabores.length * 12) + (refrigerantes * 7);
    var resultado = `
                Sabores escolhidos:<br>
                ${sabores.join('<br>')}<br>
                Total a pagar: R$ ${total.toFixed(2)}
            `;
    document.getElementById('resultado').innerHTML = resultado;
}