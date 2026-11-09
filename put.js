let idPessoaAtualizar = null; // Guarda o ID interno do registro retornado pela API

function buscarDados() {
    var cpf = document.getElementById('identificador').value;

    if (!cpf) {
        alert("Por favor, digite um CPF para buscar.");
        return;
    }

    fetch('http://localhost:3000/pessoas', {
        method: 'GET'
    })
    .then(resposta => resposta.json())
    .then(dados => {
        let pessoaEncontrada = dados.find(pessoa => pessoa.cpf == cpf);

        if (pessoaEncontrada) {
            idPessoaAtualizar = pessoaEncontrada.id;

            // Preenche os campos principais
            document.getElementById('identificador').value = pessoaEncontrada.cpf || '';
            document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome || '';

            // Preenche a senha e os demais campos do formulário para edição
            if (document.getElementById('senha')) document.getElementById('senha').value = pessoaEncontrada.senha || '';
            if (document.getElementById('sobrenome')) document.getElementById('sobrenome').value = pessoaEncontrada.sobrenome || '';
            if (document.getElementById('username')) document.getElementById('username').value = pessoaEncontrada.username || '';
            if (document.getElementById('rg')) document.getElementById('rg').value = pessoaEncontrada.rg || '';
            if (document.getElementById('cpf')) document.getElementById('cpf').value = pessoaEncontrada.cpf || '';
            if (document.getElementById('rua')) document.getElementById('rua').value = pessoaEncontrada.rua || '';
            if (document.getElementById('casa')) document.getElementById('casa').value = pessoaEncontrada.casa || '';
            if (document.getElementById('cidade')) document.getElementById('cidade').value = pessoaEncontrada.cidade || '';
            if (document.getElementById('bairro')) document.getElementById('bairro').value = pessoaEncontrada.bairro || '';
            if (document.getElementById('estado')) document.getElementById('estado').value = pessoaEncontrada.estado || '';
            if (document.getElementById('email')) document.getElementById('email').value = pessoaEncontrada.email || '';
            if (document.getElementById('telefone')) document.getElementById('telefone').value = pessoaEncontrada.telefone || '';

            alert("Dados encontrados e preenchidos!");
        } else {
            idPessoaAtualizar = null;
            alert("Pessoa não encontrada!");
        }
    })
    .catch(erro => console.error("Erro ao buscar dados:", erro));
}

function atualizarDados() {
    var cpfBusca = document.getElementById('identificador').value;

    if (!idPessoaAtualizar && !cpfBusca) {
        alert("Busque um registro por CPF antes de atualizar.");
        return;
    }

    // Coleta todos os campos atualizados do formulário, incluindo a senha
    const dadosAtualizados = {
        nome: document.getElementById('nomeAtualizar').value || document.getElementById('nome')?.value,
        sobrenome: document.getElementById('sobrenome')?.value || '',
        username: document.getElementById('username')?.value || '',
        senha: document.getElementById('senha')?.value || '',
        rg: document.getElementById('rg')?.value || '',
        cpf: document.getElementById('cpf')?.value || cpfBusca,
        rua: document.getElementById('rua')?.value || '',
        casa: document.getElementById('casa')?.value || '',
        cidade: document.getElementById('cidade')?.value || '',
        bairro: document.getElementById('bairro')?.value || '',
        estado: document.getElementById('estado')?.value || '',
        email: document.getElementById('email')?.value || '',
        telefone: document.getElementById('telefone')?.value || ''
    };

    let idOuCpf = idPessoaAtualizar ? idPessoaAtualizar : cpfBusca;

    fetch(`http://localhost:3000/pessoas/${idOuCpf}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosAtualizados)
    })
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error("Erro na requisição: " + resposta.statusText);
        }
        return resposta.json();
    })
    .then(dados => alert("Todas as informações (incluindo a senha) foram atualizadas com sucesso!"))
    .catch(erro => alert("Falha ao atualizar dados: " + erro.message));
}