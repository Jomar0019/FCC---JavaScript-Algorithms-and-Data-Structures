const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const regNumRegex = /1 555-555-5555/;
const parNumRegex = /1 \(555\) 555-5555/
const sameNumRegex = /5555555555/;

const validList = [regNumRegex, parNumRegex, sameNumRegex];

const isValid = nums => validList.some(regex => regex.test(nums));


checkBtn.addEventListener('click', (numRegex) => {
    if(userInput.value === '') {
        alert("Please provide a phone number");
        return;
    }

    result.textContent = isValid(userInput.value) ? `Valid US number: ${userInput.value}` : `Invalid US number: ${userInput.value}`
});

clearBtn.addEventListener('click', () => {
    result.textContent = '';
});