function insert(num) {
    var numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('Resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {  // Nome corrigido para bater com o HTML
    var resultado = document.getElementById('Resultado');
    try {
        resultado.innerHTML = eval(resultado.innerHTML);
    } catch (e) {
        resultado.innerHTML = "Erro";
    }
}