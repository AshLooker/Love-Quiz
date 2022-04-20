const start_btn = document.querySelector(".start_btn button"); 
const rule_box = document.querySelector(".rule_box"); 
const quit_btn = rule_box.querySelector(".buttons .quit"); 
const continue_btn = rule_box.querySelector(".buttons .restart");
const quiz_area = document.querySelector(".quiz_area");



const answer_list = document.querySelector(".answer_list");


start_btn.onclick = () => {
    rule_box.classList.add("activeRule");
}

quit_btn.onclick = () => {
    rule_box.classList.remove("activeRule");
}

continue_btn.onclick = () => {
    rule_box.classList.remove("activeRule");
    quiz_area.classList.add("activeQuiz");
    showQuestions(0);
    questionCounter(1);
}

let question_count = 0;
let question_number = 1;
let counter;
let counterLine;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_area.querySelector(".next_btn");
const result_area = document.querySelector(".result_area");
const restart_quiz = result_area.querySelector(".buttons .restart");
const quit = result_area.querySelector(".buttons .quit");

restart_quiz.onclick = () =>{
    quiz_area.classList.add(".activeQuiz"); 
    result_area.classList.remove(".activeResult");
    let question_count = 0;
    let question_number = 1;
    let widthValue = 0;
    showQuestions(question_count);
    questionCounter(question_number);
    startTimer(widthValue);
    next_btn.style.display = "none";   
}

quit.onclick = () =>{
    window.location.reload();
}

next_btn.onclick = ()=> {
    if(question_count < questions.length - 1) {
        question_count++;
        question_number++;
        showQuestions(question_count);
        questionCounter(question_number);
        startTimer(widthValue);
        next_btn.style.display = "none";
    }else{
        console.log("Questions Completed");
        showResultArea();
    }
}

function showQuestions(index){
    const question = document.querySelector(".question");
    let question_tag = '<span>'+ questions[index].Number + ". " + questions[index].question +'<span>';
    let answer_tag = '<div class="options">'+ questions[index].options[0] +'<span></span></div>'
                     + '<div class="options">'+ questions[index].options[1] +'<span></span></div>'
                     + '<div class="options">'+ questions[index].options[2] +'<span></span></div>'
                     + '<div class="options">'+ questions[index].options[3] +'<span></span></div>';
    question.innerHTML = question_tag;
    answer_list.innerHTML = answer_tag;
    
    const options = answer_list.querySelectorAll(".options");
    for(let i = 0; i < options.length; i++) {
        options[i].setAttribute("onclick","optionSelected(this)");
    }
}



let tickIcon = '<div class="icon tick"><i class="fa-solid fa-check"></i></div>'; 
let crossIcon = '<div class="icon cross"><i class="fa-solid fa-xmark"></i></div>'; 


function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAnswer = answer.textContent;
    let correctAnswer = questions[question_count].answer;
    let allOptions = answer_list.children.length;
    if(userAnswer == correctAnswer){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct")
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is Incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        
        for(let i = 0; i < allOptions; i++) {
            if(answer_list.children[i].textContent == correctAnswer){
                answer_list.children[i].setAttribute("class","options correct");
                answer_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        answer_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

function showResultArea() {
    rule_box.classList.remove("activeRule");
    quiz_area.classList.remove("activeQuiz");
    result_area.classList.add("activeResult");
    const score = result_area.querySelector(".score");
    if (userScore > 19){
        let scoreTag = '<span>Awesome!! You got <p>'+ userScore +'</p>out of <p>'+ questions.length +'</p>You are a Wizard</span>'
        score.innerHTML = scoreTag;
    }
    else if (userScore > 10){
        let scoreTag = '<span> Nice!! You got <p>'+ userScore +'</p>out of <p>'+ questions.length +'</p>Can you do better!?</span>'
        score.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>Sorry, you got <p>'+ userScore +'</p>out of <p>'+ questions.length +'</p>Have another try!</span>'
        score.innerHTML = scoreTag;
    }
}


function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCounter.textContent = time;
        
            let correctAnswer = questions[question_count].answer;
            let allOptions = answer_list.children.length;

            for(let i = 0; i < allOptions; i++) {
                if(answer_list.children[i].textContent == correctAnswer){
                    answer_list.children[i].setAttribute("class","options correct");
                    answer_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for (let i = 0; i < allOptions; i++) {
                answer_list.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";
        }
    }

function questionCounter (index){
    const bottom_questions_counter = quiz_area.querySelector(".total_questions");
    let totalQuestionsCounterTag = '<span><p>'+ question_count +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_questions_counter.innerHTML = totalQuestionsCounterTag;
}

