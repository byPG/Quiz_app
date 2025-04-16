const quizData = [
    {
        question: 'How old is Paulina?',
        a: '10',
        b: '18',
        c: '29',
        d: '30',
        correct: 'd'
    },
    {
        question: 'Who is the President of the USA?',
        a: 'Ivan Saldano',
        b: 'Donald Trump',
        c: 'Barack Obama',
        d: 'Paulina :D',
        correct: 'd'
    },
    {
        question: 'What is the best programming language? :) ',
        a: 'Java',
        b: 'JavaScript',
        c: 'Python',
        d: 'PHP',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    },

    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    },

];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score= 0;

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuiz();


function getSelected(){
 let answer = undefined;

    answerEls.forEach((answerEl)=>{
       if(answerEl.checked){
       answer = answerEl.id;
       }
    });
   return answer;
}
getSelected();

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
        }
     );
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
    
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You ansered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});

