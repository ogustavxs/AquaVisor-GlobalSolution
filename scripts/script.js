const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputTelefone = document.getElementById("telefone")
const inputMensagem = document.getElementById("mensagem")
const btnEnviar = document.getElementById("btnEnviar")
const form = document.getElementById("form")

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault()
    let nome = inputNome.value.trim()  
    let email = inputEmail.value 
    let telefone = inputTelefone.value 
    let mensagem = inputMensagem.value
    let primeiroNome = nome.split(" ")[0]

    if (nome === "" || email === "" || mensagem === "" || telefone === "") {
        alert("Preencha todos os campos!")

        return
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, digite um email válido!")

        return
    } else if (telefone.length < 10 || telefone.length > 11) {
        alert("Por favor, digite um número de telefone válido!")

        return
    }

    alert(primeiroNome + ", obrigado por entrar em contato, aguarde nosso retorno!")
    form.reset()
})