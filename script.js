
const questions = [
    "Ti piace uno stile classico o moderno?",
    "Preferisci tatuaggi minimal o elaborati?",
    "Maschile, femminile o neutro?",
    "Che emozione vuoi trasmettere?",
    "Preferisci scritte dritte o curve?",
    "Su che parte del corpo andrai a tatuarlo?",
    "Ti piacciono le grazie nei font?",
    "Vuoi qualcosa di elegante o aggressivo?",
    "Quanto deve essere leggibile?",
    "Ti ispira uno stile gotico?",
    "Stile scritto a mano o stampatello?",
    "Ti ispiri alla natura o alla città?",
    "Stile più europeo o americano?",
    "Hai già un tatuaggio simile?",
    "Deve avere un significato profondo?",
    "Vuoi stupire o rimanere sobrio?",
    "Stile geometrico o fluido?",
    "Hai una frase in mente?",
    "Hai già un font che ti piace?",
    "Quanto vuoi che sia unico?"
];

let currentQuestion = 0;
let answers = [];

window.onload = () => {
    showQuestion();
};

function showQuestion() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = `
        <p>${questions[currentQuestion]}</p>
        <button onclick="nextAnswer('A')">A</button>
        <button onclick="nextAnswer('B')">B</button>
    `;
}

function nextAnswer(answer) {
    answers.push(answer);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quiz = document.getElementById("quiz-container");
    const result = document.getElementById("result-container");
    const font = matchFont(answers);

    quiz.style.display = "none";
    result.style.display = "block";
    document.getElementById("font-name").innerText = font;
}

function matchFont(answers) {
    // Algoritmo semplificato di matching
    const score = answers.filter(a => a === 'A').length;
    if (score < 7) return "Old English";
    if (score < 14) return "Helvetica Neue";
    return "Great Vibes";
}

function downloadPDF() {
    alert("Funzione riservata agli utenti premium.");
}
