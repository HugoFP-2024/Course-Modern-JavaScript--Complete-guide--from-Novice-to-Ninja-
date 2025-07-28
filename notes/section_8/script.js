// Quiz form logic: checks answers, calculates score, and animates the result display

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const correctAnswers = ['B', 'B', 'B'];

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;
    let number = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    scrollTo(0, 0);
    result.classList.remove('d-none');

    // resultNumber.textContent = score.toString() + '%';
    // result.classList.remove('d-none');

    // result.querySelector('span').textContent = `${score}%`;
    // result.classList.remove('d-none');

    const scoreNumber = setInterval(() => {
        result.querySelector('span').textContent = `${number}%`;
        if (number === score) {
            clearInterval(scoreNumber);
        }
        else {
            number++;
        }
    }, 50);

    // setTimeout(() => {
    //     // Do something.
    // }, 3000)
});

