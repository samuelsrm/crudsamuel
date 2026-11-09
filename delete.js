function deletarDados() {
    let id = document.getElementById('identificadorDelete').value

    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'DELETE'
    })
    .then(resposta => resposta.json())
}