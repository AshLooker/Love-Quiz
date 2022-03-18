const start_btn = document.querySelector(".start_btn button"); 
const rule_box = document.querySelector(".rule_box"); 
const quit_btn = rule_box.querySelector(".buttons .quit"); 
const continue_btn = rule_box.querySelector(".buttons .restart");
const quiz_area = document.querySelector(".quiz_area");

start_btn.onclick = () => {
    rule_box.classList.add("activeRule");
}

quit_btn.onclick = () => {
    rule_box.classList.remove("activeRule");
}

continue_btn.onclick = () => {
    rule_box.classList.remove("activeRule");
    quiz_area.classList.add("activeQuiz");
}