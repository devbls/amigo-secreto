let amigos = [];

function atualizarLista() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    let amigo = amigos[i];

    let item = document.createElement('li');
    item.innerText = amigo;
    listaAmigos.appendChild(item);
  }
}

function adicionarAmigo() {
  let nome = document.getElementById('amigo');

  if (nome.value == '') {
    alert('Por favor, insira um nome.')
  } else {
    amigos.push(nome.value);
    nome.value = '';
    atualizarLista();
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    return;
  }
  
  let indiceAmigoSorteado = Math.floor(Math.random() * amigos.length);
  let nomeSorteado = amigos[indiceAmigoSorteado];

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = nomeSorteado;
}