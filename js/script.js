class Cadastro {

    cadastrar() {
        let arrayCadastros = JSON.parse(localStorage.getItem("arrayCadastros") || "[]");
        let cadastro = this.receberDados();
        if (this.validarDados(cadastro)) {
            arrayCadastros.push(cadastro);
            localStorage.setItem("arrayCadastros", JSON.stringify(arrayCadastros));
        }
    }

    receberDados() {
        let cadastro = {};
        cadastro.especie = document.getElementById("especie").value;
        cadastro.numId = document.getElementById("numId").value;
        cadastro.porte = document.getElementById("porte").value;
        cadastro.descricao = document.getElementById("descricao").value;
        return cadastro;
    }

    validarDados(cadastro) {
        let msgError = document.getElementById("error");
        let msgSuccess = document.getElementById("success");

        if (
            cadastro.especie != "select" &&
            cadastro.porte != "select" &&
            cadastro.numId != "" &&
            cadastro.descricao != ""
        ) {
            msgSuccess.setAttribute("style", "display:inline;text-align: center;");
            msgSuccess.innerHTML =
                "<strong>Cadastro realizado com sucesso!</strong>";
            msgError.setAttribute("style", "display:none");
            msgError.innerHTML = "";
            document.getElementById("numId").value = "";
            document.getElementById("descricao").value = "";
            document.getElementById("especie").value = "select";
            document.getElementById("porte").value = "select";
            return true;
        } else {
            msgError.setAttribute("style", "display:inline;text-align: center;");
            msgError.innerHTML = "<strong>Preencha todos os dados!</strong>";
            msgSuccess.setAttribute("style", "display:none");
            msgSuccess.innerHTML = "";
            return false;
        }
    }

}

let fazerCadastros = new Cadastro();
let cadastrados = JSON.parse(localStorage.getItem("arrayCadastros"));

function exibirNaTela(cadastrados) {
  var html = "";
  for (var i = 0; i < cadastrados.length; i++) {
    html += "<tr><td>" + cadastrados[i].numId + "</td>";
    html += "<td>" + cadastrados[i].especie + "</td>";
    html += "<td>" + cadastrados[i].porte + "</td>";
    html += "<td >" + cadastrados[i].descricao + "</td>";
  }
  var tabela = document.getElementById("exibirCadastros");
  tabela.innerHTML = html;
}

exibirNaTela(cadastrados);
