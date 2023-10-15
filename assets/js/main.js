import verificarIgualdade from 'verificador.js';
import numerosSorteados from 'verificador.js';

class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
        this.verificarIgualdade() = verificarIgualdade;
        this.numerosSorteados = numerosSorteados;
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();

        if(camposValidos) {
            this.camposIguais();
            this.numerosSorteados();
        }
    }

    camposIguais() {
    
        for (let resultText of this.formulario.querySelectorAll('.result-text')) {
            resultText.remove();
        }

        const resultado = verificarIgualdade();

        var contador = 0;

        for (let campo of this.formulario.querySelectorAll('.numero')) {
            const label = campo.previousElementSibling.innerText;

            if(resultado[contador]) {
                this.criaResultado(campo, `campo ${label} correto`)
            }
            else if(!resultado[contador]){
                this.criaResultado(campo, `campo ${label} incorreto`)
            }
        }        

    }

    camposSaoValidos() {
        let valid = true;


        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.numero')) {
            const label = campo.previousElementSibling.innerText;

            if(!campo.value) {
                this.criaErro(campo,`campo "${label}" não pode estar em branco.`);            
                valid = false;
            }

            if(typeof campo.value !== 'number') {
                this.criaErro(campo,`campo "${label}" deve ser um numero.`);            
                valid = false;
            }

        }

        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    criaResultado(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('result-text');
        campo.insertAdjacentElement('afterend', div);
    }
    
    numerosSorteados() {
        const div = document.querySelector('.resultado')
        div.innerHTML = numerosSorteados;
    }
}

const valida = new ValidaFormulario();