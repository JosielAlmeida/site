

function testeUsuario() {
    if (document.getElementById("emailcadastro").value == "") {
        document.getElementById("emailerro").innerHTML = "Email é obrigatório";
    }
    else if (document.getElementById("emailcadastro").value.indexOf("@") == -1) {
        document.getElementById("emailerro").innerHTML = "Email inválido";
    }
}