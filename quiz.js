function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    if(userAnswer) {
    const feedback = document.getElementById('feedback');

        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color =rgb(40, 167, 69);
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color =rgb(220, 53, 69);
        }
    }

    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
}