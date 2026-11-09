fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        var tabelaCorpo = document.getElementById('tabela-corpo');
        tabelaCorpo.innerHTML = ''; // Limpa a tabela antes de preencher

        dados.forEach(objeto => {
            var tr = document.createElement('tr');

            // Criando e preenchendo as 13 células correspondentes ao <thead> do HTML
            tr.innerHTML = `
                <td>${objeto.id ?? ''}</td>
                <td>${objeto.nome ?? ''}</td>
                <td>${objeto.sobrenome ?? ''}</td>
                <td>${objeto.senha ?? ''}</td>
                <td>${objeto.rg ?? ''}</td>
                <td>${objeto.cpf ?? ''}</td>
                <td>${objeto.rua ?? ''}</td>
                <td>${objeto.casa ?? ''}</td>
                <td>${objeto.cidade ?? ''}</td>
                <td>${objeto.bairro ?? ''}</td>
                <td>${objeto.estado ?? ''}</td>
                <td>${objeto.email ?? ''}</td>
                <td>${objeto.telefone ?? ''}</td>
            `;

            tabelaCorpo.appendChild(tr);
        });
    })
    .catch(erro => console.error("Erro ao carregar dados:", erro));