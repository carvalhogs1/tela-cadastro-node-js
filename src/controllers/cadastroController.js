function exibirPaginaDeCadastro(request, response){
    return response.render('cadastro');
}

function criarConta(request, response){
    console.log(request.body)
    return response.redirect("cadastro")
}

module.exports = {
    exibirPaginaDeCadastro,
    criarConta
}