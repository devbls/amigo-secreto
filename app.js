let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById('amigo');

  if (nome == '') {
    alert('Por favor, insira um nome.')
  } else {
    amigos.push(nome);
    nome.value = '';
  }
}