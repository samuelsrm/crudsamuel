function fazerLogin() {
    let administrador = document.getElementById('administrador').value
    let senha = document.getElementById('senha').value

    //Fazer a requisição GET - READ e buscar em pessoa
    fetch('http://localhost:3000/pessoas').then(resposta => resposta.json())
    .then(dados => {
        //Buscar o usuario e senha que foram digitados e que são existentes JSON-FIND
        let usuario = dados.find(pessoas => pessoas.administrador == administrador && pessoas.senha == senha)
        if(usuario) {
            window.location.href = 'administracao.html'
        } else {
            alert("Usuário/Senha Incorretos! Tente Novamente")
        }
    })
}