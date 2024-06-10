function calcular() {
    var pessoas = parseInt(document.getElementById('pessoas').value);
    if (isNaN(pessoas) || pessoas < 1) {
        alert("Por favor, insira um número válido de pessoas.");
        return;
    }
    var ovos = pessoas * 2;
    var queijo = pessoas * 50;
    document.getElementById('resultado').innerHTML = `Serão necessários ${ovos} ovos e ${queijo} gramas de queijo.`;
}
