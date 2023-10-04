//Seu JavaScript de validação aqui

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagensErro = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
        typeMismatch: "Por favor, preencha um assunto válido.",
        tooShort: "Por favor, preencha um assunto válido." 
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio.",
        typeMismatch: "Por favor, preencha uma mensagem válida.",
        tooShort: "Por favor, preencha uma mensagem válida." 
    }
}    

function verificaCampo(campo) {
    let mensagemForm = "";
    campo.setCustomValidity('');
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagemForm = mensagensErro[campo.name][erro];
            console.log(mensagemForm);
        }
    })
    const mensagemErroTela = campo.parentNode.querySelector('.mensagem-erro'); 
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput) {
        mensagemErroTela.textContent = mensagemForm;
    } else {
        mensagemErroTela.textContent = "";
    }
}