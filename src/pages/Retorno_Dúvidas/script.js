const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const nome = urlParams.get("nome");

    $(document).ready(function(){
    $("#nome_aluno").html("Aluno: "+ nome);
      alunos_professor();
      getDuvida();
    })
 
    var get_aluno = [];
    var get_aluno2 = [];
    function alunos_professor(){
        $.ajax({
            method: "GET",
            url: `http://localhost:3000/usuarios`,
            success:function(data){
              data.forEach(value => {
                  if(value.codigo_treinador == null && value.id == id){
                    $("#header_treinador").html("Seja bem vindo, Treinador(a) "+value.nome);
                  }
                  if(value.codigo_treinador != null && value.codigo_treinador == id){
                    get_aluno.push(value);
                  }
              });

              get_aluno.forEach(value => {
                if(value.nome == nome){
                    get_aluno2.push(value);
                }
              })
            return true;
            },
            error:function (xhr, status, error){
              alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
              console.log(xhr, status, error);
            }
        });
    }
    
    function getDuvida(){
        $.ajax({
            method: "GET",
            url: `http://localhost:3000/tipo_informacao`,
            success:function(data){
              data.forEach(value => {
                  if(get_aluno2['nome'] == nome){
                    $("#mensagem").text(value.mensagem);
                  }
              });
            return true;
            },
            error:function (xhr, status, error){
              alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
              console.log(xhr, status, error);
            }
        });
    }

    function setDuvida(){
        $.ajax({
            method: "POST",
            url: `http://localhost:3000/tipo_informacao`,
            data: {
                NOME_ALUNO:nome,
                STATUS: 'C',
                assunto: $("#assunto").html(),
                mensagem: $("#mensagem").html(),
                mensagem_professor : $("#resposta").text()
            },
            datatype: "json",
            success:function(data){
                alert("Retorno enviado com sucesso.");
                window.location.href = `../Principal_trainner/index.html?id=${id}`;
            return true;
            },
            error:function (xhr, status, error){
              alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
              console.log(xhr, status, error);
            }
        });
    }


