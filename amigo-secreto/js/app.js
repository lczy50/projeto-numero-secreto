let amigos = [];

function adicionar () {
let amigo = document.getElementById('nome-amigo');

if(amigo.value==''){
    alert('informe um nome')
    return;
}

if(amigos.includes(amigo.value)){
    alert('nome ja adicionado')
    return;
    
} else {
let lista = document.getElementById('lista-amigos');
amigos.push(amigo.value);
if( lista.textContent == ''){
    lista.textContent = amigo.value;     
} else {
    lista.textContent = lista.textContent + ', ' + amigo.value;
}
amigo.value = '';
}
}

function sortear () {
if(amigos.length<=3){
    alert('adicione pelo menos 4 amigos')
} else{

embaralha(amigos);
let sorteio = document.getElementById('lista-sorteio');

for (let i = 0; i < amigos.length; i++ ){

    if(i==amigos.length-1){
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>';
    }

}
}
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar () {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    let sorteio = document.getElementById('lista-sorteio');
    embaralha(amigos);

    while(amigos.length>0){
        amigos.pop();
    }
    
    lista.textContent = '';
    amigo.value = '';
    sorteio.innerHTML= '';

}