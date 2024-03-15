let valores = [];
let menos = [];
let operador = '';


function adicionarValor(valor) {
    let inputResultado = document.getElementById('resultado');
    if (valores.length === 0 && operador === '=') {
        inputResultado.value = '';
        operador = '';
    }
    if (menos.length === 0) {
        inputResultado.value += valor;
    } else {
        menos = []
    }
}

function adicionarAcao(valor) {
    let inputResultado = document.getElementById('resultado');
    let texto = inputResultado.value;
    if (operador !== '' && texto.length > 0) {
        calculoTotal();
    }
    if (texto.length > 0 && menos.length < 1) {
        valores.push(parseFloat(texto.replace(',', '.')));
    }
    if (valor === '-' && valores.length === 1 && texto.length > 0) {
        menos.push(valor)
    }
    inputResultado.value = '';

    if (valores.length > 0) {
        operador = valor;
    }
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
                for (let i = 1; i < valores.length; i++) {
                    total -= valores[i];
                }
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
    if (Number.isNaN(total)) {
        inputResultado.value = '';
    } else {
        inputResultado.value = total.toString().replace('.', ',');
    }
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



