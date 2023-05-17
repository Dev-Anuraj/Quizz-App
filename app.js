const questions = [{
        'que': 'Which of the following is the markup language?',
        'a': 'HTML',
        'b': 'Javascript',
        'c': 'Ruby',
        'd': 'PHP',
        'Correct': 'a'
    },
    {
        'que': 'In which decade was the American Institute of Electrical Engineers (AIEE) founded?',
        'a': '1850s',
        'b': '1880s',
        'c': '1930s',
        'd': '1950s',
        'Correct': 'b'
    },
    {
        'que': 'What is part of a database that holds only one type of information?',
        'a': 'Report',
        'b': 'Field',
        'c': 'File',
        'd': 'Record',
        'Correct': 'b'
    },
    {
        'que': 'Which is a type of Electrically-Erasable Programmable Read-Only Memory?',
        'a': 'Fury',
        'b': 'Flange',
        'c': 'FRAM',
        'd': 'Flash',
        'Correct': 'd'
    }
]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll('.option')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    } else
        reset();
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer();
    if (ans == data.Correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )

}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `<div style="text-align:center; margin:1rem">
    <h3>Thank you for playing the Quiz Game!</h3>
    <h2>${right}/${total} are correct</h2>
    </div>`
}

loadQuestion()