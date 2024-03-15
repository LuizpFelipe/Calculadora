let valores = [];
let operador = '';


function adicionarValor(valor) {
    let inputResultado = document.getElementById('resultado');
    if (valores.length === 0 && operador === '=') {
        inputResultado.value = '';
        operador = '';
    }
    inputResultado.value += valor;
}

function adicionarAcao(valor) {
    let inputResultado = document.getElementById('resultado');
    let texto = inputResultado.value;
    if (operador !== '') {
        calculoTotal();
    }
    valores.push(texto.replace(',', '.'));

    inputResultado.value = '';
    operador = valor;
}


function calculoTotal(valor) {
    let inputResultado = document.getElementById('resultado');
    let texto = inputResultado.value;
    if (inputResultado.value !== '') {
        valores.push(parseFloat(texto.replace(',', '.')));
    }

    let total = valores[0];

    for (let i = 1; i < valores.length; i++) {
        switch (operador) {
            case '-':
                total = valores.reduce(function (total, numero) {
                    return parseFloat(total) - parseFloat(numero);
                })
                valores = []
                valores[total]
                break;
            case '+':
                total = valores.reduce(function (total, numero) {
                    return parseFloat(total) + parseFloat(numero);
                })
                valores = []
                valores[total]
                break;
            case '/':
                total = valores.reduce(function (total, numero) {
                    return parseFloat(total) / parseFloat(numero);
                })
                valores = []
                valores[total]
                break;
            case 'x':
                total = valores.reduce(function (total, numero) {
                    return parseFloat(total) * parseFloat(numero);
                })
                valores = []
                valores[total]
                break;
        }
    }
    inputResultado.value = total.toString().replace('.', ',');
    if (valor === '=') {
        valores = []
        operador = valor;
    }
}

function reset() {
    let inputResultado = document.getElementById('resultado');
    valores = []
    operador = ''
    inputResultado.value = '';
}



