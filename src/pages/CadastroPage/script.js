document.getElementById("isAluno").addEventListener("change", function (event) {
    if (document.getElementById("isAluno").value == '0') {
        document.getElementById("codigo_treinador").style.display = "none";
        document.getElementById("codigo_treinador").value = ""
    } else {
        document.getElementById("codigo_treinador").style.display = "flex";
    }
});
document.getElementById("botaoCadastro").addEventListener("click", function (event) {
    var nome = document.getElementById("nome").value;
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var isAluno = document.getElementById("isAluno").value == 1 ? true : false;
    var codigo_treinador = document.getElementById("codigo_treinador").value;

    if (!nome || !login || !senha || (isAluno && !codigo_treinador)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var dados = {
        nome: nome,
        login: login,
        senha: senha,
        codigo_treinador: isAluno ? codigo_treinador : null
    };
    fetch(`http://localhost:3000/usuarios?login=${login}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res => {
        return res.json()
    })).then((res) => {
        if (res.length > 0) {
            console.log('res: ', res);
            alert("Já existe um usuário com o mesmo nome de usuário, digite outro")
            return
        } else {

            fetch("http://localhost:3000/usuarios", {
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
                        throw new Error("Erro ao cadastrar usuário.");
                    }
                })
                .then(function (resultado) {
                    alert("Usuário cadastrado com sucesso.");
                    usuarioCadastrado = true;
                    document.getElementById("nome").value = "";
                    document.getElementById("login").value = "";
                    document.getElementById("senha").value = "";
                    document.getElementById("isAluno").value = "1";
                })
                .catch(function (error) {
                    console.log("erro")
                });
        }
    })
    if (isAluno) {
        window.location.href = "../treino_dieta/index.html";
    } else {
        window.location.href = "../Principal_trainner/index.html";
    }

});