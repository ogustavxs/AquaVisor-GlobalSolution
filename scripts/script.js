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

// Quiz


/*const pergunta = [
    {
        pergunta: "A",
        resposta: [
            {text: "A", correct: false},
            {text: "A", correct: true},
            {text: "A", correct: false},
            {text: "A", correct: false},
        ]
    },
    {
        pergunta: "A",
        resposta: [
            {text: "A", correct: true},
            {text: "A", correct: false},
            {text: "A", correct: false},
            {text: "A", correct: false},
        ]
    },
    {
        pergunta: "A",
        resposta: [
            {text: "A", correct: false},
            {text: "A", correct: false},
            {text: "A", correct: true},
            {text: "A", correct: false},
        ]
    },
        {
        question: "A",
        resposta: [
            {text: "A", correct: false},
            {text: "A", correct: false},
            {text: "A", correct: false},
            {text: "A", correct: true},
        ]
    },
    {
        pergunta: "A",
        resposta: [
            {text: "A", correct: true},
            {text: "A", correct: false},
            {text: "A", correct: false},
            {text: "A", correct: false},
        ]
    },
    {
        pergunta: "A",
        resposta: [
            {text: "A", correct: true},
            {text: "A", correct: false},
            {text: "A", correct: false},
            {text: "A", correct: false},
        ],
    }
];

const perguntaElement = document.getElementById("pergunta")
const respostaElement = document.getElementById("btnQuiz")
const nextElement = document.getElementById("next")

let perguntaIndex = 0;
let pontuacao = 0;

function comecarQuiz(){
    perguntaIndex = 0;
    pontuacao = 0;
    nextElement.innerHTML = "Next";
    showQuestion();
}

function mostrarPergunta(){
    //resetState();
    let perguntaAtual = perguntas[perguntaIndex];
    let perguntaNmr = perguntaIndex + 1;
    perguntaElement.innerHTML = perguntaNmr + ". " + perguntaAtual.pergunta;

    perguntaAtual.respostas.forEach(resposta => {
        const botao = document.createElement("botao");
        botao.innerHTML = resposta.text;
        botao.classList.add("botaoQuiz");
        respostaBotao.appendChild(botao);
    });
}*/
