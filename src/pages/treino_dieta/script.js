const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

$(document).ready(function() {
    carregarDadosTreinoDieta();
  });
  
  function carregarDadosTreinoDieta() {
    // Enviar uma requisição GET para obter os dados de treino e dieta do JSON Server
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/treino_dieta",
      success: function(response) {
        if (response.length > 0) {
          var treino = response[0].treino;
          var dieta = response[0].dieta;
  
          // Preencher os elementos HTML com os dados obtidos
          $("#treino").val(treino);
          $("#dieta").val(dieta);
        }
      },
      error: function(xhr, status, error) {
        console.log("Erro ao carregar os dados de treino e dieta:", error);
      }
    });
  }
  