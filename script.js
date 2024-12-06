let submitBtn = document.querySelector('#submitBtn');
let input = document.querySelector('#input');
let status = document.querySelector('.status');
let guesses = document.querySelector('.guesses');
let startBtn = document.querySelector('#startBtn');
//random number
function getRandomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min - 1;
}

let target = getRandomNumber(1, 100);
let count  = 1;
submitBtn.addEventListener('click', function() {
    
    if (isNaN(parseInt(input.value))) {
        alert('Please enter a number.');
        return;
    } 
    if (count == 1) {
        guesses.innerText = "Your guesses: ";
    }

    startBtn.disabled = true;
    if(parseInt(input.value) === target) {
        status.innerText = "Congratulations! You guessed the correct number.";
        guesses.textContent += `${parseInt(input.value)}`;
        input.value = '';
        count ++;
        submitBtn.disabled = true;
        startBtn.disabled = false;
    } else {
        if(parseInt(input.value) > target) {
            status.innerText = "too high!"
            guesses.textContent += `${parseInt(input.value)} `;
            count ++;
        } else {
            status.innerText = "too low!"
            guesses.textContent += `${parseInt(input.value)} `;
            count ++;
        }
    }

    if (count == 10){
        status.innerText = `You Lost! Correct number is ${target}`;
        submitBtn.disabled = true;
        startBtn.disabled = false;
        startBtn.style.backgroundColor = '#000'; 
        startBtn.style.color = '#fff';
        return;
    }

    startBtn.addEventListener('click', function() {
        status.innerText = '';
        guesses.innerText = '';
        count = 1;
        target = getRandomNumber(1, 100);
        input.value = '';
        startBtn.style.backgroundColor = 'aqua'; 
        startBtn.style.color = '#000';
        submitBtn.disabled = false;
        startBtn.disabled = true;
    });
});

