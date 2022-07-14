const quizData = [
    {
        question: 'How old is Nkemjika?',
        a: '10',
        b: '17',
        c: '26',
        d: '30',
        correct: 'd'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: "What is the url to Nkemjika's protfolio website?",
        a: 'nkemjika.io',
        b: 'nkem.dev',
        c: 'nkem.gmail',
        d: 'kemji.dev',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Javascript Object Notation',
        d: 'Helicopters Terminals Motorboats',
        correct: 'a'
    },
    {
        question: 'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'b'
    }
]
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question')
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');

const container_header = document.querySelector('.container-header');
const container_body = document.querySelector('.container-body');

const submitBtn = document.getElementById('submit')

let currentQuestion = 0
let score = 0

function loadQuiz() {
    deselectAnswers(); 

    const currentQuizData = quizData[currentQuestion]
    questionElement.innerHTML = currentQuizData.question

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}
loadQuiz();

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');

    let answer = undefined; 

    answerEls.forEach(answerEl => {
  

        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
    
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {

        if(answer == quizData[currentQuestion].correct) {
            score++
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            let scoreBoard = document.createElement('div')
            scoreBoard.className = 'score'
            quiz.appendChild(scoreBoard)
            scoreBoard.style.position = 'relative'
            scoreBoard.style.marginTop = "25%";
            container_header.style.display = 'none'
            container_body.style.display = 'none'
            submitBtn.style.display = 'none'

            scoreBoard.innerHTML = `You answered <h2>${score}/${quizData.length}</h2> <button onclick='location.reload()'>Reload</button>`
        }
    }



})


/*const h1 = document.createElement("h1")
h1.textContent = "imperative declaration"
h1.className = "header"
document.getElementById('root').appendChild(h1)
console.log(h1)

const element = <h1 className="header">This is JSX</h1>
ReactDOM.render(element, document.getElementById('root'))*/