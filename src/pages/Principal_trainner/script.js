const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

$(document).ready(function () {
  alunos_professor();
  monta_tabela_principal_trainner();
})

function alunos_professor() {
  $.ajax({
    method: "GET",
    url: `http://localhost:3000/usuarios`,
    success: function (data) {
      var valores_position = [];
      data.forEach(value => {
        if (value.codigo_treinador != null && value.codigo_treinador == id) {
          valores_position.push(value);
        }
        if (value.codigo_treinador == null && value.id == id) {
          $("#header_treinador").html("Seja bem vindo, Treinador(a) " + value.nome);
          $("#cod_prof").html(value.id);
        }
      });

      var html_alunos_professor = "<h3 style='margin-top: 60px; padding-left: 10%;'><p2><b>Alunos</b></p2></h3>";
      valores_position.forEach(value => {
        html_alunos_professor += `<a href="../treino_dieta_professor/index.html?id=` + value.id + `">
                                              <h4 class="text-bold" style=" padding-top: 5%; padding-left: 10%;"><p1>` + value.nome + `</p1></h4>
                                          </a>`;
      });

      $("#alunos_professor").html(html_alunos_professor);
      return true;
    },
    error: function (xhr, status, error) {
      alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
      console.log(xhr, status, error);
    }
  });
}

function monta_tabela_principal_trainner() {
  $.ajax({
    method: "GET",
    url: `http://localhost:3000/tipo_informacao`,
    success: function (data) {
      var html_tabela_principal = "";
      data.forEach(value => {
        html_tabela_principal = `<tr>
                                              <td>
                                                <h5 class="text-bold">` + value.NOME_ALUNO + `</h5>
                                              </td>
                                              <td>
                                                <a href="../` + (value.TP_INFORMAÇAO == 1 ? "Retorno_Dúvidas" : "retorno_feedback") + `/index.html?nome=` + value.NOME_ALUNO + `&id=` + id + `"><h5 class="text-bold">` + (value.TP_INFORMAÇAO == 1 ? "Dúvidas" : "Feedback") + `</h5></a>
                                              </td>
                                              <td>
                                                <h5 class="text-bold" style="color: #54cf80">` + (value.STATUS == 'P' ? "Pendente" : "Concluído") + `</h5>
                                              </td>
                                          </tr>`;
      });

      $("#body_table").html(html_tabela_principal);
    },
    error: function (xhr, status, error) {
      alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
      console.log(xhr, status, error);
    }
  });
}