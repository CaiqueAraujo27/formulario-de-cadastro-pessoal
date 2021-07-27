function validacao() {
    var formulario = document.forms["formcadastro"]
    var nome = formulario.nome.value
    var cpf = formulario.cpf.value
    var endereço = formulario.endereço.value
    var telefonecelular = formulario.telefonecelular.value

    var erro = false
    if(nome.indexOF("") == -1) {
        alert("Preencha o nome")
    }

}