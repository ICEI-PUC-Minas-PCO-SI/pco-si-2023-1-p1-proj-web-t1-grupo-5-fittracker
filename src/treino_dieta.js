const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
var id_treinador = 0;
$.ajax({
  method: "GET",
  url: `http://localhost:3000/usuarios`,
  success: function (data) {
    data.forEach(value => {
      if (value.id == id) {
        $("#bem_vindo").html("Seja bem vindo,  " + value.nome);
        $("#cod_prof").html(value.id);
        id_treinador = value.codigo_treinador
      }
    });
    return true;
  },
  error: function (xhr, status, error) {
    alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
    console.log(xhr, status, error);
  }
});
$(document).ready(function () {
  carregarDadosTreinoDieta();
});

function carregarDadosTreinoDieta() {
  // Enviar uma requisição GET para obter os dados de treino e dieta do JSON Server
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/treino_dieta",
    success: function (response) {
      response.forEach(value => {
        if (value.id_aluno == id) {
          var treino = value.treino;
          var dieta = value.dieta;
          $("#treino").html(treino);
          $("#dieta").html(dieta);

        }

      });
      return true;

    },
    error: function (xhr, status, error) {
      console.log("Erro ao carregar os dados de treino e dieta:", error);
    }
  });
}


$.ajax({
  method: "GET",
  url: `http://localhost:3000/tipo_informacao`,
  success: function (data) {
    var valores_position = [];
    var html_informacoes_feedback = ''
    data.forEach(value => {
      console.log('value: ', value);

      if (value.ID_ALUNO == id && value.STATUS == "C") {
        valores_position.push(value);
      }
    });
    console.log('valores_position: ', valores_position);

    valores_position.forEach(value => {
      html_informacoes_feedback += `<a href="./${value.TP_INFORMACAO == "1"?"retorno_aluno_duvida":"retorno_aluno_feedback"}.html?id_retorno=` + value.id + `">
      ${
        value.TP_INFORMACAO == "1" ? 'Retorno dúvida' : 'Retorno feedback'
      }<br>
  </a>`;
    });
    $("#informacoes_novas").html(html_informacoes_feedback);
    return true;
  },
  error: function (xhr, status, error) {
    alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
    console.log(xhr, status, error);
  }
});


$("#enviar_feedback").click(() => {
  window.location.href = `./feedback_semanal.html?id=${id}&id_treinador=${id_treinador}`;
})
$("#enviar_duvida").click(() => {
  window.location.href = `./Dúvidas_aluno.html?id=${id}&id_treinador=${id_treinador}`;
})