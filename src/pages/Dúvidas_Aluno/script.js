const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const nome = urlParams.get("nome");
const id_professor = urlParams.get("id_treinador");

$.ajax({
    method: "GET",
    url: `http://localhost:3000/usuarios`,
    success: function (data) {
        console.log("fgcffgfh")
        data.forEach(value => {
            if (value.id == id) {
                $("#bem_vindo").html("Seja bem vindo,  " + value.nome);
                $("#codigo_treinador").html(value.id);
            }
        });
        return true;
    },
    error: function (xhr, status, error) {
        alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
        console.log(xhr, status, error);
    }
});

function salvarDados() {
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;
    var nome = '';


    fetch("http://localhost:3000/usuarios", {
        method: "GET",
        headers: {
            "Content-Type": "applic ation/json"
        }
    }).then((res => {
        return res.json()
    })).then((res) => {
        res.forEach(element => {
            if (element.id == id) {
                nome = element.nome
            }
        });
    })

    var dados = {
        NOME_ALUNO: nome,
        TP_INFORMACAO: 1,
        STATUS: 'P',
        assunto: assunto,
        mensagem: mensagem,
        id_professor: id_professor
    };

    fetch("http://localhost:3000/tipo_informacao", {
            method: "POST",
            body: JSON.stringify(dados),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Erro ao cadastrar dúvida.");
            }
        })
        .then(function (resultado) {
            alert("Dúvida cadastrada com sucesso.");
        })
        .catch(function (error) {
            console.log("erro")
        });
}