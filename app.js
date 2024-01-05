let listNumber = [];
let maxNumber = 10
let secretNumber = numeroAleatorio();
let attempts = 1;



//attempts = tentativas / number = numero / wordAttemtps = Palavra tentativa / kick = chute

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function startMenssage(){
    exibirTexto('h1',' Bem vindo ao Jogo do Numero Secreto');
    exibirTexto('p','Escolha um numero entre 1 e 10');
}

startMenssage();

function verificarChute() {
    let kick = document.querySelector('input').value;

    if ( kick == secretNumber){
        exibirTexto('h1', 'Muito bem !!');
        let wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou o numero secreto com ${attempts} ${wordAttempts} !`;        
        exibirTexto('p', mensagem );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(kick > secretNumber) {
            exibirTexto('p','O numero secreto é menor');
        } else {
            exibirTexto('p','O numero secreto é maior');
        }
        attempts ++;
        clear();

    }

}

function numeroAleatorio() {
    let chosenNumber = parseInt(Math.random() * maxNumber + 1);
    let qtdListNumber = listNumber.length;

    if( qtdListNumber == maxNumber) {
        listNumber = [];
    }
    if(listNumber.includes(chosenNumber)) {
        return numeroAleatorio();
    } else {
        listNumber.push(chosenNumber);
        console.log(listNumber);
        return chosenNumber;
    }
    
}

function clear(){
    kick = document.querySelector('input');
    kick.value = '';

}

function reiniciarJogo() {
    secretNumber = numeroAleatorio();
    clear();
    attempts = 1;
    startMenssage();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}
