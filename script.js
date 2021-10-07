const questions = document.getElementsByClassName("question");
const answers = document.getElementsByClassName("answer");

for (let i = 0; i < questions.length; i++) {
  questions[i].onclick = () => {
    answers[i].classList.toggle("open");
    questions[i].classList.toggle("bold");
  };
}
