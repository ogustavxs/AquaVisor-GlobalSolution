// Verificação do formulário 

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

// Automatização do SlideShow

let count = 1
document.getElementById("radio1").checked = true

setInterval( function(){
    nextImage();
}, 5500)

function nextImage(){
    count++
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true
}

// Botão hamburguer
const hamburguerButton = document.getElementById('hamburguer-button');
const hamburguerMenu = document.querySelector('.hamburguer-menu');

hamburguerButton.addEventListener('click', () => {
    if (window.innerWidth >= 1090) {
        hamburguerMenu.style.display = 'none';
        return;
    }
    hamburguerMenu.style.display = hamburguerMenu.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1090) {
        hamburguerMenu.style.display = 'none';
    }
});


// Modos de cores
const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.dataset.theme; // 'dark' e 'light'

        body.classList.remove('modo-escuro', 'modo-claro');
        
        if (theme === 'dark') {
            body.classList.add('modo-escuro');
        } else if (theme === 'light') {
            body.classList.add('modo-claro');
        }

    });
});