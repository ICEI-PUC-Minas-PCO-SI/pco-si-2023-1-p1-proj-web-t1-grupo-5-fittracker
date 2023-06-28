// Função para salvar os dados do treino e dieta
function salvarDados() {
    var treino = document.getElementById("treino").value;
    var dieta = document.getElementById("dieta").value;
  
    // Criar um objeto JSON com os dados
    var data = {
      treino: treino,
      dieta: dieta
    };
  
    // Enviar uma requisição POST para salvar os dados no JSON Server
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/treino_dieta",
      data: data,
      success: function(response) {
        console.log("Dados salvos com sucesso!");
      },
      error: function(xhr, status, error) {
        console.log("Erro ao salvar os dados:", error);
      }
    });
  }
  