const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
$.ajax({
  method: "GET",
  url: `http://localhost:3000/usuarios`,
  success: function (data) {
    data.forEach(value => {
      if (value.id == id) {
        $("#bem_vindo").html("Seja bem vindo,  " + value.nome);
        $("#cod_prof").html(value.id);
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