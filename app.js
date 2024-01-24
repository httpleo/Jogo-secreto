alert ('Bem vindo ao Jogo do Adivinhe o Numero');
let numeroSecreto = parseInt(Math.random() *30+1)
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute nao for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    if (chute == numeroSecreto) {
        break
        
            } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
            } else {
        alert (`O numero secreto é maior, que ${chute}`);
}
        //tentativas = tentativas + 1;
        tentativas++
// Use if para especificar um bloco de código a ser executado, se uma condição especificada for verdadeira ('SE' O CHUTE FOR IGUAL AO NUMEROSECRETO)
// O log()método grava (registra) uma mensagem no console.
//Use elsepara especificar um bloco de código a ser executado, se a mesma condição for falsa
   
    }
        
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
//if (tentativas > 1 ) {
    //alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
    //alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}