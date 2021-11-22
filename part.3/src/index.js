const form = document.querySelector(".num-form");
const firstNumber = document.querySelector(".num__first")
const secondNumber = document.querySelector(".num__second")
const chose = document.querySelector(".chose")
const result = document.querySelector(".result");

function addNumber(event) {
    event.preventDefault();
    const number = secondNumber.value;
    const randomNumber = Math.floor(Math.random() * firstNumber.value);
    chose.innerText = `You chose: ${number}, the machine chose: ${randomNumber}`;

    if (number == randomNumber) {
        result.innerText = "You Win"
    } else {
        result.innerText = "You Lose"
    }
}

form.addEventListener("submit", addNumber);
