import geradorNumero from 'geradorNumero.js';

function obterNumerosFormulario() {
    const numero1 = parseInt(document.querySelector('.um').value);
    const numero2 = parseInt(document.querySelector('.dois').value);
    const numero3 = parseInt(document.querySelector('.tres').value);
    const numero4 = parseInt(document.querySelector('.quatro').value);
    const numero5 = parseInt(document.querySelector('.cinco').value);
    const numero6 = parseInt(document.querySelector('.seis').value);

    const numeros = [numero1, numero2, numero3, numero4, numero5, numero6];
    return numeros;
}

function verificarIgualdade() {
    const numerosUsuarios = obterNumerosFormulario();
    const numerosSorteados = geradorNumero();
    const resultado = [];

    for (let contador = 0; contador < numerosSorteados.length; contador++) {
        if(numerosUsuarios[contador] === numerosSorteados[contador]) {
            resultado.push(true);
        } else {
            resultado.push(false);
        }
    }
    return resultado;
}

export {numerosSorteados, verificarIgualdade};


