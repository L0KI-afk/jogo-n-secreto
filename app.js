 let listasDeNumerosSorteados = [];
 let numeroLimite = 10;
 let numeroSecreto = gerarNumeroAleatorio();
 let tentativas = 1;

function exibirTextonaTela(tag, texto) {
    let campo = document .querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextonaTela('h1', 'Jogo do número secreto');
    exibirTextonaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

exibirTextonaTela('h1', 'Jogo do número secreto');
exibirTextonaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if(chute == numeroSecreto) {
        exibirTextonaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `boa, conseguiu com ${tentativas} ${palavraTentativa}!`;
        exibirTextonaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute >  numeroSecreto) {
            exibirTextonaTela('p', 'O secreto número é menor');
        } else {
            exibirTextonaTela('p', 'O secreto número é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listasDeNumerosSorteados.length;

if(quantidadeDeElementosNaLista == numeroLimite) {
   listasDeNumerosSorteados = [];
}

    if (listasDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listasDeNumerosSorteados.push(numeroEscolhido);
        console.log (listasDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}