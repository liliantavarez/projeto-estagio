let cadastrados = JSON.parse(localStorage.getItem("arrayCadastros"));

function exibirNaTela(cadastrados) {
  let html = "";
  for (var i = 0; i < cadastrados.length; i++) {
    html += "<tr><td>" + cadastrados[i].numId + "</td>";
    html += "<td>" + cadastrados[i].especie + "</td>";
    html += "<td>" + cadastrados[i].porte + "</td>";
    html += "<td >" + cadastrados[i].descricao + "</td>";
  }
  let tabela = document.getElementById("exibirCadastros");
  tabela.innerHTML = html;
}

exibirNaTela(cadastrados);
  