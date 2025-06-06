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

// Quiz - LÓGICA SIMPLIFICADA E FUNCIONAL (COM 10 PERGUNTAS)

const pergunta = [
    {
        pergunta: "Qual é o principal diferencial do sistema AquaVisor em comparação com os sistemas de alerta atuais?",
        resposta: [
            {text: "Ser o mais caro do mercado", correct: false},
            {text: "Funcionar sem conexão com a internet", correct: true},
            {text: "Utilizar exclusivamente alertas por e-mail", correct: false},
            {text: "Depender de uma rede social específica", correct: false},
        ]
    },
    {
        pergunta: "Quais componentes o dispositivo local do AquaVisor utiliza para emitir alertas imediatos?",
        resposta: [
            {text: "Buzzer para som e barras de LED para alerta visual", correct: true},
            {text: "Apenas uma sirene de longo alcance", correct: false},
            {text: "Uma tela de celular e um alto-falante", correct: false},
            {text: "Vibrações e um projetor de imagens", correct: false},
        ]
    },
    {
        pergunta: "Além do alerta local, de que outra forma o AquaVisor permite o monitoramento da área de risco?",
        resposta: [
            {text: "Enviando um relatório diário por correio", correct: false},
            {text: "Apenas com o dispositivo físico, não há outra forma", correct: false},
            {text: "Através de um site online com as informações dos sensores", correct: true},
            {text: "Ligando para uma central de atendimento 24h", correct: false},
        ]
    },
    {
        pergunta: "Onde devem ser instalados os sensores do AquaVisor para garantir a máxima eficácia?",
        resposta: [
            {text: "No telhado da casa mais alta do bairro", correct: false},
            {text: "Em qualquer lugar, desde que esteja perto da água", correct: false},
            {text: "Apenas dentro das casas dos usuários", correct: false},
            {text: "Em pontos estratégicos definidos com base em dados históricos de enchente", correct: true},
        ]
    },
    {
        pergunta: "Qual é uma característica importante do dispositivo AquaVisor, de acordo com seus requisitos não funcionais?",
        resposta: [
            {text: "Ter um preço acessível e ser de fácil instalação", correct: true},
            {text: "Ser extremamente pesado e difícil de mover", correct: false},
            {text: "Precisar de um técnico especialista para a instalação", correct: false},
            {text: "Ser compatível apenas com uma marca de celular", correct: false},
        ]
    },
    {
        pergunta: "Qual é um dos principais problemas dos sistemas de alerta de enchentes atuais que o AquaVisor busca resolver?",
        resposta: [
            {text: "Serem genéricos e muitas vezes atrasados", correct: true},
            {text: "Exigirem conhecimento técnico avançado para usar", correct: false},
            {text: "Serem rápidos demais e causarem pânico desnecessário", correct: false},
            {text: "Terem um custo de manutenção muito baixo", correct: false},
        ]
    },
    {
        pergunta: "O dispositivo físico do AquaVisor foi projetado para ser robusto. O que isso significa?",
        resposta: [
            {text: "Ser à prova de fogo e de balas", correct: false},
            {text: "Ser o aparelho mais pesado do mercado", correct: false},
            {text: "Ser resistente a condições como chuva forte, calor e poeira", correct: true},
            {text: "Funcionar apenas em ambientes fechados e com ar condicionado", correct: false},
        ]
    },
    {
        pergunta: "Qual o principal tipo de desastre natural que causa mais prejuízos econômicos anualmente no Brasil?",
        resposta: [
            {text: "Secas prolongadas", correct: false},
            {text: "Enchentes e inundações", correct: true},
            {text: "Deslizamentos de terra", correct: false},
            {text: "Ciclones e vendavais", correct: false},
        ]
    },
    {
        pergunta: "Para que o usuário tenha a informação mais precisa possível, como os dados são tratados no site do AquaVisor?",
        resposta: [
            {text: "São atualizados uma vez por semana", correct: false},
            {text: "São atualizados apenas quando o usuário paga uma taxa", correct: false},
            {text: "São atualizados constantemente, em intervalos regulares", correct: true},
            {text: "São atualizados apenas durante a noite", correct: false},
        ]
    },
    {
        pergunta: "Qual é a principal prioridade do sistema de alertas do AquaVisor?",
        resposta: [
            {text: "Enviar notificações apenas para o governo", correct: false},
            {text: "Garantir o alerta local (sonoro e visual), que não depende de infraestrutura externa", correct: true},
            {text: "Focar 100% no monitoramento pelo site, que é mais completo", correct: false},
            {text: "Integrar com redes sociais para postar os alertas", correct: false},
        ]
    }
];

const perguntaElement = document.getElementById("pergunta");
const respostaElement = document.getElementById("botaoResposta");

let perguntaAtualIndex = 0;
let score = 0;

function carregarPergunta() {
    let perguntaAtual = pergunta[perguntaAtualIndex];
    perguntaElement.innerHTML = (perguntaAtualIndex + 1) + ". " + perguntaAtual.pergunta;

    respostaElement.innerHTML = "";

    perguntaAtual.resposta.forEach(resposta => {
        const button = document.createElement("button");
        button.innerHTML = resposta.text;
        button.classList.add("btnQuiz"); 
        
        button.addEventListener("click", () => verificarResposta(resposta.correct));
        
        respostaElement.appendChild(button);
    });
}

function verificarResposta(isCorrect) {
    if (isCorrect) {
        alert("Resposta correta!");
        score++; 
    } else {
        alert("Resposta incorreta.");
    }

    perguntaAtualIndex++;

    if (perguntaAtualIndex < pergunta.length) {
        carregarPergunta();
    } else {
        alert(`Quiz concluído!\nVocê acertou ${score} de ${pergunta.length} perguntas.`);
        perguntaAtualIndex = 0;
        score = 0;
        carregarPergunta();
    }
}

carregarPergunta();