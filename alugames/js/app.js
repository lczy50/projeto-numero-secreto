//let idUm = document.getElementsById('game-1'); 
//let idDois = document.getElementsById('game-2');
//let idTres = document.getElementsById('game-3');

//function alterarStatus(x) {
//    let botaoDesativado = document.getElementsByClassName = 'dashboard__item__button dashboard__item__button--return'; document.getElementsByClassName = 'dashboard__item__img dashboard__item__img--rented';
//    let botaoAtivado = document.getElementsByClassName = 'dashboard__item__button'; document.getElementsByClassName = 'dashboard__item__img';
//    if(x.classList.contains(botaoDesativado)){
//        x.classList.remove(botaoDesativado);
//        x.innerHTML('<div class="dashboard__item__img">')
//    } else {
//        x.classList.remove(botaoAtivado);
//        x.classList.add('<div class="dashboard__item__img dashboard__item__img--rented">');
//    }
 //   alterarStatus(x);
//}

let numeros = [];
let numero = 0;
while(numero<3){
    numeros.push(parseInt(prompt('fale um numero:')));
    numero++;
}
numeros.sort((a, b) => a - b);
console.log(numeros);

function alterarStatus(id) {
    console.count();
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let alertaSOuN = parseInt(prompt('você quer mesmo alugar o jogo? 0=não 1=sim'));
    if(alertaSOuN==1){
        if (imagem.classList.contains('dashboard__item__img')) {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
         }
    } else {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
    }
    //if(gameClicado.classList.contains('dashboard__item__button dashboard__item__button--return')) {
    //    gameClicado.classList.remove('dashboard__item__button dashboard__item__button--return');
    //    gameClicado.classList.add('dashboard__item__button');
    //}
}


