const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const nome = urlParams.get("nome");

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

function setFedback(){
    $.ajax({
        method: "POST",
        url: `http://localhost:3000/tipo_informacao`,
        data: {
            NOME_ALUNO:nome,
            STATUS: 'P',
            assunto: null,
            mensagem: $("#mensagem").text(),
            mensagem_professor : null
        },
        datatype: "json",
        success:function(data){
            alert("Feedback enviado com sucesso.");
            window.location.href = `../Principal_trainner/index.html?id=${id}`;
        return true;
        },
        error:function (xhr, status, error){
          alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
          console.log(xhr, status, error);
        }
    });
}