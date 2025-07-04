
const quizData = [
    { type: "text", question: "Quale parola o frase vuoi tatuarti?", id: "frase" },
    { type: "text", question: "Dove pensi di tatuarla?", id: "zona" },
    { type: "text", question: "Qual è il tuo segno zodiacale?", id: "segno" },
    { question: "Ti senti più:", options: ["Introverso", "Estroverso", "Un mix"], id: "personalita" },
    { question: "Che tipo di energia vuoi trasmettere?", options: ["Delicata", "Potente", "Misteriosa", "Ispiratrice"], id: "energia" },
    { question: "Stile del carattere:", options: ["Stampatello", "Corsivo / scritto a mano", "Un mix"], id: "stile" },
    { question: "Che emozione vuoi comunicare?", options: ["Amore", "Libertà", "Rabbia", "Forza"], id: "emozione" },
    { question: "Preferisci un look:", options: ["Minimal", "Elaborato"], id: "look" },
    { question: "Linee:", options: ["Geometriche", "Fluide", "Organiche"], id: "linee" },
    { question: "Ti piacciono le grazie nei font?", options: ["Sì", "No", "Non so"], id: "grazie" },
    { question: "Ti ispira di più uno stile:", options: ["Classico", "Moderno", "Futuristico"], id: "epoca" },
    { question: "Vuoi un font che ricordi:", options: ["Eleganza", "Forza", "Street Style", "Creatività"], id: "impressione" },
    { question: "Orientamento culturale preferito:", options: ["Europeo", "Asiatico", "Americano", "Indifferente"], id: "cultura" },
    { question: "Il significato è per te:", options: ["Molto personale", "Solo estetico", "Entrambi"], id: "significato" },
    { question: "Che tipo di persona ti consideri?", options: ["Artistica", "Logica", "Sensibile", "Ribelle"], id: "tipo" },
    { question: "Hai già altri tatuaggi?", options: ["Sì", "No"], id: "altritattoo" },
    { question: "Il tatuaggio deve:", options: ["Essere visibile", "Rimanere intimo"], id: "visibile" },
    { question: "Quanto vuoi che sia originale?", options: ["Molto originale", "Equilibrato", "Classico e semplice"], id: "originalita" },
    { question: "Ti ispira uno stile gotico / dark?", options: ["Sì", "No", "Un po'"], id: "dark" },
    { type: "text", question: "Come ti definiresti con una parola?", id: "definizione" },
    { question: "Come descriveresti il tuo gusto estetico?", options: ["Pulito", "Decorativo", "Visionario"], id: "gusto" },
    { question: "Cosa vuoi che lasci questo tatuaggio?", options: ["Un messaggio", "Un’emozione", "Un’energia"], id: "impatto" }
];

let current = 0;
const responses = {};

window.onload = () => showQuestion();

function showQuestion() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";

    const q = quizData[current];
    const label = document.createElement("label");
    label.innerText = q.question;
    container.appendChild(label);

    if (q.type === "text") {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "answer";
        container.appendChild(input);
    } else {
        q.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.innerText = opt;
            btn.onclick = () => nextQuestion(q.id, opt);
            container.appendChild(btn);
        });
    }

    if (q.type === "text") {
        const nextBtn = document.createElement("button");
        nextBtn.innerText = "Avanti";
        nextBtn.onclick = () => {
            const val = document.getElementById("answer").value.trim();
            if (val) nextQuestion(q.id, val);
        };
        container.appendChild(nextBtn);
    }
}

function nextQuestion(id, answer) {
    responses[id] = answer;
    current++;
    if (current < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const container = document.getElementById("quiz-container");
    container.style.display = "none";
    const result = document.getElementById("result-container");
    result.style.display = "block";
    const font = matchFont(responses);
    document.getElementById("font-name").innerText = font;
}

function matchFont(data) {
    let score = 0;
    const keywords = Object.values(data).join(" ").toLowerCase();

    if (keywords.includes("corsivo") || keywords.includes("scritto")) score += 2;
    if (keywords.includes("gotico") || keywords.includes("dark")) score += 2;
    if (keywords.includes("minimal") || keywords.includes("pulito")) score += 1;
    if (keywords.includes("elaborato") || keywords.includes("decorativo")) score += 2;
    if (keywords.includes("artistica") || keywords.includes("visione")) score += 3;
    if (keywords.includes("classico")) score -= 1;

    if (score >= 6) return "Great Vibes";
    if (score >= 4) return "Alex Brush";
    if (score >= 2) return "Montserrat";
    return "Futura";
}

function downloadPDF() {
    alert("Questa funzione è disponibile solo per utenti premium.");
}
