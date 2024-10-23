function comprar () {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    
    if (tipoDeIngresso=='pista') {
          comprarPista(quantidade);
    } else if(tipoDeIngresso=='superior'){
        comprarSuperior(quantidade);
    } else if(tipoDeIngresso=='inferior'){
        comprarInferior(quantidade);
    }
    
}

function comprarPista (x) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let quantidade = document.getElementById('qtd').value;

    if(quantidade>qtdPista) {
        alert('Compra negada')
    } else {
        qtdPista = qtdPista - quantidade; 
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra feita com sucesso');
    }
}

function comprarSuperior (x) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let quantidade = document.getElementById('qtd').value;

    if(quantidade>qtdSuperior) {
        alert('Compra negada')
    } else {
        qtdSuperior = qtdSuperior - quantidade; 
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra feita com sucesso');
    }
}

function comprarInferior (x) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let quantidade = document.getElementById('qtd').value;

    if(quantidade>qtdInferior) {
        alert('Compra negada')
    } else {
        qtdInferior = qtdInferior - quantidade; 
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra feita com sucesso');
    }
}