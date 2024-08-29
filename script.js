const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (nome !== '' && !isNaN(altura) && !isNaN(peso)) {
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        switch (true) {
            case (valorIMC < 18.5):
                classificacao = 'Abaixo do peso';
                break;
            case (valorIMC >18.6 && valorIMC <=24.09):
                classificacao = 'Com peso ideal';
                break;
            case (valorIMC >25 && valorIMC<=29.9):
                classificacao = 'Levemente acima do peso';
                break;
            case (valorIMC >30):
                classificacao = 'Obesidade Grau I';
                break;
            case (valorIMC >30.1 && valorIMC <=34.9):
                classificacao = 'Obesidade Grau II (severa)';
                break;
            default:
                classificacao = 'Obesidade Grau III (mórbida)';
                break;
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}.`;
    } else {
        resultado.textContent = "Preencha todos os campos corretamente.";
    }
}

calcular.addEventListener('click', imc);
