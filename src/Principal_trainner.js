const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

$(document).ready(function () {
  alunos_professor();
  monta_tabela_principal_trainner();
})

function alunos_professor() {
  fetch(`https://json-server-fit-tracker.vercel.app/usuarios`, {
  method: "GET",
  headers: {
      "Content-Type": "application/json"
  }
}).then((res => {
  return res.json()
})).then((data) => {
  var valores_position = [];
  data.forEach(value => {
    if (value.codigo_treinador != null && value.codigo_treinador == id) {
      valores_position.push(value);
    }
    if (value.codigo_treinador == null && value.id == id) {
      $("#header_treinador").html("Seja bem vindo, Treinador(a) " + value.nome);
      $("#cod_prof").html(value.nome);
    }
  });

  var html_alunos_professor = "<h3 style='margin-top: 60px; padding-left: 10%;'><p2><b>Alunos</b></p2></h3>";
  valores_position.forEach(value => {
    html_alunos_professor += `<a href="./treino_dieta_professor.html?id=` + value.id + `&id_treinador=${id}"">
                                          <h4 class="text-bold" style=" padding-top: 5%; padding-left: 10%;"><p1>` + value.nome + `</p1></h4>
                                      </a>`;
  });
  $("#alunos_professor").html(html_alunos_professor);
  return true;
});

  // $.ajax({
  //   method: "GET",
  //   url: `https://json-server-fit-tracker.vercel.app/usuarios`,
  //   success: function (data) {
  //     var valores_position = [];
  //     data.forEach(value => {
  //       if (value.codigo_treinador != null && value.codigo_treinador == id) {
  //         valores_position.push(value);
  //       }
  //       if (value.codigo_treinador == null && value.id == id) {
  //         $("#header_treinador").html("Seja bem vindo, Treinador(a) " + value.nome);
  //         $("#cod_prof").html(value.nome);
  //       }
  //     });

  //     var html_alunos_professor = "<h3 style='margin-top: 60px; padding-left: 10%;'><p2><b>Alunos</b></p2></h3>";
  //     valores_position.forEach(value => {
  //       html_alunos_professor += `<a href="./treino_dieta_professor.html?id=` + value.id + `&id_treinador=${id}"">
  //                                             <h4 class="text-bold" style=" padding-top: 5%; padding-left: 10%;"><p1>` + value.nome + `</p1></h4>
  //                                         </a>`;
  //     });
  //     $("#alunos_professor").html(html_alunos_professor);
  //     return true;
  //   },
  //   error: function (xhr, status, error) {
  //     alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
  //     console.log(xhr, status, error);
  //   }
  // });
}

function monta_tabela_principal_trainner() {
  fetch(`https://json-server-fit-tracker.vercel.app/tipo_informacao`, {
  method: "GET",
  headers: {
      "Content-Type": "application/json"
  }
}).then((res => {
  return res.json()
})).then((data) => {
  var html_tabela_principal = "";
  data.forEach(value => {
    if (value.id_treinador == id) {
      var href1 = "";
      var div = "";
      if (value.TP_INFORMACAO == 1) {
        href1 = "Retorno_Dúvidas";
        div = "Dúvidas";
      } else {
        div = "Feedback";
        href1 = "retorno_feedback";
      }

      var status = "";
      var color = "";
      var href = "";
      if (value.STATUS == 'P') {
        color = "orange";
        status = "Pendente"
        console.log(value);
        href = `href=./${href1}.html?nome=${value.NOME_ALUNO.replace(' ', "%20")}&id_aluno=${value.ID_ALUNO}&id=${id}&id_informacao=${value.id}`

      } else {
        href = ''
        color = "#54cf80";
        status = "Concluído";
      }
      html_tabela_principal += `<tr>
                                <td>
                                  <h5 class="text-bold">` + value.NOME_ALUNO + `</h5>
                                </td>
                                <td>
                                  <a  ${href} ><h5 class="text-bold">` + div + `</h5></a>
                                </td>
                                <td>
                                  <h5 class="text-bold" style="color: ` + color + `">` + status + `</h5>
                                </td>
                            </tr>`;
    }
  });

  $("#body_table").html(html_tabela_principal);
});

  // $.ajax({
  //   method: "GET",
  //   url: `https://json-server-fit-tracker.vercel.app/tipo_informacao`,
  //   success: function (data) {

  //   },
  //   error: function (xhr, status, error) {
  //     alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
  //     console.log(xhr, status, error);
  //   }
  // });
}