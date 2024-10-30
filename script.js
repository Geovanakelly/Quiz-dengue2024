const quizData = [
    {
        question: "Qual é o principal transmissor da dengue?",
        a: "Aedes aegypti",
        b: "Aedes albopictus",
        c: "Culex pipiens",
        d: "Anopheles",
        correct: "a"
    },
    {
        question: "Quais são os sintomas da dengue?",
        a: "Febre, dor de cabeça, dor atrás dos olhos",
        b: "Tosse e resfriado",
        c: "Diarreia",
        d: "Vômito e febre",
        correct: "a"
    },
    {
        question: "Como prevenir a dengue?",
        a: "Deixar água parada",
        b: "Usar repelente",
        c: "Tomar medicamentos",
        d: "Fazer exercícios",
        correct: "b"
    },
    {
        question: "Em que época do ano a dengue é mais comum?",
        a: "Inverno",
        b: "Verão",
        c: "Outono",
        d: "Primavera",
        correct: "b"
    },
    {
        question: "Qual o tratamento recomendado para a dengue?",
        a: "Antibióticos",
        b: "Repouso e hidratação",
        c: "Cirurgia",
        d: "Medicamentos anti-inflamatórios",
        correct: "b"
    },
    {
        question: "A dengue pode ser fatal?",
        a: "Sim, em casos graves",
        b: "Não, nunca",
        c: "Apenas em crianças",
        d: "Apenas em idosos",
        correct: "a"
    },
    {
        question: "Quantas vezes uma pessoa pode contrair dengue?",
        a: "Uma vez na vida",
        b: "Duas vezes",
        c: "Até quatro vezes",
        d: "Quantas vezes quiser",
        correct: "c"
    },
    {
        question: "A vacina da dengue é recomendada para quem?",
        a: "Qualquer pessoa",
        b: "Apenas para pessoas que já tiveram dengue",
        c: "Apenas para crianças",
        d: "Para pessoas com 9 anos ou mais que já tiveram dengue",
        correct: "d"
    },
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div class="answer" onclick="checkAnswer('a')">${currentQuestion.a}</div>
        <div class="answer" onclick="checkAnswer('b')">${currentQuestion.b}</div>
        <div class="answer" onclick="checkAnswer('c')">${currentQuestion.c}</div>
        <div class="answer" onclick="checkAnswer('d')">${currentQuestion.d}</div>
    `;
}

function checkAnswer(selected) {
    const currentQuestion = quizData[currentQuestionIndex];
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        answer.classList.remove('correct', 'wrong');
        if (answer.innerText === currentQuestion[currentQuestion.correct]) {
            answer.classList.add('correct');
        } else if (answer.innerText === currentQuestion[selected]) {
            answer.classList.add('wrong');
        }
    });
    currentQuestionIndex++;
    const nextButton = document.getElementById("nextButton");
    nextButton.classList.remove("hidden");
}

document.getElementById("nextButton").addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        this.classList.add("hidden");
    } else {
        showResults();
    }
});

function showResults() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `<h2>Obrigado por participar!</h2>`;
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("nextButton").classList.add("hidden");
}

loadQuestion();
