window.onload = () => {
    fetch(`http://localhost:3000/usuarios`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res => {
        return res.json()
    })).then((res) => {
        let treinadoresOptions = `<option value="">Selecione um treinador</option>`
        let selectTreinador = document.getElementById("codigo_treinador");
        var option;
        option = new Option("Selecione um treinador", "")
        selectTreinador.add(option)
        res.map((usuar) => {
            if (usuar.codigo_treinador == null) {
                option = new Option(usuar.nome, usuar.id)
                selectTreinador.add(option)
            }
        })
    })
}

document.getElementById("isAluno").addEventListener("change", function (event) {
    if (document.getElementById("isAluno").value == '0') {
        document.getElementById("codigo_treinador").style.display = "none";
        document.getElementById("codigo_treinador").value = ""
    } else {
        document.getElementById("codigo_treinador").style.display = "flex";
    }
});
var criaUsuario = false;
document.getElementById("botaoCadastro").addEventListener("click", async function (event) {
    var nome = document.getElementById("nome").value;
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var isAluno = document.getElementById("isAluno").value == 1 ? true : false;
    var codigo_treinador = document.getElementById("codigo_treinador").value;

    if (!nome) {
        alert("Por favor, preencha o campo nome.");
        return;
    }
    if (!login) {
        alert("Por favor, preencha o campo login.");
        return;
    }
    if (!login) {
        alert("Por favor, preencha o campo senha.");
        return;
    }
    if (isAluno && !codigo_treinador) {
        alert("Por favor, selecione um treinador.");

    }
    if (nome.length < 6) {
        alert("O nome deve ter pelo menos 6 caracteres.");
        return;
    }
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }
    if (login.length < 6) {
        alert("O login deve ter pelo menos 6 caracteres.");
        return;
    }

    var dados = {
        nome: nome,
        login: login,
        senha: senha,
        codigo_treinador: isAluno ? codigo_treinador : null
    };
    var jaExisteUsuario = await fetch(`http://localhost:3000/usuarios?login=${login}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res => {
        return res.json()
    })).then((res) => {
        if (res.length > 0) {
            return true;
        } else {
            return false;
        }
    })
    var idUsuario = 0
    if (!jaExisteUsuario) {
        criaUsuario = await fetch("http://localhost:3000/usuarios", {
                method: "POST",
                body: JSON.stringify(dados),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(function (response) {
                if (response.ok) {
                    return true;
                } else {
                    throw new Error("Erro ao cadastrar usuário.");
                }
            })
            .catch(function (error) {
                console.log("erro")
            });

        if (criaUsuario) {
            var usuarioCriado = await fetch(`http://localhost:3000/usuarios?login=${login}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                return res.json()
            }).then((res) => {
                idUsuario = res[0].id;
            })
        }
        if (isAluno) {
            window.location.href = `./treino_dieta.html?id=${idUsuario}`;
        } else {
            window.location.href = `./Principal_trainner.html?id=${idUsuario}`;
        }

        alert("Usuário cadastrado com sucesso.");
        usuarioCadastrado = true;
        document.getElementById("nome").value = "";
        document.getElementById("login").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("isAluno").value = "1";
    } else {
        alert("Já existe um usuário com o mesmo nome de usuário, digite outro")

    }


});